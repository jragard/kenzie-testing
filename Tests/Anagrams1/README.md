# Assessment: Anagrams Part 1 #

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test anagrams1 -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test anagrams1 -g 10771115` will grab the contents of the file at https://gitlab.com/jragard/anagrams1.

3. To test a completed assignment from a github link, run `kenzie-test anagrams1 -g https://github.com/jragard/anagrams1` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `anagrams1.js` and `anagrams1`).  Then run `kenzie-test anagrams1` (or appropriate assignment name) while in the `anagrams1` directory.

## TESTING BUG ##

As of now, our command line tool will sometimes get confused if you are trying to test a file from a github/gitlab link, while in the same directory of a local version of the same file (or a file/directory with the same name).  For now, when running tests on github/gitlab submissions, you will want to make sure you aren't in the same directory as any local version of the assignment you are trying to test.

### Anagrams ###

Anagrams are words that are made up of the same letters, but in a different order.

For example, _"least"_ and _"steal"_ are anagrams.

There is a dictionary of words, represented as an array, available in [words.js](https://my.kenzie.academy/files/1489/download?download_frd=1)

You will implement a function called `getAnagramsOf(input)` that takes an text input value from an input field in your html, and returns an array of the text input's anagrams. For example, calling typing "steal" into the text input field should return an array similar to `["least", "slate", "stale", "tales"]`.  You will create a web page with an input field to type in a word, and a button that, when clicked, will fire off your `getAnagramsOf` function to find all the dictionary words that are anagrams of your text input.

### Getting Started ###

Create a new directory for this project called `anagrams1`. Create an `index.html` file, and an `anagrams1.js` file. Commit and push these files to a new repository in GitLab.  **It is important to follow these naming instructions for the testing/grading tools to work**

You will need to include the `words.js` file as a script. Save it in your `anagrams1` directory, and link it to your html file in a script tag:

```html
<script type="text/javascript" src="words.js"></script>
```

Remember to also add the file to your git repository.

Next, you'll need a way to let the user enter some text. The following snippet of HTML defines a text field and a button:

```html
<div>
    <input type="text" id="input" size=40>
    <button id="findButton">Find Anagrams</button>
</div>
```

By itself, your button doesn't do anything. You will attach a click handler function that will execute when the button is clicked:

```js
const button = document.getElementById("findButton");
button.onclick = function () {
    // your code goes here
}
```

Inside your onclick function, you will need a way to access the content typed into the text field when the button is clicked.  Then you can pass that content to your `getAnagramsOf` function as an argument:

```js
button.onclick = function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
}
```


### Detecting Anagrams  ###

You need a way to test whether two strings contain the same letters, but in a different order.

Consider the effect of sorting the letters alphabetically. This puts the letters into a standard order, regardless of how they were originally arranged in the word. Here is a function that you can use to accomplish this:

```js
function alphabetize(a) {
	return a.toLowerCase().split("").sort().join("").trim();
}
```

Take a look at the effect of applying the alphabetize function to some words:

`alphabetize("lair")` returns `"ailr"`

`alphabetize("liar")` returns `"ailr"`

`alphabetize("rail")` returns `"ailr"`

`alphabetize("least")` returns `"aelst"`

`alphabetize("steal")` returns `"aelst"`

The alphabetically sorted forms are the same for each word in a set of anagrams. Both "least" and "steal" look like `"aelst"` when they are alphabetized. Similarly, "lair", "liar", and "rail" all look the same once the letters are sorted into alphabetical order. So, you can use this alphabetize function to help you determine when two words are anagrams of each other.

Once you have your array of results, in your function create a new Element and set its textContent = to your results array.  Then use `document.body.appendChild()` to append your new element to the page.  Lastly, use `return` to return the results array.

# Testing #

For this assessment, you will have access to testing tools as you work.  To test your work as you go, follow these instructions:

1. Your solutions file should be named `anagrams1.js` and it should live in a directory/folder called `anagrams1`.  Name your main function `getAnagramsOf`.  **It is important to follow these naming instructions, or the testing tools will not work, and you will not receive points.**
2. If you already have node/npm installed, skip this step. From your terminal, run the command `brew install node`. Verify the install completed by running `node --version` (You should see something like `v8.12.0` or similar), then `npm --version` (You should see something like `6.4.1` or similar)
3. If you have already installed the kenzie-test npm package, skip this step. Again from your terminal, run the command `npm install --global git+https://github.com/jragard/kenzie-testing`
4. You can test the functions in your anagrams1.js file by navigating to the anagrams1 directory that holds your file.  When you are in the same directory as your `anagrams1.js` file, run the terminal command `kenzie-test anagrams1`.  You will receive instant feedback in your terminal.  You can run these tests repeatedly as you complete katas to verify that your solutions are correct.

# For Graders #

For this assessment, students will submit their Gitlab Project ID #.  To grade:

1.  If you haven't already, run `npm install --global git+https://github.com/jragard/kenzie-testing` to install the testing package.
2.  Run `kenzie-test anagrams1 -g <Project ID>`  The results will be displayed in your terminal.

### Completed example ###

Here is a screenshot of a finished implementation:

![](https://i.snag.gy/nJVN0w.jpg)

# Submission

1. Your Gitlab project must be shared with the KA_SE5 account with "Reporter" as role permission.
2. You will submit your Gitlab Project ID # in Canvas, located right below your project name. (See Below) You can copy/paste it.



## What run.js does
words.js is the word list that the students are using to find anagrams
anagramTest.js contains tests
run.js is a script that does the following:
  1. Creates a file stream to write to 's.js' in the test directory
  2. Parses the command line argument for the student repo, and generates the url for the raw version of anagrams.js.  If no url is provided, the test is run on the 'anagrams.js' file in the root directory of the local project.
  3. makes a GET request for the raw version of anagrams.js
  4. writes `const { words } = require('./words')` to s.js in order to make the words array available to the students code
  5. writes the students anagrams.js to s.js
  * any `use 'strict'` is removed, since this conflicts with module.exports  
  6. writes `module.exports = { getAnagramsOf: (typeof getAnagramsOf) === 'function' && getAnagramsOf }` to s.js.  This allows the test file to determine whether or not getAnagramsOf has been implemented before running tests.
  * At this point, s.js is ready to be tested.  It contains the student's code along with the necessary import and export statements
  7. Calls `mocha` and displays the output to the console
  * anagramsTest.js is hard coded to test s.js
  8. Deletes s.js


### why?
* Students currently gain access to the words array in words.js by placing the script tag `<script src="words.js"></script>` in their html document alongside `<script src="anagrams.js"></script>`.  words.js thus declares the words array on the global namespace of the browser, which makes it available to the student in anagrams.js.  By contrast, testing using node requires that the words array must be imported into anagrams.js.  This method allows us to get what we need for testing without forcing the students to add any superfluous code that shouldn't exist in code written for a browser.

* This simplifies testing -- No more need to manually download each student's repo and then add the test files in order to run the test.  This test directory can be used for all students

* This approach could be automated.  All we are doing is pasting the submitted repo link.  
