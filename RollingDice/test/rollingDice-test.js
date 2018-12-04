const { rollDie, times, createKeyCount } = require("../rollingDice");
const chai = require("chai");
const assert = chai.assert;
const FunctionAnalyzer = require("function-analyzer");
const spies = require("chai-spies");

chai.should();
chai.use(spies);

describe("rollDie", () => {
  it("should use Math.floor(Math.random() * 6) + 1", () => {
    assert(
      new FunctionAnalyzer(rollDie).includes(
        "Math.floor(Math.random() * 6) + 1"
      )
    );
  });
});

describe("times", () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const fnSpy = chai.spy(() => randomNum);

  it("should return an array with length equal to numOfTimes", () => {
    const result = times(rollDie, randomNum);
    assert(result && result.length === randomNum);
  });
  it("should call the fn numOfTimes", () => {
    times(fnSpy, randomNum);
    fnSpy.should.have.been.called.exactly(randomNum);
  });
  it("should return an array whose values come the result of calling fn", () => {
    const result = times(fnSpy, randomNum);
    assert(result.every(val => val === randomNum));
  });
});
describe("createKeyCount", () => {
  it("should create an object whose keys represent every unique value in the input array", () => {
    const testArr = [1, 2, 3];
    const result = createKeyCount(testArr);
    assert(
      result && testArr.every(val => Object.keys(result).includes(String(val)))
    );
  });
});
describe("documentWriteObject", () => {});
describe("createBarGraph", () => {});
