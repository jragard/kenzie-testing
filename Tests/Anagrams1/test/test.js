const chai = require("../../../node_modules/chai");
const expect = chai.expect;
const { getAnagramsOf } = require("./s.js");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<!DOCTYPE html><html lang='en'><body><div><input type='text' id='input' size=40><button id='findButton'>Find Anagrams</button></div><script type='text/javascript' src='words.js'></script><script type='text/javascript' src='anagrams1.js'></script></body></html>")
global.document = dom.window.document;
const colors = require("../../../node_modules/mocha/lib/reporters/base").colors;
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
