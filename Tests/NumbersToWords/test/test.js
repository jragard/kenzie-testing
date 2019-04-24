const numbersToWords = require('./tempFileToTest.js');
const chai = require('../../../node_modules/chai');
const assert = chai.assert;
const colors = require('../../../node_modules/mocha/lib/reporters/base').colors;
colors['pending'] = '93';
colors['green'] = '92';

describe("Numbers To Words, write a function that returns an array with all the numbers from 1 through 1000 in words", function () {

    it("should be a function", function () {
        if (typeof numbersToWords != 'function') {
            this.skip();
        }
    });
    if (typeof numbersToWords === 'function') {

        const results = numbersToWords();
        it("Returns an array", function () {
            assert.isArray(results);
        });
        it("Return value is an array with 1000 elements", function () {
            assert.equal(1000, results.length);
        });

        it("Returns values one-nine", function () {
            assert.deepEqual(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], results.slice(0, 9));
        });

        it("Returns teens (10 - 19) values", function () {
            assert.deepEqual(['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], results.slice(9, 19));
        });

        it("Returns tens values", function () {
            assert.equal('twenty', results[19]);
            assert.equal('thirty', results[29]);
            assert.equal('forty', results[39]);
            assert.equal('fifty', results[49]);
            assert.equal('sixty', results[59]);
            assert.equal('seventy', results[69]);
            assert.equal('eighty', results[79]);
            assert.equal('ninety', results[89]);
        });

        const oneHundred = ["one hundred", "one-hundred"];
        const twoHundred = ["two hundred", "two-hundred"];
        const threeHundred = ["three hundred", "three-hundred"];
        const fourHundred = ["four hundred", "four-hundred"];
        const fiveHundred = ["five hundred", "five-hundred"];
        const sixHundred = ["six hundred", "six-hundred"];
        const sevenHundred = ["seven hundred", "seven-hundred"];
        const eightHundred = ["eight hundred", "eight-hundred"];
        const nineHundred = ["nine hundred", "nine-hundred"];
        const oneThousand = ["one thousand", "one-thousand"];

        it("Returns hundreds values", function () {
            //expect(oneHundred.includes(results[99])).to.equal(true);
            assert.include(oneHundred, results[99]);
            assert.include(twoHundred, results[199]);
            assert.include(threeHundred, results[299]);
            assert.include(fourHundred, results[399]);
            assert.include(fiveHundred, results[499]);
            assert.include(sixHundred, results[599]);
            assert.include(sevenHundred, results[699]);
            assert.include(eightHundred, results[799]);
            assert.include(nineHundred, results[899]);
            assert.include(oneThousand, results[999]);
        });

        const oneNineteen = ["one hundred nineteen", "one-hundred-nineteen"];
        const oneThirtyEight = ["one hundred thirty eight", "one-hundred-thirty-eight"];
        const oneFiftySeven = ["one hundred fifty seven", "one-hundred-fifty-seven"];
        const oneSeventyNine = ["one hundred seventy nine", "one-hundred-seventy-nine"];
        const oneNinetyFour = ["one hundred ninety four", "one-hundred-ninety-four"];

        it("Returns 5 values correctly between 100 - 200", function () {
            assert.include(oneNineteen, results[118]);
            assert.include(oneThirtyEight, results[137]);
            assert.include(oneFiftySeven, results[156]);
            assert.include(oneSeventyNine, results[178]);
            assert.include(oneNinetyFour, results[193]);
        });

        const twoSixteen = ["two hundred sixteen", "two-hundred-sixteen"];
        const twoFortyOne = ["two hundred forty one", "two-hundred-forty-one"];
        const twoSixtyThree = ["two hundred sixty three", "two-hundred-sixty-three"];
        const twoEightyTwo = ["two hundred eighty two", "two-hundred-eighty-two"];
        const twoNinetySeven = ["two hundred ninety seven", "two-hundred-ninety-seven"];

        it("Returns 5 values correctly between 200 - 300", function () {
            assert.include(twoSixteen, results[215]);
            assert.include(twoFortyOne, results[240]);
            assert.include(twoSixtyThree, results[262]);
            assert.include(twoEightyTwo, results[281]);
            assert.include(twoNinetySeven, results[296]);
        });

        const threeHundredNine = ["three hundred nine", "three-hundred-nine"];
        const threeSeventeen = ["three hundred seventeen", "three-hundred-seventeen"];
        const threeThirtyEight = ["three hundred thirty eight", "three-hundred-thirty-eight"];
        const threeFiftyTwo = ["three hundred fifty two", "three-hundred-fifty-two"];
        const threeSeventySeven = ["three hundred seventy seven", "three-hundred-seventy-seven"];

        it("Returns 5 values correctly between 300 - 400", function () {
            assert.include(threeHundredNine, results[308]);
            assert.include(threeSeventeen, results[316]);
            assert.include(threeThirtyEight, results[337]);
            assert.include(threeFiftyTwo, results[351]);
            assert.include(threeSeventySeven, results[376]);
        });

        const fourHundredFifteen = ["four hundred fifteen", "four-hundred-fifteen"];
        const fourThirtyNine = ["four hundred thirty nine", "four-hundred-thirty-nine"];
        const fourSixtyOne = ["four hundred sixty one", "four-hundred-sixty-one"];
        const fourEightySeven = ["four hundred eighty seven", "four-hundred-eighty-seven"];
        const fourNinetyOne = ["four hundred ninety one", "four-hundred-ninety-one"];

        it("Returns 5 values correctly between 400 - 500", function () {
            assert.include(fourHundredFifteen, results[414]);
            assert.include(fourThirtyNine, results[438]);
            assert.include(fourSixtyOne, results[460]);
            assert.include(fourEightySeven, results[486]);
            assert.include(fourNinetyOne, results[490]);
        });

        const fiveHundredNine = ["five hundred nine", "five-hundred-nine"];
        const fiveNineteen = ["five hundred nineteen", "five-hundred-nineteen"];
        const fiveSixtySeven = ["five hundred sixty seven", "five-hundred-sixty-seven"];
        const fiveEightyNine = ["five hundred eighty nine", "five-hundred-eighty-nine"];
        const fiveNinetyEight = ["five hundred ninety eight", "five-hundred-ninety-eight"];

        it("Returns 5 values correctly between 500 - 600", function () {
            assert.include(fiveHundredNine, results[508]);
            assert.include(fiveNineteen, results[518]);
            assert.include(fiveSixtySeven, results[566]);
            assert.include(fiveEightyNine, results[588]);
            assert.include(fiveNinetyEight, results[597]);
        });

        const sixHundredSeven = ["six hundred seven", "six-hundred-seven"];
        const sixTwentyNine = ["six hundred twenty nine", "six-hundred-twenty-nine"];
        const sixFortySix = ["six hundred forty six", "six-hundred-forty-six"];
        const sixSixtyEight = ["six hundred sixty eight", "six-hundred-sixty-eight"];
        const sixEightyTwo = ["six hundred eighty two", "six-hundred-eighty-two"];

        it("Returns 5 values correctly between 600 - 700", function () {
            assert.include(sixHundredSeven, results[606]);
            assert.include(sixTwentyNine, results[628]);
            assert.include(sixFortySix, results[645]);
            assert.include(sixSixtyEight, results[667]);
            assert.include(sixEightyTwo, results[681]);
        });

        const sevenThirtyTwo = ["seven hundred thirty two", "seven-hundred-thirty-two"];
        const sevenFortyOne = ["seven hundred forty one", "seven-hundred-forty-one"];
        const sevenSixtyEight = ["seven hundred sixty eight", "seven-hundred-sixty-eight"];
        const sevenNinetySix = ["seven hundred ninety six", "seven-hundred-ninety-six"];
        const sevenNinetyNine = ["seven hundred ninety nine", "seven-hundred-ninety-nine"];

        it("Returns 5 values correctly between 700 - 800", function () {
            assert.include(sevenThirtyTwo, results[731]);
            assert.include(sevenFortyOne, results[740]);
            assert.include(sevenSixtyEight, results[767]);
            assert.include(sevenNinetySix, results[795]);
            assert.include(sevenNinetyNine, results[798]);
        });

        const eightHundredEight = ["eight hundred eight", "eight-hundred-eight"];
        const eightThirtySeven = ["eight hundred thirty seven", "eight-hundred-thirty-seven"];
        const eightFiftyNine = ["eight hundred fifty nine", "eight-hundred-fifty-nine"];
        const eightSeventySix = ["eight hundred seventy six", "eight-hundred-seventy-six"];
        const eightEightyEight = ["eight hundred eighty eight", "eight-hundred-eighty-eight"];

        it("Returns 5 values correctly between 800 - 900", function () {
            assert.include(eightHundredEight, results[807]);
            assert.include(eightThirtySeven, results[836]);
            assert.include(eightFiftyNine, results[858]);
            assert.include(eightSeventySix, results[875]);
            assert.include(eightEightyEight, results[887]);
        });

        const nineHundredTwo = ["nine hundred two", "nine-hundred-two"];
        const nineSeventeen = ["nine hundred seventeen", "nine-hundred-seventeen"];
        const nineFiftyFive = ["nine hundred fifty five", "nine-hundred-fifty-five"];
        const nineSeventyNine = ["nine hundred seventy nine", "nine-hundred-seventy-nine"];
        const nineEightyEight = ["nine hundred eighty eight", "nine-hundred-eighty-eight"];

        it("Returns 5 values correctly between 900 - 999", function () {
            assert.include(nineHundredTwo, results[901]);
            assert.include(nineSeventeen, results[916]);
            assert.include(nineFiftyFive, results[954]);
            assert.include(nineSeventyNine, results[978]);
            assert.include(nineEightyEight, results[987]);
        });

        it("Last value in results is 1000", function () {
            assert.include(oneThousand, results[999]);
        })
    }
});