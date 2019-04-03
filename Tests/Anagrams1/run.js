const { TestBase } = require("../../TestBase");
const { spawn } = require("child_process");

let test = new TestBase(
  __dirname,{
  mochaFunctions:"getAnagramsOf",
  mochaDom: "<!DOCTYPE html><html lang='en'><body><div><input type='text' id='input' size=40><button id='findButton'>Find Anagrams</button></div><script type='text/javascript' src='words.js'></script><script type='text/javascript' src='anagrams1.js'></script></body></html>",
  mochaExtra: ["const { words } = require('./words.js');"],
    testCafeFixture: "Anagrams 1 Tests"}
);

async function runTests() {
    await test.runMochaTest();
  await test.runTestCafeTest();
}

runTests();


