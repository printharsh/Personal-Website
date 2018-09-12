---
Course: 'COMP 206'
Subject: 'Computer Science'
Date: 'September 10, 2018'
LectureNumber: 3
---

# Commands Terminal
- cut (allows you you to extract info from a line) (default behavior same line)
  - -f = field
  - -c = character
  - -s = suppress, just cut out those fields don't replicate fields
  - -d = delimiter to delete
- Ctrl C vs Ctrl D (C = kill program, D = done entering input)
  - ^D: Ends standard input
- tr = translates

# IO
- Can attach other things than your keyboard to standard input
  - A file using "<" operator
  - Ex. grep pattern < search_file.txt *Grep searches through search file*
  - '|' *pipe operator* can link output to another command
- Output redirection
  - A file using '>' operator can output it to something else.
  - >> = append * still creates it if wasn't there previously
    - can redirect, standard output only, standard error, or both
      - 1> output ('same as >')
      - 2> captures only errors but other output comes to terminal
      - &> means both to file
  - ls > 'file' Creates file then outputs ls text into file
- Can do both input and output redirection at once!

# Pipes
- A pipe is a holder for a stream of data.
- pipe can be used to hold output of one program and feed into another. (Directly connect STDOUT of one into STDIN of other), '|'
