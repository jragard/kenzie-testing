const { TestBase } = require("../../TestBase");
const { spawn } = require("child_process");

let test = new TestBase(
  __dirname,{
    testCafeFixture: "Testing Anagrams 1"}
);

async function runTests() {
  await test.runTestCafeTest();
}

runTests();


