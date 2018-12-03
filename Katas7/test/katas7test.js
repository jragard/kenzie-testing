const katas7 = require('../katas7')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should();

const numbers = [1, 2, 3, 4, 5, 6]
const letters = ['a', 'b', 'c', 'd', 'e']
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

let lettersCallbackCounter = 0;
let numbersCallbackCounter = 0;
let wordsCallbackCounter = 0;

describe("forEach, should reproduce the built-in method 'forEach' using a callback function, and without using the built-in version", function() {

    after(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.forEach(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.forEach(letters, function() {
            lettersCallbackCounter++
        })

        katas7.forEach(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })
})


describe("map, should reproduce the built-in method 'map' using a callback function, and without using the built-in version", function() {

    after(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.map(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.map(letters, function() {
            lettersCallbackCounter++
        })

        katas7.map(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })
    
})

describe("some, should reproduce the built-in method 'some' using a callback function, and without using the built-in version", function() {

    after(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.some(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.some(letters, function() {
            lettersCallbackCounter++
        })

        katas7.some(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })
})

describe("find, should reproduce the built-in method 'find' using a callback function, and without using the built-in version", function() {

    after(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.find(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.find(letters, function() {
            lettersCallbackCounter++
        })

        katas7.find(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })
})

describe("findIndex, should reproduce the built-in method 'findIndex' using a callback function, and without using the built-in version", function() {

    after(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })
    
    it("Should be calling the callback function for each element in the given array", function() {

        katas7.findIndex(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.findIndex(letters, function() {
            lettersCallbackCounter++
        })

        katas7.findIndex(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })
})

describe("every, should reproduce the built-in method 'every' using a callback function, and without using the built-in version", function() {

    after(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.every(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.every(letters, function() {
            lettersCallbackCounter++
        })

        katas7.every(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })
})

describe("filter, should reproduce the built-in method 'filter' using a callback function, and without using the built-in version", function() {
    
    after(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.filter(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.filter(letters, function() {
            lettersCallbackCounter++
        })

        katas7.filter(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })
})