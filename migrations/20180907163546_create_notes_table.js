
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table){
    table.integer('lecture');
    table.string('subject');
    table.string('course');
    table.string('identifier').unique();
    table.text('body','MEDIUMTEXT');
    table.timestamps(false, true);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};
