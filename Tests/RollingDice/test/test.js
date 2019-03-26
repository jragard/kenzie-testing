const { randomInteger, times, createKeyCount } = require('./tempFileToTest.js');
const jsdom = require("../../../node_modules/jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<!DOCTYPE html><html lang='en'><body></body></html>")
global.document = dom.window.document;
const chai = require('../../../node_modules/chai');
const assert = chai.assert;
const colors = require('../../../node_modules/mocha/lib/reporters/base').colors;
colors['pending'] = '93';
colors['green'] = '92';
const spies = require('../../../node_modules/chai-spies');

chai.should();
chai.use(spies);

describe("randomInteger", () => {

  it("should be a function", function() {
    if(typeof randomInteger != 'function') {
        this.skip();
    }
})

// if(typeof randomInteger === 'function') {

//   it("should use Math.floor(Math.random() * max) + 1", () => {
//     assert(
//       new FunctionAnalyzer(randomInteger).includes(
//         "Math.floor(Math.random() * max) + 1"
//       )
//     );
//   });
// }
});

describe("times", () => {

  it("should be a function", function() {
    if(typeof times != 'function') {
        this.skip();
    }
})

  if(typeof times === 'function') {

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
}
});

describe("createKeyCount", () => {

  it("should be a function", function() {
    if(typeof createKeyCount != 'function') {
        this.skip();
    }
})

if(typeof createKeyCount === 'function') {
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
}
});
// describe("createBarGraph", () => {});
