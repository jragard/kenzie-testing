# Changes to assignment
Students will have to start with a template directory that includes the test directory and its contents, the run.js file, and package.json.  Alternatively, if we want the students to be able to build off of their solution from Anagrams 1 without starting a new project, we could combine the test and student template directories for Anagrams 1 and Anagrams 2.  They will need to run `npm i` in order to install the dependencies (yargs and nagios) and `npm i -g mocha` so that mocha is globally available on their machine.  They can then implement the code as required by the assignment, which requires them to create an anagrams.js file.  We will probably want to emphasize that this name is critical, as I believe many of the submissions from SE4 used a different name.  The student README will need to be updated to add that they must implement a `getSetsOfFiveAnagrams()` method that returns a nested array where the inner arrays are an array of anagrams.  This is the method that is tested.  The output of `getSetsOfFiveAnagrams()` should take the form
`[
    [ 'aaaab', 'aaaba', 'aabaa', 'abaaa', 'baaaa'],
    [ 'aaaac', ...],
    ...
]`

# How To Use (for testers)

1. clone this repo
2. `npm i` (to install the dependencies -- axios and yargs)
3. `npm i -g mocha` (if mocha is not already installed globally on your machine)
4. copy the repo address submitted by the student
  * This will work with github and gitlab addresses
  * The students will be required to create an 'anagrams.js' in the root directory of their project
  * anagrams.js will be required to contain a function getSetsOfFiveAnagrams() that returns a nested array containing all sets of 5 anagrams.  This is the method that is tested
5. type `npm run test ___student's_repo_address___` or `npm run grade ___student's_repo_address___`

The output of the test will be writen to your console.

## Example
The following repo has been set up as a sample test
`npm run grade https://github.com/carlfsmithiii/anatest2`

# How To Use (for students)

1. Clone the template repo.
2. Complete the assignment.
3. run `npm run test` from the root directory of the project
