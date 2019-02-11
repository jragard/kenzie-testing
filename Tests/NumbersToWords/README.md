# Assessment: Convert Numbers To Words

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test numbersToWords -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test numbersToWords -g 10771158` will grab the contents of the file at https://gitlab.com/jragard/numbersToWords.

3. To test a completed assignment from a github link, run `kenzie-test numbersToWords -g https://github.com/jragard/numbersToWords` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `numbersToWords.js` and `numbersToWords`).  Then run `kenzie-test numbersToWords`

## IMPORTANT TESTING BUG ##

Currently, when testing a file from a gitlab or github repo, the test won't run properly if the student doesn't name their file exactly `numbersToWords.js` (this is case sensitive).  We already have been instructing students to name files specifically for our tests to work, but I could see the case sensitive issue coming up if students, for instance, name their file `NumbersToWords.js` or `numberstowords.js`.  This is something I plan to fix at some point, but it's good to be aware of.  This issue stems from lines 19 and 22 in the run.js for this test suite.

# Assignment Instructions

Write a function named *numbersToWords* that returns an array with all the numbers from 1 through 1000 **in words**, e.g. "one hundred seventeen" or "three hundred forty two".  

IMPORTANT: For testing/grading purposes, make sure you name your function *numbersToWords*

Start off small by only handling the numbers from 1 to 20 at first. *(1 points)*

Once you've figured that out, extend your solution to work for the numbers up to 100. *(3 points)*

If you've solved that, continue on to the full solution handling all the numbers up to 1000. *(6 points)*

Get as far as you can.  It's always ok to ask for help.  If you are successfully returning all the numbers, create a web page that uses JavaScript to display them.  Write a seperate helper function to display the results of calling *numbersToWords* on the page.

## Hints

You should expect to use loops and conditionals in implementing your answer, and arrays will be very helpful as well.

Think about how to handle each number in terms of [place values](https://www.mathsisfun.com/place-value.html) like hundreds, tens, and ones.

Try creating some predefined constant arrays to map numeric place values onto strings representing the corresponding English word. For example, one of these arrays might look like:

```
const tenName = ["", "ten", "twenty", "thirty", "forty", "fifty",
                 "sixty", "seventy", "eighty", "ninety"];
```

You may find there are some special cases that don't follow the usual pattern. Try to find a concise way to handle these cases by using what you know about conditionals (if statements).

## Bonus

If this was too easy and you'd like to take on an additional challenge, try creating similar logic for describing time differences in words. Write a function that takes a JavaScript Date as a parameter, and returns a String giving a human-readable difference from the current time. The human readable time differences should be rounded to the appropriate unit, e.g. "20 seconds ago", "14 minutes ago", "2 hours ago", "3 days ago", "4 months ago", or "7 years ago".