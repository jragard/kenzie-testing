const chai = require("chai");
const expect = chai.expect;
const { getAnagramsOf } = require("./s.js");
const colors = require("mocha/lib/reporters/base").colors;
colors["pending"] = "93";
colors["green"] = "92";

describe("Anagrams 1", function() {
  (getAnagramsOf ? describe : describe.skip)("getAnagramsOf()", function() {
    it("should implement the function getAnagramsOf", function() {
      if (!getAnagramsOf) {
        this.skip();
      }
    });

    it('should correctly return anagrams of ""', function() {
      expect(getAnagramsOf("")).to.eql([]);
    });

    it('should correctly return anagrams of "steal"', function() {
      expect(getAnagramsOf("steal")).to.eql([
        "least",
        "slate",
        "stale",
        "steal"
      ]);
    });

    it('should correctly return anagrams of "listen"', function() {
      expect(getAnagramsOf("listen")).to.eql(["listen", "silent", "tinsel"]);
    });

    it('should correctly return anagrams of "restful"', function() {
      expect(getAnagramsOf("restful")).to.eql(["fluster", "restful"]);
    });

    it('should correctly return anagrams of "forth"', function() {
      expect(getAnagramsOf("forth")).to.eql(["forth", "froth"]);
    });

    it('should correctly return anagrams of "dairy"', function() {
      expect(getAnagramsOf("dairy")).to.eql(["dairy", "diary"]);
    });

    it('should correctly return anagrams of "reserve"', function() {
      expect(getAnagramsOf("reserve")).to.eql(["reserve", "reverse"]);
    });
  });
});
