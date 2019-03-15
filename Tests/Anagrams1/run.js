const { TestBase } = require("../../testBase");
const { spawn } = require("child_process");

let test = new TestBase(
  __dirname,
  "getAnagramsOf",
  "<!DOCTYPE html><html lang='en'><body><div><input type='text' id='input' size=40><button id='findButton'>Find Anagrams</button></div><script type='text/javascript' src='words.js'></script><script type='text/javascript' src='anagrams1.js'></script></body></html>",
  ["const { words } = require('./words.js');"]
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


