# Katas 7 Tests

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test katas7 -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test katas7 -g 10771151` will grab the contents of the file at https://gitlab.com/jragard/katas7.

3. To test a completed assignment from a github link, run `kenzie-test katas7 -g https://github.com/jragard/katas7` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `katas7.js` and `katas7`).  Then run `kenzie-test katas7` (or appropriate assignment name)

## TESTING BUG ##

As of now, our command line tool will sometimes get confused if you are trying to test a file from a github/gitlab link, while in the same directory of a local version of the same file (or a file/directory with the same name).  For now, when running tests on github/gitlab submissions, you will want to make sure you aren't in the same directory as any local version of the assignment you are trying to test.


# Katas 7 Instructions

In this assessment, you will exercise the creation and use of callback functions, as well as familiarize yourself with how JavaScript's built-in Array methods actually work under the hood.

JavaScript provides us several "iteration methods" based on the same sort of callback pattern you've seen in the case of forEach() in the lesson on Callback Functions. These are essentially ready-made loops, with a little bit of extra behavior sprinkled in for common patterns and spice.

## Your Task, Should You Choose to Submit It

Your task will be to reproduce the behavior of these Array methods with your own callback functions - *without* using JavaScript's *built-in* versions:

1. [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
2. [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
4. [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
5. [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
6. [every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
7. [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Name each of your functions accordingly: newForEach, newMap, newSome, newFind, newFindIndex, newEvery, newFilter

IMPORTANT:  For testing/grading purposes, it's important that you name your functions according to the above standard.  In order to run tests on your solutions, include the following code snippet at the bottom of your file:

`module.exports = { newForEach, newMap, newSome, newFind, newFindIndex, newEvery, newFilter }`

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