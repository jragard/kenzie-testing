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
    it("Is function: kata11", () => {
      //   assert.isFunction(katas3.kata11);
      assert.isFunction(katas3.kata11);
    });

    if (typeof katas3.kata11 === "function") {
      studentAnswer = katas3.kata11();
      it("Length of array", () => {
        assert.equal(studentAnswer.length, sampleArray.length);
      });

      it("Values are the correct array", () => {
        studentAnswer.map(item => {
          assert.isTrue(sampleArray.includes(item));
        });
      });
    }
  });

  describe("Kata 12", function() {
    let answer = [];
    for (let i = 0; i < sampleArray.length; i++) {
      if (sampleArray[i] % 2 == 0) {
        answer.push(sampleArray[i]);
      }
    }
    it("Is function: kata12", function() {
      assert.isFunction(katas3.kata12);
    });
    if (typeof katas3.kata12 === "function") {
      const studentAnswer = katas3.kata12();
      it("Length of array", function() {
        assert.equal(studentAnswer.length, answer.length);
      });

      it("Values of Arrays are correct", function() {
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe("Kata 13", () => {
    let answer = sampleArray.filter(item => item % 2 !== 0);

    it("Is function: kata13", () => {
      assert.isFunction(katas3.kata13);
    });

    if (typeof katas3.kata13 == "function") {
      it("Length of array", () => {
        let studentAnswer = katas3.kata13();
        assert.equal(studentAnswer.length, answer.length);
      });
      it("Values are correct", () => {
        const studentAnswer = katas3.kata13();
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe("Kata 14", function() {
    it("Is function: kata14", function() {
      assert.isFunction(katas3.kata14);
    });
    if (typeof katas3.kata14 === "function") {
      const studentAnswer = katas3.kata14();
      const answer = sampleArray.map(number => number * number);

      it("Length of Array", () => {
        assert.equal(studentAnswer.length, answer.length);
      });
      it("Values are Correct", () => {
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe("Kata15", () => {
    it("is function: kata15", () => {
      assert.isFunction(katas3.kata15);
    });
    if (typeof katas3.kata15 === "function") {
      const sum = (total, num) => total + num;
      let N = 21;
      let a = Array.apply(null, { length: N }).map(Number.call, Number);
      let answer = a.reduce(sum);
      let studentAnswer = katas3.kata15();
      it("Sum of 1-20", () => {
        assert.equal(studentAnswer, answer);
      });
    }
  });

  describe("Kata 16", function() {
    it("Is function: kata16", () => {
      assert.isFunction(katas3.kata16);
    });
    if (typeof katas3.kata16 === "function") {
      const sum = (total, num) => total + num;
      const studentAnswer = katas3.kata16();
      const answer = sampleArray.reduce(sum);
      it("Sum of sample Array", function() {
        assert.equal(studentAnswer, answer);
      });
    }
  });
});
