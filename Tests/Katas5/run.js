const { TestBase } = require("../../TestBase");

let test = new TestBase(__dirname, {
  mochaFunctions:
    "reverseString, testReverseString1, testReverseString2, reverseSentence, testReverseSentence1, testReverseSentence2, minimumValue,testMinimumValue1, testMinimumValue2, maximumValue, testMaximumValue1, testMaximumValue2, calculateRemainder, testCalculateRemainder1,testCalculateRemainder2, distinctValues, testDistinctValues1, testDistinctValues2, countValues, testCountValues1, testCountValues2, evaluateExpression,testEvaluateExpression1, testEvaluateExpression2"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
