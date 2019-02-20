const { TestBase } = require("../../testBase");
const { spawn } = require("child_process");

let test = new TestBase(
  __dirname,
  "reverseString, testReverseString1, testReverseString2, reverseSentence, testReverseSentence1, testReverseSentence2, minimumValue,testMinimumValue1, testMinimumValue2, maximumValue, testMaximumValue1, testMaximumValue2, calculateRemainder, testCalculateRemainder1,testCalculateRemainder2, distinctValues, testDistinctValues1, testDistinctValues2, countValues, testCountValues1, testCountValues2, evaluateExpression,testEvaluateExpression1, testEvaluateExpression2"
);

function runTests() {
  test.writeTestFile();
  spawn("../../node_modules/.bin/mocha", ["--colors"], {
    stdio: "inherit"
  }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    test.deleteTestFile();
  });
}

runTests(test);
