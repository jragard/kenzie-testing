# Katas 7 Tests

## To Run These Tests

1: Go to the test suite repo (here) and clone it to your machine.

2: cd into the cloned directory and run `npm install` from the command line.

3: Run `node run.js ___student's_repo_url___`.  Upon execution the output of the test results will be written to your console.

If you would like to test it on a dummy submission link, use `node run.js https://github.com/jragard/katas7test`


# Katas 7 Instructions

In this assessment, you will exercise the creation and use of callback functions, as well as familiarize yourself with how JavaScript's built-in Array methods actually work under the hood.

JavaScript provides us several "iteration methods" based on the same sort of callback pattern you've seen in the case of forEach() in the lesson on Callback Functions. These are essentially ready-made loops, with a little bit of extra behavior sprinkled in for common patterns and spice.

## Your Task, Should You Choose to Submit It

Your task will be to reproduce the behavior of these Array methods with your own functions - *without* using JavaScript's *built-in* versions:

1. [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
2. [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
4. [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
5. [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
6. [every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
7. [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Name each of your functions accordingly: newForEach, newMap, newSome, newFind, newFindIndex, newEvery, newFilter

IMPORTANT:  For testing/grading purposes, it's important that you name your functions according to the above standard.

Your implementation of each of the above iteration methods must match *in arguments* and *in return value*.

## Bonus

Also implement your own version of the following array methods. Name your new functions with the same format that you used for the first 7 methods.  Most of these do not require a callback function. You don't have to do these in the following order.

[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

[includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

[indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

[flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

[flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

[Array.of()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)