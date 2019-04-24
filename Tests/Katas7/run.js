const { TestBase } = require("../../TestBase");

let test = new TestBase(__dirname, {
  mochaFunctions:
    "newForEach, newMap, newSome, newFind, newFindIndex, newEvery, newFilter"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
