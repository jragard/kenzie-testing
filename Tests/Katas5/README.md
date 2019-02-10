# Katas 5 Tests

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test katas5 -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test katas5 -g 10771147` will grab the contents of the file at https://gitlab.com/jragard/katas5.

3. To test a completed assignment from a github link, run `kenzie-test katas5 -g https://github.com/jragard/katas5` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `katas5.js` and `katas5`).  Then run `kenzie-test katas5` (or appropriate assignment name)

## TESTING BUG ##

As of now, our command line tool will sometimes get confused if you are trying to test a file from a github/gitlab link, while in the same directory of a local version of the same file (or a file/directory with the same name).  For now, when running tests on github/gitlab submissions, you will want to make sure you aren't in the same directory as any local version of the assignment you are trying to test.

### Katas 5 ###

# Overview

Remember when we talked about unit tests?  Review [Lesson: Unit Testing](https://my.kenzie.academy/courses/20/assignments/1633) if you need a refresher.

For today's katas, you will implement several functions. You should write at least two unit tests for each function demonstrating their behavior. All your output can be via console.assert(); you don't need to do any HTML formatting for any of these katas.

## Katas

1. Write a function named reverseString that reverses a string. Then write two unit test functions named testReverseString1 and testReverseString2.
2. Write a function named reverseSentence that reverses a sentence. Then write two unit test functions named testReverseSentence1 and testReverseSentence2.
3. Write a function named minimumValue that finds the minimum value in an array. Then write two unit test functions named testMinimumValue1 and testMinimumValue2.
4. Write a function named maximumValue that finds the maximum value in an array. Then write two unit test functions named testMaximumValue1 and testMaximumValue2.
5. Write a function named calculateRemainder that calculates a remainder (given a numerator and a denominator). Then write two unit test functions named testCalculateRemainder1 and testCalculateRemainder2.
6. Write a function named distinctValues that returns distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7"). Then write two unit test functions named testDistinctValues1 and testDistinctValues2.
7. Write a function named countValues that returns the values from a list and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)"). Then write two unit test functions named testCountValues1 and testCountValues2.
8. Write a function named evaluateExpression that, given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, returns the result of the expression ("a + b + c - d" would be -3). Then write two unit test functions named testEvaluateExpression1 and testEvaluateExpression2.

As an example, a unit test for the 8th kata might look like:

```
testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -3)
}
```

## Grading

You will get one point for each completed kata (each function must be accompanied by at least two well-chosen test cases to be considered complete).
