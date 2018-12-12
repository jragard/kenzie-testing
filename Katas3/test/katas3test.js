const katas3 = require("../katas3.js");
const chai = require("chai");
const colors = require("mocha/lib/reporters/base").colors;
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
colors["pending"] = "93";
colors["green"] = "92";

const isFunctionDefined = "Define a function";
const returnValueIsArray = "Function should return an array";
const returnValueIsNumber = "Function should return a number";
const arrayLengthMatches = "Length of Array is correct";
const arrayValuesAreCorrect = "Array values are correct";
const returnValueIsCorrect = "Return Value is Correct";
const TODO_WAITINGFORDOMRESEARCH = "DOM Question, look at the screen!";

describe("Display numbers on to page as html elements with for loops", function() {
  describe("Kata 11", function() {
    const studentFunction = katas3.kata11;
    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(katas3.kata11);
    });

    if (typeof studentFunction === "function") {
      const studentAnswer = studentFunction();

      it(returnValueIsArray, () => {
        assert.isArray(studentAnswer);
      });

      it(arrayLengthMatches, () => {
        assert.equal(studentAnswer.length, sampleArray.length);
      });

      it(arrayValuesAreCorrect, () => {
        studentAnswer.map(item => {
          assert.isTrue(sampleArray.includes(item));
        });
      });
    }
  });

  describe("Kata 12", function() {
    const studentFunction = katas3.kata12;

    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });

    if (typeof studentFunction === "function") {
      studentAnswer = studentFunction();
      let answer = [];
      for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
          answer.push(sampleArray[i]);
        }
      }

      it(returnValueIsArray, () => {
        assert.isArray(studentAnswer);
      });

      it(arrayLengthMatches, function() {
        assert.equal(studentAnswer.length, answer.length);
      });

      it(arrayValuesAreCorrect, function() {
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe("Kata 13", function() {
    const studentFunction = katas3.kata13;

    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });

    if (typeof studentFunction === "function") {
      const studentAnswer = studentFunction();
      let answer = sampleArray.filter(item => item % 2 !== 0);

      it(returnValueIsArray, () => {
        assert.isArray(studentAnswer);
      });

      it(arrayLengthMatches, () => {
        assert.equal(studentAnswer.length, answer.length);
      });

      it(arrayValuesAreCorrect, () => {
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe("Kata 14", function() {
    const studentFunction = katas3.kata14;

    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });

    if (typeof studentFunction === "function") {
      const studentAnswer = studentFunction();
      const answer = sampleArray.map(number => number * number);

      it(returnValueIsArray, () => {
        assert.isArray(studentAnswer);
      });
      it(arrayLengthMatches, () => {
        assert.equal(studentAnswer.length, answer.length);
      });
      it(arrayValuesAreCorrect, () => {
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe("Kata15", function() {
    const studentFunction = katas3.kata15;

    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
      assert.isFunction(katas3.kata15);
    });

    if (typeof studentFunction === "function") {
      let studentAnswer = studentFunction();
      const sum = (total, num) => total + num;
      let N = 21;
      let a = Array.apply(null, { length: N }).map(Number.call, Number);
      let answer = a.reduce(sum);
      it(returnValueIsNumber, () => {
        assert.isNumber(studentAnswer);
      });
      it(returnValueIsCorrect + "(Sum of 1-20)", () => {
        assert.equal(studentAnswer, answer);
      });
    }
  });

  describe("Kata 16", function() {
    const studentFunction = katas3.kata16;

    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });

    if (typeof studentFunction === "function") {
      const studentAnswer = studentFunction();
      const sum = (total, num) => total + num;
      const answer = sampleArray.reduce(sum);

      it(returnValueIsNumber, () => {
        assert.isNumber(studentAnswer);
      });
      it(returnValueIsCorrect + "(Sum Of Sample Array)", function() {
        assert.equal(studentAnswer, answer);
      });
    }
  });

  describe("Kata 17", function() {
    const studentFunction = katas3.kata17;
    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });

    if (typeof studentFunction === "function") {
      const studentAnswer = studentFunction();
      const answer = 20;

      it(returnValueIsNumber, () => {
        assert.isNumber(studentAnswer);
      });
      it(returnValueIsCorrect, () => {
        assert.equal(studentAnswer, answer);
      });
    }
  });

  describe("Kata 18", function() {
    const studentFunction = katas3.kata18;
    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });
    if (typeof studentFunction === "function") {
      const studentAnswer = studentFunction();
      const answer = 940;
      it(returnValueIsNumber, () => {
        assert.isNumber(studentAnswer);
      });
      it(returnValueIsCorrect + "Largest number in Sample Array", () => {
        assert.equal(studentAnswer, answer);
      });
    }
  });

  describe("Kata 19", function() {
    const studentFunction = katas3.kata19;
    it(isFunctionDefined + " " + TODO_WAITINGFORDOMRESEARCH, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });
  });

  describe("Kata 20", function() {
    const studentFunction = katas3.kata20;
    it(isFunctionDefined + " " + TODO_WAITINGFORDOMRESEARCH, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });
  });

  describe("Kata 21", function() {
    const studentFunction = katas3.kata21;
    it(isFunctionDefined + " " + TODO_WAITINGFORDOMRESEARCH, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });
  });

  describe("Kata 22", function() {
    const studentFunction = katas3.kata22;
    it(isFunctionDefined + " " + TODO_WAITINGFORDOMRESEARCH, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });
  });

  describe("Kata 23", function() {
    const studentFunction = katas3.kata23;
    it(isFunctionDefined + " " + TODO_WAITINGFORDOMRESEARCH, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(studentFunction);
    });
  });
});
