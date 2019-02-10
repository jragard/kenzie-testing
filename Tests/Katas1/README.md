 # Katas 1 Tests

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test katas1 -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test katas1 -g 10771136` will grab the contents of the file at https://gitlab.com/jragard/katas1.

3. To test a completed assignment from a github link, run `kenzie-test katas1 -g https://github.com/jragard/katas1` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `katas1.js` and `katas1`).  Then run `kenzie-test katas1` (or appropriate assignment name)

## TESTING BUG ##

As of now, our command line tool will sometimes get confused if you are trying to test a file from a github/gitlab link, while in the same directory of a local version of the same file (or a file/directory with the same name).  For now, when running tests on github/gitlab submissions, you will want to make sure you aren't in the same directory as any local version of the assignment you are trying to test.

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


