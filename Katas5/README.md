# Katas 5 Tests

## To Run These Tests as a Grader

1: Go to the test suite repo (here) and clone it to your machine.

2: cd into the cloned directory and run `npm install` from the command line.

3: Run `node run.js ___student's_repo_url___`.  Upon execution the output of the test results will be written to your console.

If you would like to test it on a dummy submission link, use `node run.js https://github.com/jragard/katas5test`

## To Run These Tests as a Student

Simply run `mocha test` from the command line in this directory

# Katas 5 Instructions

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
