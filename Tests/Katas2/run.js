const { TestBase } = require("../../testBase");
const { spawn } = require("child_process");

let test = new TestBase(
  __dirname,
  "add, multiply, power, factorial, fibonacci"
);

function runTests() {
  test.writeTestFile();
  spawn("../../node_modules/.bin/mocha", ["--colors"], {
    stdio: "inherit"
  }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    test.deleteTestFile();
  });
}

runTests(test);
