const { TestBase } = require("../../testBase");
const { exec, spawn } = require("child_process");
const tempFileToTest = "./test/tempFileToTest.js";
const fs = require("fs");

let test = new TestBase(
    __dirname,
    "kata1, kata2, kata3,kata4, kata5, kata6, kata7, kata8, kata9, kata10, kata11, kata12, kata13, kata14, kata15, kata16, kata17, kata18, kata19, kata20, kata21, kata22, kata23, kata24, kata25, kata26, kata27, kata28, kata29, kata30, kata31, kata32");

function runTests(testBase) {
  let js =
      testBase.getStudentFile.replace(/['"]?use strict['"]?/, "") +
      testBase.getFunctions;
  fs.writeFileSync(tempFileToTest, js, function(err) {
    console.log(err);
  });
  spawn("../../node_modules/.bin/mocha", ["--colors"], {
    stdio: "inherit"
  }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFileToTest}`);
  });
}

runTests(test);
