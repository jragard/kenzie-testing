const { TestBase } = require("../../testBase");

let test = new TestBase(__dirname, {
  mochaFunctions:
    "randomInteger, times, createKeyCount, createBarGraph, execute",
  mochaDom: "<!DOCTYPE html><html lang='en'><body></body></html>"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
