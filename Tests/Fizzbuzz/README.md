Instructions to Run Tests (with Katas1 as example assignment)

# How To Run Tests

1.  Run `npm install --global git+https://github.com/jragard/kenzie-testing`
2.  To test local file, the file should be named according to assignment instructions (e.g. fizzbuzz.js). Then run `kenzie-test fizzbuzz` (or appropriate assignment name)
3.  To test a completed assignment from a github or gitlab link, run `kenzie-test fizzbuzz -g https://github.com/swkane/fizzbuzz` (or whatever the submitted github or gitlab link happens to be)

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

### IMPORTANT: If you do not name and export your functions correctly, the tests will not run and the submission will not be accepted.

## Bonus

- Write a second function named `fizzbuzzPrime`.
- This function will follow all of the rules of your fizzbuzz function and 1 additional rule:
  - If a number is a prime number, concatenate "Prime," to the end of your string
