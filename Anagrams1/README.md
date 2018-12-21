# How To Use

1. clone this repo
2. `npm i` (to install the dependencies -- axios and yargs)
3. `npm i -g mocha` (if mocha is not already installed globally on your machine)
4. copy the repo address submitted by the student
  * This first draft only works for github submissions.
  * The students will be required to create an 'anagrams.js' in the root directory of their project
  * anagrams.js will be required to contain a function getAnagramsOf(input) that returns an array of all anagrams of input.  This is the method that is tested
5. type `node run.js ___student's_repo_address___`

The output of the test will be writen to your console.


## Example
The following repo has been set up as a sample test
`node run.js https://github.com/carlfsmithiii/anatest`


## What this does
words.js is the word list that the students are using to find anagrams
anagramTest.js contains tests
run.js is a script that does the following:
  1. Creates a file stream to write to 's.js' in the current directory
  2. Parses the command line argument for the student repo, and generates the url for the raw version of anagrams.js
  3. makes a GET request for the raw version of anagrams.js
  4. writes `const { words } = require('./words')` to s.js in order to make the words array available to the students code
  5. writes the students anagrams.js to s.js
  * any `use 'strict'` is removed, since this conflicts with module.exports  
  6. writes `module.exports = { getAnagramsOf }` to s.js
  * At this point, s.js is ready to be tested.  It contains the student's code along with the necessary import and export statements
  7. Calls `mocha anagramsTest.js` and displays the output to the console
  * anagramsTest.js is hard coded to test s.js
  8. Deletes s.js


### why?
* Students currently gain access to the words array in words.js by placing the script tag `<script src="words.js"></script>` in their html document alongside `<script src="anagrams.js"></script>`.  words.js thus declares the words array on the global namespace of the browser, which makes it available to the student in anagrams.js.  By contrast, testing using node requires that the words array must be imported into anagrams.js.  This method allows us to get what we need for testing without forcing the students to add any superfluous code that shouldn't exist in code written for a browser.

* This simplifies testing -- No more need to manually download each student's repo and then add the test files in order to run the test.  This test directory can be used for all students

* This approach could be automated.  All we are doing is pasting the submitted repo link.  
