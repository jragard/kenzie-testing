# Kenzie Academy Frontend Javascript Testing Files

This repo is for the development of automated testing suites to be run on student assessment submissions in order to automatically grade them.  The goal of these tests is to significantly reduce time and mental bandwith committed to grading assignments, which should free coaches up to give more focused and directed feedback. Each directory is a test suite tailored for its particular curricular assignment, containing a `README` with revised assignment instructions and instructions on how to run the tests.  Each suite also includes a `test.js` file containing the actual tests, and a `run.js` file containing a script that allows the tester to supply a github url as a command line arg and automatically pull down the contents of each student's submission to run the appropriate tests. Some assignments may provide the student with a file containing partial code for them to fill in.  The test suites that correspond with these assignments will also include `providedFile.js`. In the longer term, we will explore using the tests to create an online browser interface that gives immediate automated feedback upon student code submission.  

# Basic Guidelines For Creating New Test Suites

1. Create a new directory for the test, with a name that clearly identifies the assessment it is meant to test

2. cd into the directory and from the command line run `npm i fs axios child_process yargs mocha chai` 
3. run `touch run.js test.js README.md`
4. The README file should include a quick 3 step guide on running the tests (for new graders or people using these tools for the first time).  Below that, detailed instructions for the assignment, as close as possible to what you think should be displayed on Canvas should also be included.  Refer to the README in the Katas1 directory for a template.
5. Copy the script found in `run-js-example.js` at the root of this project directory into your new `run.js` file.  

2 IMPORTANT NOTES:  In `run-js-example.js`, notice the end of line 9 -- `/katas1.js`.  You will need to replace this with the filename the student will be submitting.  If the assignment does not already include a provided file that we can name ahead of time, you will need to revise the assignment guidelines to include explicit instructions for the students to name their submission files according to whatever file name you choose to include at the end of line 9 in your `run.js` script.  

Notice the empty object brackets on line 14 of the script (`file.write('\nmodule.exports = {  };)`)  This is where you will need to add the function names to be exported from the student's submission.  Most of the assignments that use this approach will either have provided files with function names already declared, or the assignment instructions will explicitly require functions to be declared with pre-decided names.


6.  `test.js` is where you write your tests.  At the top of the file, include the line `const { __functions_to_import__  } = require('./s.js)`, filling in the object brackets with each function name you need to import from the student's submission.  Now you can call the functions in the test file.

7.  Since we will be pulling content directly from student's github url's, we will no longer need solution files in the test directories.  Instead, to verify your tests are working, create your own simple repo with just a solutions file for the assignment and use that url.






