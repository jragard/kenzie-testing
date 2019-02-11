# Katas 2 Tests

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test katas2 -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test katas2 -g 10771144` will grab the contents of the file at https://gitlab.com/jragard/katas2.

3. To test a completed assignment from a github link, run `kenzie-test katas2 -g https://github.com/jragard/katas2` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `katas2.js` and `katas2`).  Then run `kenzie-test katas2` (or appropriate assignment name)

## IMPORTANT TESTING BUG ##

Currently, when testing a file from a gitlab or github repo, the test won't run properly if the student doesn't name their file exactly `katas2.js` (this is case sensitive).  We already have been instructing students to name files specifically for our tests to work, but I could see the case sensitive issue coming up if students, for instance, name their file `Katas2.js`.  This is something I plan to fix at some point, but it's good to be aware of.  This issue stems from lines 19 and 22 in the run.js for this test suite.

# Katas 2 Instructions

Overview

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops and functions. The functions start out trivial and ramp up in difficulty. The main goals of these katas are:

     * get you used to writing and calling functions that take arguments and return results
     * get you used to breaking down a problem into the various parts of a for loop

You will use the [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword for the output of your function. Unlike other katas we've done up until now, most of these build on each other, which means that **you'll need to complete them in order.**

When giving constraints for the implementation, note that anything I say about functions also applies to methods (we'll talk about the difference soon).

# Add (1 point)

Write a function named "add" that takes two arguments and returns their sum.

You may use built-in operators to finish the definition.

For example, calling *add*(2, 4) should return a result of 6.


# Multiply (2 points)

Write a function named "multiply" that takes two arguments and returns their product.

You **may not** use built-in arithmetic operators or functions (like the `*` built-in operator for multiplication). Instead, you'll need a for loop which calls the "add" function you wrote earlier.

For example, calling *multiply*(6, 8) should return a result of 48.


# Power (2 points)

Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.

You **may not** use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function (like the `*` built-in operator for multiplication, or the `**` operator for power/exponentiation).

Another word for this is "exponentiation". For example, if we called *power*(2, 8), we return 256 by multiplying 2 by itself 8 times:

    2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256

If we had called *power*(3, 4), we'd want to multiply 3 by itself 4 times:

    3 * 3 * 3 * 3 = 81

See [this](https://simple.wikipedia.org/wiki/Exponentiation) Wikipedia article for more details on exponentiation.

# Factorial

Write a function named "factorial" that takes a single argument and returns the factorial of that argument .

You **may not** use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function (like the `*` built-in operator for multiplication).

For example, calling *factorial*(4) should return a result of 24.

# Fibonacci (3 points)

Write a function named "fibonacci" that takes an argument n and returns the nth [Fibonacci number](https://simple.wikipedia.org/wiki/Fibonacci_number). 

You **may not** use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function (like the `*` built-in operator for multiplication).

For example, calling *fibonacci*(8) should return a result of 13.

0  1  1  2  3  5  8  [13]  21

The number in brackets is the 8th fibonacci number.

# Hints

1. The answer to most of these will look similar. They will typically involve:
    * declaring a variable to keep track of a final result
    * writing a for loop to consistently modify the result
    * returning the result
    
2.  If you struggle for more than 5 minutes, **ask for help!** This is an exercise in critical thinking, not torture.

