const katas7 = require('../katas7')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should();

const numbers = [1, 2, 3, 4, 5, 6]
const oddNumbers = [1, 3, 5, 7, 9, 11]
const letters = ['a', 'b', 'c', 'd', 'e']
const vowels = ['a', 'e', 'i', 'o', 'u']
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

let lettersCallbackCounter = 0;
let numbersCallbackCounter = 0;
let wordsCallbackCounter = 0;
let numbersResults = [];
let lettersResults = [];
let wordsResults = [];

describe("forEach, should reproduce the built-in method 'forEach' using a callback function, and without using the built-in version", function() {

    afterEach(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
        numbersResults = [];
        lettersResults = [];
        wordsResults = [];
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

    it("Behaves like the built-in method it is duplicating and returns expected results", function() {
        
        katas7.forEach(numbers, function(number) {
            numbersResults.push(number * number)
        })
        expect(numbersResults).to.eql([1, 4, 9, 16, 25, 36])

        katas7.forEach(letters, function(letter) {
            lettersResults.push(letter.toUpperCase())
        })
        expect(lettersResults).to.eql(['A', 'B', 'C', 'D', 'E'])

        katas7.forEach(words, function(word) {
            wordsResults.push(word + '-modified')
        })
        expect(wordsResults).to.eql(['spray-modified', 'limit-modified', 'elite-modified', 'exuberant-modified', 'destruction-modified', 'present-modified'])
    })
})


describe("map, should reproduce the built-in method 'map' using a callback function, and without using the built-in version", function() {

    afterEach(function() {
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

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {
        
        expect(katas7.map(numbers, function(number) {
            return number * 3
        })).to.eql([3, 6, 9, 12, 15, 18])

        expect(katas7.map(letters, function(letter) {
            return letter.toUpperCase()
        })).to.eql(['A', 'B', 'C', 'D', 'E'])

        expect(katas7.map(words, function(word) {
            return word + '-modified'
        })).to.eql(['spray-modified', 'limit-modified', 'elite-modified', 'exuberant-modified', 'destruction-modified', 'present-modified'])
    })
    
})

describe("some, should reproduce the built-in method 'some' using a callback function, and without using the built-in version", function() {

    afterEach(function() {
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

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {
        
        expect(katas7.some(numbers, function(number) {
            if(number % 2 === 0) {
                return true
            }
        })).to.equal(true)

        expect(katas7.some(oddNumbers, function(oddNumber) {
            if(oddNumber % 2 === 0) {
                return true
            }
        })).to.equal(false)
    })
})

describe("find, should reproduce the built-in method 'find' using a callback function, and without using the built-in version", function() {

    afterEach(function() {
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

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {

        expect(katas7.find(numbers, function(number) {
            if(number > 4) {
                return true
            }
        })).to.eql(5)

        expect(katas7.find(oddNumbers, function(oddNumber) {
            if(oddNumber > 5) {
                return true
            }
        })).to.eql(7)

        expect(katas7.find(letters, function(letter) {
            if(vowels.includes(letter)) {
                return true
            }
        })).to.eql('a')
    })
})

describe("findIndex, should reproduce the built-in method 'findIndex' using a callback function, and without using the built-in version", function() {

    afterEach(function() {
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

    afterEach(function() {
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
    
    afterEach(function() {
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