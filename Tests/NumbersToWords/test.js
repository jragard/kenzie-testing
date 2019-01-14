const numbersToWords = require('./s.js');
const chai = require('chai');
const expect = chai.expect;

describe("Numbers To Words, write a function that returns an array with all the numbers from 1 through 1000 in words", function() {

    const results = numbersToWords.numbersToWords();

    it("Return value is an array with 1000 elements", function() {
        expect(results.length).to.equal(1000);
    })

    it("Returns expected ones values", function() {
        expect(results.slice(0, 9)).to.eql(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']);
    })

    it("Returns expected teens (10 - 19) values", function() {
        expect(results.slice(9, 19)).to.eql(['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']);
    })

    it("Returns expected tens values", function() {
        expect(results[19]).to.eql('twenty');
        expect(results[29]).to.eql('thirty');
        expect(results[39]).to.eql('forty');
        expect(results[49]).to.eql('fifty');
        expect(results[59]).to.eql('sixty');
        expect(results[69]).to.eql('seventy');
        expect(results[79]).to.eql('eighty');
        expect(results[89]).to.eql('ninety');
    })

    const oneHundred = ["one hundred", "one-hundred"];
    const twoHundred = ["two hundred", "two-hundred"];
    const threeHundred = ["three hundred", "three-hundred"];
    const fourHundred = ["four hundred", "four-hundred"];
    const fiveHundred = ["five hundred", "five-hundred"];
    const sixHundred =  ["six hundred", "six-hundred"];
    const sevenHundred = ["seven hundred", "seven-hundred"];
    const eightHundred = ["eight hundred", "eight-hundred"];
    const nineHundred = ["nine hundred", "nine-hundred"];
    const oneThousand = ["one thousand", "one-thousand"];

    it("Returns expected hundreds values", function() {
        expect(oneHundred.includes(results[99])).to.equal(true);
        expect(twoHundred.includes(results[199])).to.equal(true);
        expect(threeHundred.includes(results[299])).to.equal(true);
        expect(fourHundred.includes(results[399])).to.equal(true);
        expect(fiveHundred.includes(results[499])).to.equal(true);
        expect(sixHundred.includes(results[599])).to.equal(true);
        expect(sevenHundred.includes(results[699])).to.equal(true);
        expect(eightHundred.includes(results[799])).to.equal(true);
        expect(nineHundred.includes(results[899])).to.equal(true);
        expect(oneThousand.includes(results[999])).to.equal(true);
    })

    const oneNineteen = ["one hundred nineteen", "one-hundred-nineteen"];
    const oneThirtyEight = ["one hundred thirty eight", "one-hundred-thirty-eight"];
    const oneFiftySeven = ["one hundred fifty seven", "one-hundred-fifty-seven"];
    const oneSeventyNine = ["one hundred seventy nine", "one-hundred-seventy-nine"];
    const oneNinetyFour = ["one hundred ninety four", "one-hundred-ninety-four"];

    it("Returns 5 values correctly between 100 - 200", function() {
        expect(oneNineteen.includes(results[118])).to.equal(true);
        expect(oneThirtyEight.includes(results[137])).to.equal(true);
        expect(oneFiftySeven.includes(results[156])).to.equal(true);
        expect(oneSeventyNine.includes(results[178])).to.equal(true);
        expect(oneNinetyFour.includes(results[193])).to.equal(true);
    })

    const twoSixteen = ["two hundred sixteen", "two-hundred-sixteen"];
    const twoFortyOne = ["two hundred forty one", "two-hundred-forty-one"];
    const twoSixtyThree = ["two hundred sixty three", "two-hundred-sixty-three"];
    const twoEightyTwo = ["two hundred eighty two", "two-hundred-eighty-two"];
    const twoNinetySeven = ["two hundred ninety seven", "two-hundred-ninety-seven"]

    it("Returns 5 values correctly between 200 - 300", function() {
        expect(twoSixteen.includes(results[215])).to.equal(true);
        expect(twoFortyOne.includes(results[240])).to.equal(true);
        expect(twoSixtyThree.includes(results[262])).to.equal(true);
        expect(twoEightyTwo.includes(results[281])).to.equal(true);
        expect(twoNinetySeven.includes(results[296])).to.equal(true);
    })

    const threeHundredNine = ["three hundred nine", "three-hundred-nine"];
    const threeSeventeen = ["three hundred seventeen", "three-hundred-seventeen"];
    const threeThirtyEight = ["three hundred thirty eight", "three-hundred-thirty-eight"];
    const threeFiftyTwo = ["three hundred fifty two", "three-hundred-fifty-two"];
    const threeSeventySeven = ["three hundred seventy seven", "three-hundred-seventy-seven"];

    it("Returns 5 values correctly between 300 - 400", function() {
        expect(threeHundredNine.includes(results[308])).to.equal(true);
        expect(threeSeventeen.includes(results[316])).to.equal(true)
        expect(threeThirtyEight.includes(results[337])).to.equal(true)
        expect(threeFiftyTwo.includes(results[351])).to.equal(true)
        expect(threeSeventySeven.includes(results[376])).to.equal(true)
    })

    const fourHundredFifteen = ["four hundred fifteen", "four-hundred-fifteen"];
    const fourThirtyNine = ["four hundred thirty nine", "four-hundred-thirty-nine"];
    const fourSixtyOne = ["four hundred sixty one", "four-hundred-sixty-one"];
    const fourEightySeven = ["four hundred eighty seven", "four-hundred-eighty-seven"];
    const fourNinetyOne = ["four hundred ninety one", "four-hundred-ninety-one"];

    it("Returns 5 values correctly between 400 - 500", function() {
        expect(fourHundredFifteen.includes(results[414])).to.equal(true);
        expect(fourThirtyNine.includes(results[438])).to.equal(true)
        expect(fourSixtyOne.includes(results[460])).to.equal(true)
        expect(fourEightySeven.includes(results[486])).to.equal(true)
        expect(fourNinetyOne.includes(results[490])).to.equal(true)
    })

    const fiveHundredNine = ["five hundred nine", "five-hundred-nine"];
    const fiveNineteen = ["five hundred nineteen", "five-hundred-nineteen"];
    const fiveSixtySeven = ["five hundred sixty seven", "five-hundred-sixty-seven"];
    const fiveEightyNine = ["five hundred eighty nine", "five-hundred-eighty-nine"];
    const fiveNinetyEight = ["five hundred ninety eight", "five-hundred-ninety-eight"];

    it("Returns 5 values correctly between 500 - 600", function() {
        expect(fiveHundredNine.includes(results[508])).to.equal(true);
        expect(fiveNineteen.includes(results[518])).to.equal(true)
        expect(fiveSixtySeven.includes(results[566])).to.equal(true)
        expect(fiveEightyNine.includes(results[588])).to.equal(true)
        expect(fiveNinetyEight.includes(results[597])).to.equal(true)
    })

    const sixHundredSeven = ["six hundred seven", "six-hundred-seven"];
    const sixTwentyNine = ["six hundred twenty nine", "six-hundred-twenty-nine"];
    const sixFortySix = ["six hundred forty six", "six-hundred-forty-six"];
    const sixSixtyEight = ["six hundred sixty eight", "six-hundred-sixty-eight"];
    const sixEightyTwo = ["six hundred eighty two", "six-hundred-eighty-two"];

    it("Returns 5 values correctly between 600 - 700", function() {
        expect(sixHundredSeven.includes(results[606])).to.equal(true);
        expect(sixTwentyNine.includes(results[628])).to.equal(true)
        expect(sixFortySix.includes(results[645])).to.equal(true)
        expect(sixSixtyEight.includes(results[667])).to.equal(true)
        expect(sixEightyTwo.includes(results[681])).to.equal(true)
    })

    const sevenThirtyTwo = ["seven hundred thirty two", "seven-hundred-thirty-two"];
    const sevenFortyOne = ["seven hundred forty one", "seven-hundred-forty-one"];
    const sevenSixtyEight = ["seven hundred sixty eight", "seven-hundred-sixty-eight"];
    const sevenNinetySix = ["seven hundred ninety six", "seven-hundred-ninety-six"];
    const sevenNinetyNine = ["seven hundred ninety nine", "seven-hundred-ninety-nine"];

    it("Returns 5 values correctly between 700 - 800", function() {
        expect(sevenThirtyTwo.includes(results[731])).to.equal(true);
        expect(sevenFortyOne.includes(results[740])).to.equal(true)
        expect(sevenSixtyEight.includes(results[767])).to.equal(true)
        expect(sevenNinetySix.includes(results[795])).to.equal(true)
        expect(sevenNinetyNine.includes(results[798])).to.equal(true)
    })

    const eightHundredEight = ["eight hundred eight", "eight-hundred-eight"];
    const eightThirtySeven = ["eight hundred thirty seven", "eight-hundred-thirty-seven"];
    const eightFiftyNine = ["eight hundred fifty nine", "eight-hundred-fifty-nine"];
    const eightSeventySix = ["eight hundred seventy six", "eight-hundred-seventy-six"];
    const eightEightyEight = ["eight hundred eighty eight", "eight-hundred-eighty-eight"];

    it("Returns 5 values correctly between 800 - 900", function() {
        expect(eightHundredEight.includes(results[807])).to.equal(true);
        expect(eightThirtySeven.includes(results[836])).to.equal(true)
        expect(eightFiftyNine.includes(results[858])).to.equal(true)
        expect(eightSeventySix.includes(results[875])).to.equal(true)
        expect(eightEightyEight.includes(results[887])).to.equal(true)
    })

    const nineHundredTwo = ["nine hundred two", "nine-hundred-two"];
    const nineSeventeen = ["nine hundred seventeen", "nine-hundred-seventeen"];
    const nineFiftyFive = ["nine hundred fifty five", "nine-hundred-fifty-five"];
    const nineSeventyNine = ["nine hundred seventy nine", "nine-hundred-seventy-nine"];
    const nineEightyEight = ["nine hundred eighty eight", "nine-hundred-eighty-eight"];

    it("Returns 5 values correctly between 900 - 999", function() {
        expect(nineHundredTwo.includes(results[901])).to.equal(true);
        expect(nineSeventeen.includes(results[916])).to.equal(true)
        expect(nineFiftyFive.includes(results[954])).to.equal(true)
        expect(nineSeventyNine.includes(results[978])).to.equal(true)
        expect(nineEightyEight.includes(results[987])).to.equal(true)
    })

    it("Last value in results is 1000", function() {
        expect(oneThousand.includes(results[999])).to.equal(true)
    })
})