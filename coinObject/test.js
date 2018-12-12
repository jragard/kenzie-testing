const coinObject = require('./coinObject.js');
const chai = require('chai');
const expect = chai.expect;

describe("The flip method randomly sets the coin object's state to either 0 or 1", function() {
    
    function flip50() {
        const results = [];
        for (let i = 0; i < 50; i++) {
            coinObject.coin.flip();
            results.push(coinObject.coin.state)
        }
        return results
    }

    let results = flip50();

    it("Calling the flip method 50 times and returning an array of the outcomes results in an array of 50 elements, each of which is either 0 or 1", function() {
        expect(results.length).to.equal(50);
        let acceptedValues = [0, 1];

        for(let i = 0; i < results.length; i++) {
            expect(acceptedValues.includes(results[i])).to.equal(true)
        }
    })
})

describe("toString method successfully returns 'Heads', 'heads', 'Tails', or 'tails' depending on coin.state", function() {

    function toString50() {
        let results = [];
        for (let i = 0; i < 50; i++) {
            coinObject.coin.flip()
            results.push(coinObject.coin.toString())
        }
        return results;
    }

    let results = toString50();

    it("Flipping the coin 50 times and each time pushing the results of the toString method to an array results in 50 elements, each either 'Heads', 'heads', 'Tails', or 'tails'", function() {
        expect(results.length).to.equal(50);
        let acceptedValues = ['Heads', 'heads', 'Tails', 'tails'];

        for(let i = 0; i < results.length; i++) {
            expect(acceptedValues.includes(results[i])).to.equal(true)
        }
    })
})

describe("toHTML method creates an image element and sets the src to a particular image according to coin.state", function() {

    function toHTML50() {
        let results = [];
        for (let i = 0; i < 50; i++) {
            coinObject.coin.flip();
            results.push(coinObject.coin.toHTML())
        }
        return results;
    }

    let results = toHTML50();

    it("Flipping the coin 50 times and each time pushing the results of the toHTML method to an array results in 50 'type object' elements with nodeName 'IMG'...each element must have an src (src must not be an empty string) ", function() {
        expect(results.length).to.equal(50);
        
        for(let i = 0; i < results.length; i++) {
            expect(typeof results[i]).to.equal('object');
            expect(results[i].src).to.not.equal('');
            expect(results[i].nodeName).to.equal('IMG');
        }
    })
})

describe("display20Flips() flips the coin 20 times and displays the results on the DOM as a string", function() {

    it("20 strings of 'Heads', 'heads', 'Tails', or 'tails' are appended to the DOM", function() {
        const acceptedValues = ['Heads', 'heads', 'Tails', 'tails'];
        const numberOfElementsBefore = document.getElementsByTagName('*').length;

        coinObject.display20Flips();

        const numberOfElementsAfter = document.getElementsByTagName('*').length;
        const allElements = document.getElementsByTagName('*')
        
        const elementsList = [];
        for (let item of allElements) {
            elementsList.push(item)
        }

        const textNodeList = [];
        for (let i = 0; i < elementsList.length; i++) {
            if(acceptedValues.includes(elementsList[i].innerHTML) === true) {
                textNodeList.push(elementsList[i].innerHTML)
            }
        }

        expect(numberOfElementsAfter).to.equal(numberOfElementsBefore + 20)
        expect(textNodeList.length).to.equal(20);


    })
})

describe("display20Images() flips the coin 20 times and displays the results on the DOM as images", function() {

    it("Images are appended to the DOM...src must not be empty", function() {
        const imgTagNumberBefore = document.getElementsByTagName("img").length;
        coinObject.display20Images();
        const imgTagNumberAfter = document.getElementsByTagName("img").length;
        const imgTags = document.getElementsByTagName("img");

        for (let i = 0; i < imgTags.length; i++) {
            expect(imgTags[i].src).to.not.equal("")
        }

        expect(imgTagNumberAfter).to.equal(imgTagNumberBefore + 20);    
    })
})