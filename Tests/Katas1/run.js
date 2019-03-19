const { TestBase } = require("../../testBase");

let test = new TestBase(__dirname, {
  mochaTest: ["test.js"],
  mochaFunctions:
    "oneThroughTwenty, evensToTwenty, oddsToTwenty, multiplesOfFive, squareNumbers, countingBackwards, evenNumbersBackwards, oddNumbersBackwards, multiplesOfFiveBackwards, squareNumbersBackwards"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
