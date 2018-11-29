# Katas 2 Tests

Each kata has one 'describe' statement with 2 tests (except #1) in test/katas2-test.js - one test is for the correct answer we are expecting, and the other test is ensuring the student didn't use the restricted built-in arithmetic operators as specified in the assessment instructions.  

# Katas 2 Instructions

As these instructions already ask the student to 'write a function named x and return y', they don't need to be modified much.  We have 2 options for how to approach this assignment with regards to making sure the functions are exported correctly so our tests can run.  

Option 1) We can have the student clone a file with the modules.export statement already included at the beginning.  Thus, as long as they name their functions according to the instructions, they will automatically be exported.

Option 2) If we don't want the students to have to clone a file, we can add to the instructions to guide the student in writing their own module.exports statement, or even just include the code snippet in the instructions for them to copy/paste. 