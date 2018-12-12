 # Katas 1 Tests

## To Run These Tests

1: Go to the test suite repo (here) and clone it to your machine.

2: cd into the cloned directory and run `npm install` from the command line.

3: Run `node run.js ___student's_repo_url___`.  Upon execution the output of the test results will be written to your console.

If you would like to test it on a dummy submission link, use `node run.js https://github.com/jragard/katas1runtest`

# Katas 1 Instructions

A kata is an individual exercise where you practice a programming skill through repetition.  Today you will practice using JavaScript loops, conditionals, and expressions through a series of katas.  

To start, go to this repository containing the katas1.js file and clone it (If the students are not yet familiar with cloning, we can include step by step instructions).  Fill in the missing code in each function, using a for loop.  Use numbers.push() in your for loop to add each number to the empty 'numbers' array, which will be returned in the last line of the function.  Each correctly completed kata is worth 1 point.

# Example

```
function oneThroughFive() {
    const numbers = [];

    // Your code goes below

    return numbers;
}
```

Code added below the commented out line:

`for(let counter = 1; counter <= 5; counter++) {
    numbers.push(counter)
}`

### Katas


1.  Return the numbers from 1 to 20. (1, 2, 3,..., 19, 20)

2.  Return the even numbers from 1 to 20. (2, 4, 6,...18,20)
3.  Return the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
4.  Return the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
5.  Return the square numbers up to 100. (1, 4, 9, ..., 81, 100)
6.  Return the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
7.  Return the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
8.  Return the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
9.  Return the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
10.  Return the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)


