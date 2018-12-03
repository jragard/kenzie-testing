const rollingDice = require("../rollingDice");
const chai = require("chai");
const assert = chai.assert;
const FunctionAnalyzer = require("function-analyzer");
const spies = require("chai-spies");
const should = chai.should();

chai.use(spies);

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
  it("should call the fn numOfTimes", () => {
    const fnSpy = chai.spy();
    const numOfTimes = Math.floor(Math.random() * 100) + 1;
    const _ = rollingDice.times(fnSpy, numOfTimes);
    fnSpy.should.have.been.called.exactly(numOfTimes);
  });
});
describe("createKeyCount", () => {});
describe("documentWriteObject", () => {});
describe("createBarGraph", () => {});
