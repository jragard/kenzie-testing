// const katas3 = require("../katas3.js");
const fs = require("fs");
let path;
if (fs.existsSync("./test/s.js")) {
  path = "./s.js";
} else {
  path = "../katas3.js";
}
katas3 = require(path);

const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const colors = require("mocha/lib/reporters/base").colors;
// colors["pending"] = "93";

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

const isFunctionDefined = "Kata should define a function";
const returnValueIsArray = "Function should return an array";
const returnValueIsNumber = "Function should return a number";
const arrayLengthMatches = "Array should contain the correct amount of numbers";
const arrayValuesAreCorrect = "Array values are correct";
const returnValueIsCorrect = "Return Value is Correct";
const TODO_WAITINGFORDOMRESEARCH = "DOM Question, look at the screen!";
const notHardCodedAnswer =
  "Answer should be generated dynamically and should NOT be hardcoded";
// change this

const twenty = Array.from(Array(20), (e, i) => i + 1);
const hundred = Array.from(Array(100), (e, i) => i + 1);
// create new reverse arrays so we do not mutate original by calling .reverse()
const twentyReversed = Array.from(Array(20), (e, i) => i + 1).reverse();
const hundredReversed = Array.from(Array(100), (e, i) => i + 1).reverse();

describe("Display numbers on to page as html elements with for loops", function() {
  // kata 1
  describe("Kata 1", function() {
    const studentAnswer = katas3.kata1;
    const referenceAnswer = twenty;

    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only values 1-20", () => {
        studentAnswer().map(item => {
          assert.isTrue(referenceAnswer.includes(item));
        });
      });
      it("Array items should be in the Correct Order", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 2
  describe("Kata 2", function() {
    const studentAnswer = katas3.kata2;
    const referenceAnswer = twenty.filter(x => x % 2 === 0);
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only even values 1-20", () => {
        studentAnswer().map(item => {
          assert.isTrue(referenceAnswer.includes(item));
        });
      });
      it("Array items should be in the Correct Order", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });

  // kata 3
  describe("Kata 3", function() {
    const studentAnswer = katas3.kata3;
    const referenceAnswer = twenty.filter(x => x % 2 !== 0);
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only Odd values 1-20", () => {
        studentAnswer().map(item => {
          assert.isTrue(referenceAnswer.includes(item));
        });
      });
      it("Array items should be in the Correct Order", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 4
  describe("Kata 4", function() {
    const studentAnswer = katas3.kata4;
    const referenceAnswer = hundred.filter(x => x % 5 === 0);

    it("Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only multiples of 5 from 1-100", () => {
        studentAnswer().map(item => {
          assert.isTrue(referenceAnswer.includes(item));
        });
      });
      it("Array items should be in the Correct Order", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 5
  describe("Kata 5", function() {
    const studentAnswer = katas3.kata5;
    const referenceAnswer = hundred.filter(x => Number.isInteger(Math.sqrt(x)));
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only the square numbers from 1-100", () => {
        expect(studentAnswer()).to.have.all.members(referenceAnswer);
      });
      it("Array items should be in the Correct Order", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 6
  describe("Kata 6", function() {
    const studentAnswer = katas3.kata6;
    const referenceAnswer = twentyReversed;
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only numbers 1-20", () => {
        expect(studentAnswer()).to.have.all.members(referenceAnswer);
      });
      it("Array items should be in the Correct Order (Descending)", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 7
  describe("Kata 7", function() {
    const studentAnswer = katas3.kata7;
    const referenceAnswer = twentyReversed.filter(x => x % 2 === 0);
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });
      it("Array should contain only even numbers 1-20", () => {
        expect(studentAnswer()).to.have.all.members(referenceAnswer);
      });
      it("Array items should be in the Correct Order (Descending)", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 8
  describe("Kata 8", function() {
    const studentAnswer = katas3.kata8;
    const referenceAnswer = twentyReversed.filter(x => x % 2 !== 0);
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only odd numbers 1-20", () => {
        expect(studentAnswer()).to.have.all.members(referenceAnswer);
      });
      it("Array items should be in the Correct Order (Descending)", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 9
  describe("Kata 9", function() {
    const studentAnswer = katas3.kata9;
    const referenceAnswer = hundredReversed.filter(x => x % 5 === 0);
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only multiples of 5 from 1-100", () => {
        expect(studentAnswer()).to.have.all.members(referenceAnswer);
      });
      it("Array items should be in the Correct Order (Descending)", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 10
  describe("Kata 10", function() {
    const studentAnswer = katas3.kata10;
    const referenceAnswer = hundredReversed.filter(x =>
      Number.isInteger(Math.sqrt(x))
    );
    it("Kata Should be a function", function() {
      typeof studentAnswer === "function"
        ? assert.isFunction(studentAnswer)
        : this.skip();
    });
    if (typeof studentAnswer === "function") {
      const stringFunction = studentAnswer.toString();
      const restricted = /\[.*\d+,*.*\]/;
      const test = restricted.test(stringFunction);
      it("Function should return an Array", () => {
        assert.isArray(studentAnswer());
      });
      it("Array should be generated dynamically and should NOT be hardcoded", () => {
        expect(test).to.equal(false);
      });
      it("Array Should contain the correct amount of numbers", () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it("Array should contain only square numbers from 1-100", () => {
        expect(studentAnswer()).to.have.all.members(referenceAnswer);
      });
      it("Array items should be in the Correct Order (Descending)", () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  describe("Kata 11", function() {
    const studentFunction = katas3.kata11;
    it(isFunctionDefined, function() {
      typeof studentFunction !== "function"
        ? this.skip()
        : assert.isFunction(katas3.kata11);
    });

    if (typeof studentFunction === "function") {
      const studentAnswer = studentFunction();

      const stringFunction = studentFunction.toString();
      const restrictedOperator = /\[.*\d+,*.*\]/;
      const test = restrictedOperator.test(stringFunction);
      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });

      it(returnValueIsArray, () => {
        assert.isArray(studentAnswer);
      });

      it(arrayLengthMatches, () => {
        assert.equal(studentAnswer.length, sampleArray.length);
      });
      it(arrayValuesAreCorrect, function() {
        expect(studentAnswer).to.have.all.members(sampleArray);
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
      const stringFunction = studentFunction.toString();
      const restrictedOperator = /\[.*\d+,*.*\]/;
      const test = restrictedOperator.test(stringFunction);
      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });

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

      const stringFunction = studentFunction.toString();
      const restrictedOperator = /\[.*\d+,*.*\]/;
      const test = restrictedOperator.test(stringFunction);
      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });

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

      const stringFunction = studentFunction.toString();
      const restrictedOperator = /\[.*\d+,*.*\]/;
      const test = restrictedOperator.test(stringFunction);
      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });
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
      const stringFunction = studentFunction.toString();
      const restrictedOperator = /\[.*\d+,*.*\]/;
      const test = restrictedOperator.test(stringFunction);

      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });
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
      const stringFunction = studentFunction.toString();
      const restrictedOperator = /9096/;
      const test = restrictedOperator.test(stringFunction);

      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });
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
      const stringFunction = studentFunction.toString();
      const restrictedOperator = /20/;
      const test = restrictedOperator.test(stringFunction);

      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });

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
      const stringFunction = studentFunction.toString();
      const restrictedOperator = /940/;
      const test = restrictedOperator.test(stringFunction);

      it(notHardCodedAnswer, function() {
        expect(test).to.equal(false);
      });
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
