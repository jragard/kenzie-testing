const { TestBase } = require("../../testBase");

let test = new TestBase(__dirname, { mochaFunctions: "numbersToWords" });

async function runTests() {
  await test.runMochaTest();
}

runTests();
