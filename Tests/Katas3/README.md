# Assessment: JavaScript Katas 3 #

### Overview ###

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using loops, conditionals, and expressions through a series of katas, and practice creating html elements to display your results using Javascript.

To start, create a new directory called katas4, and inside create a file named `katas3.js`. Write a new function for each kata, and name them `kata1()`, `kata2()`, `kata3()`, `kata4()`, etc.  **It is important to follow these naming conventions, or the testing/grading tools may not work**

In each function, before you return your final value, you should use the `document.createElement` and `node.appendChild()` methods to display the value on a web page.  Then return the value.

# Testing #

For this assessment, you will have access to testing tools as you work.  To test your work as you go, follow these instructions:

1. If you already have node/npm installed, skip this step.  From your terminal, run the command `brew install node`. Verify the install completed by running `node --version` (You should see something like `v8.12.0` or similar), then `npm --version` (You should see something like `6.4.1` or similar)
2. If you already have the kenzie testing npm package, skip this step.  Again from your terminal, run the command ` sudo npm install --global git+https://github.com/jragard/kenzie-testing`
3. You can test the functions in your katas3.js file by navigating to the katas1 directory that holds your file.  When you are in the same directory as your `katas3.js` file, run the terminal command `kenzie-test katas3`.  You will receive instant feedback in your terminal.  You can run these tests repeatedly as you complete the katas to verify that your solutions are correct.

# For Graders #

For this assessment, students will submit their Gitlab Project ID #.  To grade:

1.  If you haven't already, run `npm install --global git+https://github.com/jragard/kenzie-testing` to install the testing package.
2.  Run `kenzie-test katas1 -g <Project ID>`  The results will be displayed in your terminal.

### Katas

1.  Write a function that returns the numbers from 1 to 20. (1, 2, 3,..., 19, 20)

2.  Write a function that returns the even numbers from 1 to 20. (2, 4, 6,...18,20)
3.  Write a function that returns the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
4.  Write a function that returns the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
5.  Write a function that returns the square numbers up to 100. (1, 4, 9, ..., 81, 100)
6.  Write a function that returns the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
7.  Write a function that returns the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
8.  Write a function that returns the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
9.  Write a function that returns the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
10.  Write a function that returns the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)
11. Write a function that returns all 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)
12. Write a function that returns all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)
13. Write a function that returns all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)
14. Write a function that returns the square of each element in sampleArray. (219961, 570025, ..., 222784)
15. Write a function that returns the sum of all the numbers from 1 to 20.
16. Write a function that returns the sum of all the elements in sampleArray.
17. Write a function that returns the smallest element in sampleArray.
18. Write a function that returns the largest element in sampleArray.
19. Write a function that displays 20 solid gray rectangles, each 20px high and 100px wide.
20. Write a function that displays 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
21. Write a function that displays 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
22. As in #21, but alternate colors so that every other rectangle is red.
23. As in #21, but color the rectangles with even widths red.

### Submission ###

Push your code into your GitLab repository and use the GitLab Pages feature to allow your site to be viewed directly. In Canvas, please add KA_SE5 as a member on your project with "Reporter" permission, and submit your gitlab pages url, **with your Project ID number included as a comment on your submission**.  Your Project ID number is located directly under your project name (see below).
