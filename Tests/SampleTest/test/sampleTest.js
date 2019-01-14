// this is a sample test file

const chai = require("chai");
const expect = chai.expect;
const { namesOfFunctionToTest, ... } = require("./s.js"); // import functions from tempFile
const colors = require("mocha/lib/reporters/base").colors;
colors["pending"] = "93";
colors["green"] = "92";

describe("Name of Assignment", function() {
  (nameOfFunctionToTest ? describe : describe.skip)( // only test if the function is implemented
    "nameOfFunctionToTest()",
    function() {
      it("should pass this test", function() {
          expect something
      });
    }
)});