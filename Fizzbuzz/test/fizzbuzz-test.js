const fb = require("../fizzbuzz.js");
const chai = require("chai");
const expect = chai.expect;

const evenAnswer = "Fizz";
const multipleOf3Answer = "Buzz";
const evenAndMultipleOf3Answer = "FizzBuzz";
const solutionLength = 1000;

describe("Fizzbuzz Test Suite", () => {
  describe("The string your function returns should follow this format: '1,Fizz,Buzz,Fizz,5,FizzBuzz...'", () => {
    it("should contain no spaces", () => {
      expect(fb.fizzbuzz().includes(" ")).to.equal(false);
    });
    it("should contain commas", () => {
      expect(fb.fizzbuzz().includes(",")).to.equal(true);
    });
    it("should iterate 1000 times", () => {
      // solutionLength + 1 is due to trailing comma
      expect(fb.fizzbuzz().split(",").length).to.equal(solutionLength + 1);
    });
  });
  describe("The string your function returns should contain the correct values", () => {
    it("numbers that are not even or divisble by 3 should be added to the string", () => {
      // TODO: add more cases programmatically to make more robust
      expect(fb.fizzbuzz().split(",")[0]).to.equal("1");
      expect(fb.fizzbuzz().split(",")[4]).to.equal("5");
    });
    it("even numbers that are not divisible by 3 should be replaced with 'Fizz'", () => {
      // TODO: add more cases programmatically to make more robust
      expect(fb.fizzbuzz().split(",")[1]).to.equal(evenAnswer);
      expect(fb.fizzbuzz().split(",")[51]).to.equal(evenAnswer);
    });
    it("numbers that are divisible by 3 but not even should be replaced with 'Buzz'", () => {
      // TODO: add more cases programmatically to make more robust
      expect(fb.fizzbuzz().split(",")[2]).to.equal(multipleOf3Answer);
      expect(fb.fizzbuzz().split(",")[326]).to.equal(multipleOf3Answer);
    });
    it("even numbers that are divisible by 3 should be replaced with 'FizzBuzz'", () => {
      // TODO: add more cases programmatically to make more robust
      expect(fb.fizzbuzz().split(",")[5]).to.equal(evenAndMultipleOf3Answer);
      expect(fb.fizzbuzz().split(",")[299]).to.equal(evenAndMultipleOf3Answer);
    });
  });
});
