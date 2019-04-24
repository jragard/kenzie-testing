const { TestBase } = require("../../TestBase");

let test = new TestBase(__dirname, {
  mochaFunctions: "coin, display20Images",
  mochaDom: "<!DOCTYPE html><html lang='en'><body></body></html>"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
