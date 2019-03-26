# FizzBuzz

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `sudo npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test fizzbuzz -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test fizzbuzz -g 10791900` will grab the contents of the file at https://gitlab.com/jragard/fizzbuzz.

3. To test a completed assignment from a github link, run `kenzie-test fizzbuzz -g https://github.com/jragard/fizzbuzz` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `fizzbuzz.js` and `fizzbuzz`).  Then run `kenzie-test fizzbuzz` (or appropriate assignment name) while in the local `fizzbuzz` directory.

## IMPORTANT TESTING BUG ##

Currently, when testing a file from a gitlab or github repo, the test won't run properly if the student doesn't name their file exactly `coinObject.js` (this is case sensitive).  We already have been instructing students to name files specifically for our tests to work, but I could see the case sensitive issue coming up if students, for instance, name their file `coinobject.js`.  This is something I plan to fix at some point, but it's good to be aware of.  This issue stems from lines 19 and 22 in the run.js for this test suite, and could come up in other situations if students don't name their files the way we ask.  (`Katas1.js` instead of `katas1.js` for instance)

# Assessment Instructions

This assessment will introduce you to a common programming puzzle called FizzBuzz. It requires that you use both loops and conditionals. Variations of this puzzle are widely used as an initial screening question during job interviews.
Because this is a classic puzzle, it's easy to look up solutions online. It will be good practice for you to first try to solve the puzzle yourself before searching online.

- Create a file called `fizzbuzz.js` and store it in a directory called `fizzbuzz`

- Write a function named `fizzbuzz` that takes one parameter - `maxValue`.
- Your function should return a string with comma separated values with no spaces.
- This function should loop through 1 - the value of the parameter passed in (inclusive).
  - If a number is even, concatenate "Fizz," to the end of your string.
  - If a number is a multiple of 3, concatenate "Buzz," to the end of your string.
  - If a number is even and a multiple of 3 concatenate "FizzBuzz," to the end of your string.
  - If a number is none of these things, concatenate the number itself and a "," to the end of your string.
- This function should return this string after 1000 iterations of the loop.
- If implemented correctly, the string you return should have a trailing comma; please leave this comma here.

### IMPORTANT: If you do not name and export your functions correctly, the tests will not run and the submission will not be accepted.

## Bonus

- Write a second function named `fizzbuzzPrime`.
- This function will follow all of the rules of your fizzbuzz function and 1 additional rule:
  - If a number is a prime number, concatenate "Prime," to the end of your string
