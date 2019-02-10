const chai = require("chai");
const expect = chai.expect;
const { getSetsOfFiveAnagrams } = require("./s.js");
const colors = require("mocha/lib/reporters/base").colors;
colors["pending"] = "93";
colors["green"] = "92";

describe("Anagrams 2", function() {
  (getSetsOfFiveAnagrams ? describe : describe.skip)(
    "getSetsOfFiveAnagrams()",
    function() {
      let results;
      it("should return a list of 6 elements", function() {
        results = getSetsOfFiveAnagrams();
        expect(results).to.have.lengthOf(6);
      });

      it("should return the correct 6 lists", function() {
        expect(results[0]).to.have.members([
          "abel",
          "able",
          "bale",
          "bela",
          "elba"
        ]);
        expect(results[1]).to.have.members([
          "alger",
          "glare",
          "lager",
          "large",
          "regal"
        ]);
        expect(results[2]).to.have.members([
          "angel",
          "angle",
          "galen",
          "glean",
          "lange"
        ]);
        expect(results[3]).to.have.members([
          "caret",
          "carte",
          "cater",
          "crate",
          "trace"
        ]);
        expect(results[4]).to.have.members([
          "elan",
          "lane",
          "lean",
          "lena",
          "neal"
        ]);
        expect(results[5]).to.have.members([
          "evil",
          "levi",
          "live",
          "veil",
          "vile"
        ]);
      });

      it("should not contain hard coded anagrams", function() {
        expect(getSetsOfFiveAnagrams.toString()).to.not.include("carte");
        expect(getSetsOfFiveAnagrams.toString()).to.not.include("lena");
      });
    }
  );
});
