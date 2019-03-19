const { TestBase } = require("../../testBase");

let test = new TestBase(__dirname, {
  mochaFunctions: "add, multiply, power, factorial, fibonacci"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
