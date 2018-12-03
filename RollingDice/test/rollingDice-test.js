const rollingDice = require("../rollingDice");
const chai = require("chai");
const assert = chai.assert;
const FunctionAnalyzer = require("function-analyzer");

describe("rollDie", () => {
  it("should use Math.floor(Math.random() * 6) + 1", () => {
    assert(
      new FunctionAnalyzer(rollingDice.rollDie).includes(
        "Math.floor(Math.random() * 6) + 1"
      )
    );
  });
});

describe("times", () => {
  it("should return an array with length equal to numOfTimes", () => {
    // create a random number between 1 and 100
    const numOfTimes = Math.floor(Math.random() * 100) + 1;
    const result = rollingDice.times(rollingDice.rollDie, numOfTimes);
    assert(result && result.length === numOfTimes);
  });
});
describe("createKeyCount", () => {});
describe("documentWriteObject", () => {});
describe("createBarGraph", () => {});
