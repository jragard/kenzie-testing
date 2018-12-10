# Assessment: Convert Numbers To Words

## To Run These Tests

1: Go to the test suite repo (here) and clone it to your machine.

2: cd into the cloned directory and run `npm install` from the command line.

3: Run `node run.js ___student's_repo_url___`.  Upon execution the output of the test results will be written to your console.

If you would like to test it on a dummy submission link, use `node run.js https://github.com/jragard/numberstowordstest`

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