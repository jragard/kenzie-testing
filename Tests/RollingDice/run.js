const { TestBase } = require("../../testBase");
const { spawn } = require("child_process");

let test = new TestBase(
  __dirname,
  "randomInteger, times, createKeyCount, createBarGraph, execute",
  "<!DOCTYPE html><html lang='en'><body></body></html>"
);

async function runTests() {
  await test.writeTestFile();
  spawn("../../node_modules/.bin/mocha", ["--colors"], {
    stdio: "inherit"
  }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    test.deleteTestFile();
  })
}

runTests();
