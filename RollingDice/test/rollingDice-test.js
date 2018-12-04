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
  const testArr = Array(Math.floor(Math.random() * 100) + 1)
    .fill()
    .map(_ => Math.floor(Math.random() * 100) + 1);
  const result = createKeyCount(testArr);
  console.log(testArr);
  it("should create an object whose keys represent every unique value in the input array", () => {
    assert(
      result &&
        testArr.every(num => Object.keys(result).includes(String(num))) &&
        Object.keys(result).every(key => testArr.includes(Number(key)))
    );
  });
});
describe("documentWriteObject", () => {});
describe("createBarGraph", () => {});
