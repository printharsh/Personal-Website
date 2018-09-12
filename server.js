//IMPORTS dot environment variables
require('dotenv').config();
//Imports express and creates an app constant
const express = require('express')
const app = express()
var fs = require('fs'), fm = require('front-matter')
var MarkdownIt = require('markdown-it'), md = new MarkdownIt();
var request = require('request');


var glob = require('glob')
var notes = [];
var data;
var loadedNotes = false;

var knex = require('knex')({
  client: 'mysql',
  connection: {
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_ACCESS_KEY,
  },
  pool: {
    min: parseInt(process.env.DATABASE_POOL_MIN,10),
    max: parseInt(process.env.DATABASE_POOL_MAX,10),
  }
});

glob('./notes/**/*.md', function(er, files) {
  console.log(files);

  files.forEach(function(file) {

    fs.readFile(file,'utf8', function(err, data){
      if(err) throw err

      var content = fm(data)
      notes.push(content);
    });
  });
});


//Uses pug to render the index page
app.get('/', (req, res) => {
  res.render('index');
});

//Renders the notes page
app.get('/notes', (req, res) => {
  //Just need to send subjects and corresponding courses!
  //Will act as page to query and build URL to be /notes/COURSE!
  if(!loadedNotes){
    console.log('loading notes for the first time...');
    notes.forEach(function(note){
      let lectureNumber = note['attributes']['LectureNumber'];
      let subjectName = note['attributes']['Subject'];
      let bodyText = md.render(note['body']);
      let courseName = note['attributes']['Course'];
      let identifierText = courseName + lectureNumber;

      knex('notes').insert({
        lecture: lectureNumber,
        subject: subjectName,
        course: courseName,
        identifier: identifierText,
        body: bodyText
      }).then( function (result) {
            console.log('added?');   // respond back to request
      }).catch((e) => console.log('Duplicate Entries, do not fear!'));
    });
    loadedNotes = true;
  }
  var subjectsList = {};

  //Builds JSON object with Subjects and corresponding courses
  knex('notes').distinct('course').select('subject','course').then( function(subjectsAndCourses) {
    subjectsAndCourses.forEach(function(courseID){
      if(!subjectsList.hasOwnProperty(courseID['subject'])){
        subjectsList[courseID['subject']] = [];
      }

      subjectsList[courseID['subject']].push(courseID['course']);


    });
    res.render('notes', {data: subjectsList});
  });



});


//Renders the course notes pages
app.get('/notes/:Course', (req,res) =>{
  knex('notes').where('course', req.params.Course).select().then(notesForCourse => {
    console.log(notesForCourse);
    res.render('coursenotes', {data: notesForCourse, courseName: req.params.Course});
  });
});

//Renders the projects page
app.get('/projects', (req, res) => {
  var content = fs.readFileSync("./public/projects/projects.json");
  var toGive = JSON.parse(content);
  res.render('projects', {data: toGive});
});

//Allows environment to pass port variable otherwise does default 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})

//Sets view engine as pug
app.set('view engine', 'pug')

//Sets static directory as public
app.use(express.static(__dirname + '/public'));
