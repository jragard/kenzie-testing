## To Run These Tests

1: Go to the test suite repo (here) and clone it to your machine.

2: cd into the cloned directory and run `npm install` from the command line.

3: Run `node run.js ___student's_repo_url___`. Upon execution the output of the test results will be written to your console.

If you would like to test it on a dummy submission link, use `node run.js https://github.com/swkane/fizzbuzz d`

# Assessment Instructions

- Create a file called `fizzbuzz.js` (if you do not already have one)

- Write a function named `fizzbuzz`.
- This function will have one parameter - `maxValue`.
- This function should return a string with comma separated values with no spaces.
- This function should loop through 1 - the value of the parameter passed in (inclusive).
  - If a number is even, concatenate "Fizz," to the end of your string.
  - If a number is a multiple of 3, concatenate "Buzz," to the end of your string.
  - If a number is even and a multiple of 3 concatenate "FizzBuzz," to the end of your string.
  - If a number is none of these things, concatenate the number itself and a "," to the end of your string.
- This function should return this string after 1000 iterations of the loop.
- If implemented correctly, the string you return should have a trailing comma, leave this comma

- Write a second function named `writeToDOM`.
- This function will have one parameter - `fizzbuzzResult`.
- This function should take the string you pass to it, `fizzBuzzResult`, and attach it to the DOM

### IMPORTANT: If you do not name and export your functions correctly, the tests will not run and the submission will not be accepted.

## Bonus

- Write a third function named `fizzbuzzPrime`.
- This function will follow all of the rules of your fizzbuzz function and 1 additional rule:
  - If a number is a prime number, concatenate "Prime," to the end of your string
