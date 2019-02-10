# Assessment: Anagrams Part 2 #

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test anagrams2 -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test anagrams2 -g 10771128` will grab the contents of the file at https://gitlab.com/jragard/katas4.

3. To test a completed assignment from a github link, run `kenzie-test anagrams2 -g https://github.com/jragard/anagrams2` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `anagrams2.js` and `anagrams2`).  Then run `kenzie-test anagrams2` (or appropriate assignment name) while in the `anagrams2` directory.

## TESTING BUG ##

As of now, our command line tool will sometimes get confused if you are trying to test a file from a github/gitlab link, while in the same directory of a local version of the same file (or a file/directory with the same name).  For now, when running tests on github/gitlab submissions, you will want to make sure you aren't in the same directory as any local version of the assignment you are trying to test.

Remember that two words are anagrams if they consist of the same letters but in a different order.

For example, _“least”_ and _“steal”_ are anagrams. You began working with anagrams earlier in the assignment: [Assessment: Anagrams Part 1](https://my.kenzie.academy/courses/20/assignments/1527?module_item_id=1950). Refresh your memory by taking another look at that assignment.

Today, you will tackle a more challenging problem involving anagrams. Once again, you will use the dictionary of words available in [`words.js`](https://my.kenzie.academy/files/1489/download?download_frd=1), and the following function to help you check when words are anagrams:

```js
function alphabetize(a) {  
	return  a.toLowerCase().split("").sort().join("").trim();  
}
```

### Your task ###

The array `["lair", "liar", "rail"]` is a set of three words that are all anagrams of each other — that is, they all consist of exactly the same letters.

Implement a function named `getSetsOfFiveAnagrams()` that **finds and returns all the sets** of 5 or more words within `words.js` that are anagrams of each other, and output each set to the DOM. Your function should return a nested array of arrays, meaning you should end up with one big array that holds smaller arrays containing anagram sets.
**It is important to follow the function naming instructions for the testing/grading tools to work**

### Hints ###

We need to test whether two strings contain the same letters, but in a different order.

Recall how you used the `alphabetize()` function to sort the letters alphabetically. This puts the letters into a standard order, regardless of how they were originally arranged in the word. You saw that:

`alphabetize("lair")` returns `"ailr"`

`alphabetize("liar")` returns `"ailr"`

`alphabetize("rail")` returns `"ailr"`

`alphabetize("least")` returns `"aelst"`

`alphabetize("steal")` returns `"aelst"`

This alphabetically sorted form is the same for each word in a set of anagrams. You can use the alphabetized form as a unique identifier for that set of anagrams. As an intermediate step in solving the problems above, try using an Object to group together sets of mutual anagrams by creating a data structure like the following:

```js
anagramSets = {  
	"ailr": ["lair", "liar", "rail"],  
	"aelst": ["least", "steal", ... ],  
	...  
};
```

Then you can loop over all the entries in anagramSets and display the ones consisting of 5 or more words.

* * *

# Testing #

For this assessment, you will have access to testing tools as you work.  To test your work as you go, follow these instructions:

1. Your solutions file should be named `anagrams2.js` and it should live in a directory/folder called `anagrams2`.  Name your main function `getSetsOfFiveAnagrams()`.  **It is important to follow these naming instructions, or the testing tools will not work, and you will not receive points.**
2. If you already have node/npm installed, skip this step. From your terminal, run the command `brew install node`. Verify the install completed by running `node --version` (You should see something like `v8.12.0` or similar), then `npm --version` (You should see something like `6.4.1` or similar)
3. If you have already installed the kenzie-test npm package, skip this step. Again from your terminal, run the command `npm install --global git+https://github.com/jragard/kenzie-testing`
4. You can test the functions in your anagrams2.js file by navigating to the anagrams2 directory that holds your file.  When you are in the same directory as your `anagrams2.js` file, run the terminal command `kenzie-test anagrams2`.  You will receive instant feedback in your terminal.  You can run these tests repeatedly as you complete katas to verify that your solutions are correct.

# For Graders #

For this assessment, students will submit their Gitlab Project ID #.  To grade:

1.  If you haven't already, run `npm install --global git+https://github.com/jragard/kenzie-testing` to install the testing package.
2.  Run `kenzie-test anagrams2 -g <Project ID>`  The results will be displayed in your terminal.

# Submission

1. Your Gitlab project must be shared with the KA_SE5 account with "Reporter" as role permission.
2. You will submit your Gitlab Project ID # in Canvas, located right below your project name. (See Below) You can copy/paste it.


![](project_id.png)

### Bonus ###

For an additional challenge, try these harder problems:

**Finding two word anagrams:** _Allow the user to enter a word or phrase in a text field and search for two-word anagrams (ignoring spaces)._

```
ryan agard
(4 combinations)  
ad + granary  
array + dang  
dana + garry  
nagy,yang + radar
```

**Finding three word anagrams:** _Search for three-word anagrams of a user-provided phrase._

```
morgan shepard  
(778 combinations)  
	...  
dragon + phase,shape + mr  
	...
```

```
edwin marshall  
(1159 combinations)  
   ...  
darn,rand + whale + slim  
   ...  
dream + shall + win  
   ...  
salad + men + whirl  
   ...
```

```
michael cammarano  
(416 combinations)  
   ...  
archaic + mammal + one  
   ...  
aroma + machine + calm,clam  
   ...
```






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
