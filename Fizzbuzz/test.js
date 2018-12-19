// Used to test against function in local solution file
// const { fizzbuzz, fizzbuzzPrime } = require("./fizzbuzz.js");

// Used to test against function provided from run script
const { fizzbuzz, fizzbuzzPrime } = require("./s.js");

const chai = require("chai");
const colors = require("mocha/lib/reporters/base").colors;

const assert = chai.assert;
const expect = chai.expect;

colors["pending"] = "93";
colors["green"] = "92";

const defineAFunction = "should be defined, named, and exported correctly";
const evenAnswer = "Fizz";
const multipleOf3Answer = "Buzz";
const evenAndMultipleOf3Answer = "FizzBuzz";
const value1 = 1;
const value10 = 10;
const value100 = 100;
const value1000 = 1000;
const value10000 = 10000;

describe("Fizzbuzz Test Suite", () => {
  const studentFunction = fizzbuzz;

  it(defineAFunction, function() {
    typeof studentFunction !== "function"
      ? this.skip()
      : assert.isFunction(studentFunction);
  });

  if (typeof studentFunction === "function") {
    describe("The string your function returns should follow this format: '1,Fizz,Buzz,Fizz,5,FizzBuzz...'", () => {
      it("should be a string", () => {
        expect(typeof studentFunction(value1000)).to.equal("string");
      });
      it("should contain no spaces", () => {
        expect(studentFunction(value1000).includes(" ")).to.equal(false);
      });
      it("should contain commas", () => {
        expect(studentFunction(value1000).includes(",")).to.equal(true);
      });
    });
    describe("The function should iterate as many times as the parameter supplied.", () => {
      // solutionLength + 1 is due to trailing comma
      it("should iterate 1 time", () => {
        expect(studentFunction(value1).split(",").length).to.equal(value1 + 1);
      });
      it("should iterate 10 times", () => {
        expect(studentFunction(value10).split(",").length).to.equal(
          value10 + 1
        );
      });
      it("should iterate 1000 times", () => {
        expect(studentFunction(value1000).split(",").length).to.equal(
          value1000 + 1
        );
      });
      it("should iterate 10000 times", () => {
        expect(studentFunction(value10000).split(",").length).to.equal(
          value10000 + 1
        );
      });
    });
    describe("The string your function returns should contain the correct values", () => {
      it("numbers that are not even or divisble by 3 should be added to the string", () => {
        expect(studentFunction(value10).split(",")[0]).to.equal("1");
        expect(studentFunction(value10).split(",")[4]).to.equal("5");
        expect(studentFunction(value100).split(",")[16]).to.equal("17");
        expect(studentFunction(value1000).split(",")[330]).to.equal("331");
        expect(studentFunction(value10000).split(",")[6000]).to.equal("6001");
      });
      it("even numbers that are not divisible by 3 should be replaced with 'Fizz'", () => {
        expect(studentFunction(value10).split(",")[1]).to.equal(evenAnswer);
        expect(studentFunction(value100).split(",")[51]).to.equal(evenAnswer);
        expect(studentFunction(value1000).split(",")[751]).to.equal(evenAnswer);
        expect(studentFunction(value10000).split(",")[4501]).to.equal(
          evenAnswer
        );
      });
      it("numbers that are divisible by 3 but not even should be replaced with 'Buzz'", () => {
        expect(studentFunction(value10).split(",")[2]).to.equal(
          multipleOf3Answer
        );
        expect(studentFunction(value100).split(",")[32]).to.equal(
          multipleOf3Answer
        );
        expect(studentFunction(value1000).split(",")[326]).to.equal(
          multipleOf3Answer
        );
        expect(studentFunction(value10000).split(",")[9998]).to.equal(
          multipleOf3Answer
        );
      });
      it("even numbers that are divisible by 3 should be replaced with 'FizzBuzz'", () => {
        expect(studentFunction(value10).split(",")[5]).to.equal(
          evenAndMultipleOf3Answer
        );
        expect(studentFunction(value100).split(",")[29]).to.equal(
          evenAndMultipleOf3Answer
        );
        expect(studentFunction(value1000).split(",")[905]).to.equal(
          evenAndMultipleOf3Answer
        );
        expect(studentFunction(value10000).split(",")[6665]).to.equal(
          evenAndMultipleOf3Answer
        );
      });
    });
  }
});

describe("Bonus: FizzbuzzPrime Test Suite", () => {
  const studentFunction = fizzbuzzPrime;
  it(defineAFunction, function() {
    typeof studentFunction !== "function"
      ? this.skip()
      : assert.isFunction(studentFunction);
  });

  if (typeof studentFunction === "function") {
    describe("The string your function returns should follow this format: '1,Fizz,Buzz,Fizz,Prime,FizzBuzz...'", () => {
      it("should be a string", () => {
        expect(typeof studentFunction(value1000)).to.equal("string");
      });
      it("should contain no spaces", () => {
        expect(studentFunction(value1000).includes(" ")).to.equal(false);
      });
      it("should contain commas", () => {
        expect(studentFunction(value1000).includes(",")).to.equal(true);
      });
    });
    describe("The function should iterate as many times as the parameter supplied.", () => {
      // solutionLength + 1 is due to trailing comma
      it("should iterate 1 time", () => {
        expect(studentFunction(value1).split(",").length).to.equal(value1 + 1);
      });
      it("should iterate 10 times", () => {
        expect(studentFunction(value10).split(",").length).to.equal(
          value10 + 1
        );
      });
      it("should iterate 1000 times", () => {
        expect(studentFunction(value1000).split(",").length).to.equal(
          value1000 + 1
        );
      });
      it("should iterate 10000 times", () => {
        expect(studentFunction(value10000).split(",").length).to.equal(
          value10000 + 1
        );
      });
    });
    describe("The string your function returns should contain the correct values", () => {
      it("numbers that are not even, not divisble by 3, or not prime should be added to the string", () => {
        expect(studentFunction(value10).split(",")[0]).to.equal("1");
        expect(studentFunction(value100).split(",")[24]).to.equal("25");
        expect(studentFunction(value1000).split(",")[334]).to.equal("335");
        expect(studentFunction(value10000).split(",")[6000]).to.equal("6001");
      });
      it("numbers that are prime should be replace with 'Prime,'", () => {
        expect(studentFunction(value10).split(",")[4]).to.equal("Prime");
        expect(studentFunction(value100).split(",")[16]).to.equal("Prime");
        expect(studentFunction(value1000).split(",")[330]).to.equal("Prime");
        expect(studentFunction(value10000).split(",")[2548]).to.equal("Prime");
      });
      it("even numbers that are not divisible by 3 should be replaced with 'Fizz'", () => {
        expect(studentFunction(value10).split(",")[1]).to.equal(evenAnswer);
        expect(studentFunction(value100).split(",")[51]).to.equal(evenAnswer);
        expect(studentFunction(value1000).split(",")[751]).to.equal(evenAnswer);
        expect(studentFunction(value10000).split(",")[4501]).to.equal(
          evenAnswer
        );
      });
      it("numbers that are divisible by 3 but not even should be replaced with 'Buzz'", () => {
        expect(studentFunction(value10).split(",")[2]).to.equal(
          multipleOf3Answer
        );
        expect(studentFunction(value100).split(",")[32]).to.equal(
          multipleOf3Answer
        );
        expect(studentFunction(value1000).split(",")[326]).to.equal(
          multipleOf3Answer
        );
        expect(studentFunction(value10000).split(",")[9998]).to.equal(
          multipleOf3Answer
        );
      });
      it("even numbers that are divisible by 3 should be replaced with 'FizzBuzz'", () => {
        expect(studentFunction(value10).split(",")[5]).to.equal(
          evenAndMultipleOf3Answer
        );
        expect(studentFunction(value100).split(",")[29]).to.equal(
          evenAndMultipleOf3Answer
        );
        expect(studentFunction(value1000).split(",")[905]).to.equal(
          evenAndMultipleOf3Answer
        );
        expect(studentFunction(value10000).split(",")[6665]).to.equal(
          evenAndMultipleOf3Answer
        );
      });
    });
  }
});
