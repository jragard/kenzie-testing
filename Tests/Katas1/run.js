const Test = require('../../testBase');
const {exec, spawn} = require('child_process');
const tempFileToTest = "./test/tempFileToTest.js";
const fs = require('fs');


let test = new Test.TestBase(__dirname,
    'oneThroughTwenty, evensToTwenty, oddsToTwenty, multiplesOfFive, squareNumbers, countingBackwards, evenNumbersBackwards, oddNumbersBackwards, multiplesOfFiveBackwards, squareNumbersBackwards'
);

function runTests(testBase) {
  let js = testBase.getStudentFile.replace(/['"]?use strict['"]?/, "") + testBase.getFunctions;
  fs.writeFileSync(tempFileToTest, js, function (err) {
    console.log(err);
  });
  spawn("../../node_modules/.bin/mocha", ['--colors'], {
    stdio: "inherit"
  }).on("exit", function (error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFileToTest}`);
  });
}

runTests(test);
