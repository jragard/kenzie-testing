const { TestBase } = require("../../TestBase");

let test = new TestBase(__dirname, {
  mochaFunctions: "fizzbuzz, fizzbuzzPrime"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
