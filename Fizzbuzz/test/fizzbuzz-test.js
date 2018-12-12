let fb = require("../fizzbuzz.js");
const chai = require("chai");
const expect = chai.expect;

const evenAnswer = "Fizz";
const multipleOf3Answer = "Buzz";
const evenAndMultipleOf3Answer = "FizzBuzz";
const value1 = 1;
const value10 = 10;
const value100 = 100;
const value1000 = 1000;
const value10000 = 10000;

describe("Fizzbuzz Test Suite", () => {
  describe("The string your function returns should follow this format: '1,Fizz,Buzz,Fizz,5,FizzBuzz...'", () => {
    it("should be a string", () => {
      expect(typeof fb.fizzbuzz(value1000)).to.equal("string");
    });
    it("should contain no spaces", () => {
      expect(fb.fizzbuzz(value1000).includes(" ")).to.equal(false);
    });
    it("should contain commas", () => {
      expect(fb.fizzbuzz(value1000).includes(",")).to.equal(true);
    });
  });
  describe("The function should iterate as many times as the parameter supplied.", () => {
    // solutionLength + 1 is due to trailing comma
    it("should iterate 1 time", () => {
      expect(fb.fizzbuzz(value1).split(",").length).to.equal(value1 + 1);
    });
    it("should iterate 10 times", () => {
      expect(fb.fizzbuzz(value10).split(",").length).to.equal(value10 + 1);
    });
    it("should iterate 1000 times", () => {
      expect(fb.fizzbuzz(value1000).split(",").length).to.equal(value1000 + 1);
    });
    it("should iterate 10000 times", () => {
      expect(fb.fizzbuzz(value10000).split(",").length).to.equal(
        value10000 + 1
      );
    });
  });
  describe("The string your function returns should contain the correct values", () => {
    it("numbers that are not even or divisble by 3 should be added to the string", () => {
      expect(fb.fizzbuzz(value10).split(",")[0]).to.equal("1");
      expect(fb.fizzbuzz(value10).split(",")[4]).to.equal("5");
      expect(fb.fizzbuzz(value100).split(",")[16]).to.equal("17");
      expect(fb.fizzbuzz(value1000).split(",")[330]).to.equal("331");
      expect(fb.fizzbuzz(value10000).split(",")[6000]).to.equal("6001");
    });
    it("even numbers that are not divisible by 3 should be replaced with 'Fizz'", () => {
      expect(fb.fizzbuzz(value10).split(",")[1]).to.equal(evenAnswer);
      expect(fb.fizzbuzz(value100).split(",")[51]).to.equal(evenAnswer);
      expect(fb.fizzbuzz(value1000).split(",")[751]).to.equal(evenAnswer);
      expect(fb.fizzbuzz(value10000).split(",")[4501]).to.equal(evenAnswer);
    });
    it("numbers that are divisible by 3 but not even should be replaced with 'Buzz'", () => {
      expect(fb.fizzbuzz(value10).split(",")[2]).to.equal(multipleOf3Answer);
      expect(fb.fizzbuzz(value100).split(",")[32]).to.equal(multipleOf3Answer);
      expect(fb.fizzbuzz(value1000).split(",")[326]).to.equal(
        multipleOf3Answer
      );
      expect(fb.fizzbuzz(value10000).split(",")[9998]).to.equal(
        multipleOf3Answer
      );
    });
    it("even numbers that are divisible by 3 should be replaced with 'FizzBuzz'", () => {
      expect(fb.fizzbuzz(value10).split(",")[5]).to.equal(
        evenAndMultipleOf3Answer
      );
      expect(fb.fizzbuzz(value100).split(",")[29]).to.equal(
        evenAndMultipleOf3Answer
      );
      expect(fb.fizzbuzz(value1000).split(",")[905]).to.equal(
        evenAndMultipleOf3Answer
      );
      expect(fb.fizzbuzz(value10000).split(",")[6665]).to.equal(
        evenAndMultipleOf3Answer
      );
    });
  });
});

describe("FizzbuzzPrime Test Suite", () => {
  describe("The string your function returns should follow this format: '1,Fizz,Buzz,Fizz,Prime,FizzBuzz...'", () => {
    it("should be a string", () => {
      expect(typeof fb.fizzbuzzPrime(value1000)).to.equal("string");
    });
    it("should contain no spaces", () => {
      expect(fb.fizzbuzzPrime(value1000).includes(" ")).to.equal(false);
    });
    it("should contain commas", () => {
      expect(fb.fizzbuzzPrime(value1000).includes(",")).to.equal(true);
    });
  });
  describe("The function should iterate as many times as the parameter supplied.", () => {
    // solutionLength + 1 is due to trailing comma
    it("should iterate 1 time", () => {
      expect(fb.fizzbuzzPrime(value1).split(",").length).to.equal(value1 + 1);
    });
    it("should iterate 10 times", () => {
      expect(fb.fizzbuzzPrime(value10).split(",").length).to.equal(value10 + 1);
    });
    it("should iterate 1000 times", () => {
      expect(fb.fizzbuzzPrime(value1000).split(",").length).to.equal(
        value1000 + 1
      );
    });
    it("should iterate 10000 times", () => {
      expect(fb.fizzbuzzPrime(value10000).split(",").length).to.equal(
        value10000 + 1
      );
    });
  });
  describe("The string your function returns should contain the correct values", () => {
    it("numbers that are not even, not divisble by 3, or not prime should be added to the string", () => {
      expect(fb.fizzbuzzPrime(value10).split(",")[0]).to.equal("1");
      expect(fb.fizzbuzzPrime(value100).split(",")[24]).to.equal("25");
      expect(fb.fizzbuzzPrime(value1000).split(",")[334]).to.equal("335");
      expect(fb.fizzbuzzPrime(value10000).split(",")[6000]).to.equal("6001");
    });
    it("numbers that are prime should be replace with 'Prime,'", () => {
      expect(fb.fizzbuzzPrime(value10).split(",")[4]).to.equal("Prime");
      expect(fb.fizzbuzzPrime(value100).split(",")[16]).to.equal("Prime");
      expect(fb.fizzbuzzPrime(value1000).split(",")[330]).to.equal("Prime");
      expect(fb.fizzbuzzPrime(value10000).split(",")[2548]).to.equal("Prime");
    });
    it("even numbers that are not divisible by 3 should be replaced with 'Fizz'", () => {
      expect(fb.fizzbuzzPrime(value10).split(",")[1]).to.equal(evenAnswer);
      expect(fb.fizzbuzzPrime(value100).split(",")[51]).to.equal(evenAnswer);
      expect(fb.fizzbuzzPrime(value1000).split(",")[751]).to.equal(evenAnswer);
      expect(fb.fizzbuzzPrime(value10000).split(",")[4501]).to.equal(
        evenAnswer
      );
    });
    it("numbers that are divisible by 3 but not even should be replaced with 'Buzz'", () => {
      expect(fb.fizzbuzzPrime(value10).split(",")[2]).to.equal(
        multipleOf3Answer
      );
      expect(fb.fizzbuzzPrime(value100).split(",")[32]).to.equal(
        multipleOf3Answer
      );
      expect(fb.fizzbuzzPrime(value1000).split(",")[326]).to.equal(
        multipleOf3Answer
      );
      expect(fb.fizzbuzzPrime(value10000).split(",")[9998]).to.equal(
        multipleOf3Answer
      );
    });
    it("even numbers that are divisible by 3 should be replaced with 'FizzBuzz'", () => {
      expect(fb.fizzbuzzPrime(value10).split(",")[5]).to.equal(
        evenAndMultipleOf3Answer
      );
      expect(fb.fizzbuzzPrime(value100).split(",")[29]).to.equal(
        evenAndMultipleOf3Answer
      );
      expect(fb.fizzbuzzPrime(value1000).split(",")[905]).to.equal(
        evenAndMultipleOf3Answer
      );
      expect(fb.fizzbuzzPrime(value10000).split(",")[6665]).to.equal(
        evenAndMultipleOf3Answer
      );
    });
  });
});
