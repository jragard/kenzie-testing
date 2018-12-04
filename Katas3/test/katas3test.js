const katas3 = require("../katas3.js");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472
];

describe("Display numbers on to page as html elements with for loops", function() {
  describe("Kata 11", function() {
    it("Is function:", () => {
      assert.isFunction(katas3.kata11);
    });
    it("Length of array", () => {
      studentAnswer = katas3.kata11();
      assert.equal(studentAnswer.length, sampleArray.length);
    });

    it("Values are the correct array", () => {
      studentAnswer = katas3.kata11();
      studentAnswer.map(item => {
        assert.isTrue(sampleArray.includes(item));
      });
    });
  });

  describe("Kata 12", function() {
    let studentAnswer = katas3.kata12();
    let answer = [];
    for (let i = 0; i < sampleArray.length; i++) {
      if (sampleArray[i] % 2 == 0) {
        answer.push(sampleArray[i]);
      }
    }

    it("Length of array", function() {
      assert.equal(studentAnswer.length, answer.length);
    });

    it("Values of Arrays are correct", function() {
      expect(answer).to.have.all.members(studentAnswer);
    });
  });

  describe("Kata 13", () => {
    let answer = sampleArray.filter(item => item % 2 !== 0);
    it("Legnth of array", () => {
      studentAnswer = katas3.kata13();
      assert.equal(studentAnswer.length, answer.length);
    });
    it("Values are correct", () => {
      studentAnswer = katas3.kata13();
      expect(answer).to.have.all.members(studentAnswer);
    });
  });
});
