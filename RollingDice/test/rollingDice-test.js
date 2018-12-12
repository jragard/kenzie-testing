import { randomInteger, times, createKeyCount } from "../rollingDice";
import chai from "chai";
const assert = chai.assert;
import FunctionAnalyzer from "function-analyzer";
import spies from "chai-spies";

chai.should();
chai.use(spies);

describe("randomInteger", () => {
  it("should use Math.floor(Math.random() * max) + 1", () => {
    assert(
      new FunctionAnalyzer(randomInteger).includes(
        "Math.floor(Math.random() * max) + 1"
      )
    );
  });
});

describe("times", () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const fnSpy = chai.spy(() => randomNum);

  it("should return an array with length equal to numOfTimes", () => {
    const result = times(randomInteger, randomNum);
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
  const resultKeys = Object.keys(result);
  it("should create an object whose keys represent every unique value in the input array", () => {
    assert(
      testArr.every(num => resultKeys.includes(String(num))) &&
        resultKeys.every(key => testArr.includes(Number(key)))
    );
  });
  it("should create an object whose values represent the number of times that key was seen in the input array", () => {
    assert(
      resultKeys.every(
        key => result[key] === testArr.filter(num => num === Number(key)).length
      )
    );
  });
});
describe("createBarGraph", () => {});
