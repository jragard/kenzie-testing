const { TestBase } = require("../../TestBase");

let test = new TestBase(__dirname, { mochaFunctions: "numbersToWords" });

async function runTests() {
  await test.runMochaTest();
}

runTests();
