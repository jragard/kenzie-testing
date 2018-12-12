const katas7 = require('./s.js')
const chai = require('chai')
const expect = chai.expect

const numbers = [1, 2, 3, 4, 5, 6]
const oddNumbers = [1, 3, 5, 7, 9, 11]
const letters = ['a', 'b', 'c', 'd', 'e']
const vowels = ['a', 'e', 'i', 'o', 'u']
const consonants = ['b', 'c', 'd', 'f', 'g']
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

    const stringFunction = katas7.newForEach.toString()
    const restricted = /\.forEach/
    const test = restricted.test(stringFunction)

    it("Doesn't use built-in forEach method", function() {
        expect(test).to.equal(false)
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.newForEach(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.newForEach(letters, function() {
            lettersCallbackCounter++
        })

        katas7.newForEach(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })

    it("Behaves like the built-in method it is duplicating and returns expected results", function() {
        
        katas7.newForEach(numbers, function(number) {
            numbersResults.push(number * number)
        })
        expect(numbersResults).to.eql([1, 4, 9, 16, 25, 36])

        katas7.newForEach(letters, function(letter) {
            lettersResults.push(letter.toUpperCase())
        })
        expect(lettersResults).to.eql(['A', 'B', 'C', 'D', 'E'])

        katas7.newForEach(words, function(word) {
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

    const stringFunction = katas7.newMap.toString()
    const restricted = /\.map/
    const test = restricted.test(stringFunction)

    it("Doesn't use built-in forEach method", function() {
        expect(test).to.equal(false)
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.newMap(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.newMap(letters, function() {
            lettersCallbackCounter++
        })

        katas7.newMap(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {
        
        expect(katas7.newMap(numbers, function(number) {
            return number * 3
        })).to.eql([3, 6, 9, 12, 15, 18])

        expect(katas7.newMap(letters, function(letter) {
            return letter.toUpperCase()
        })).to.eql(['A', 'B', 'C', 'D', 'E'])

        expect(katas7.newMap(words, function(word) {
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

    const stringFunction = katas7.newSome.toString()
    const restricted = /\.some/
    const test = restricted.test(stringFunction)

    it("Doesn't use built-in forEach method", function() {
        expect(test).to.equal(false)
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.newSome(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.newSome(letters, function() {
            lettersCallbackCounter++
        })

        katas7.newSome(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {
        
        expect(katas7.newSome(numbers, function(number) {
            if(number % 2 === 0) {
                return true
            }
        })).to.equal(true)

        expect(katas7.newSome(oddNumbers, function(oddNumber) {
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

    const stringFunction = katas7.newFind.toString()
    const restricted = /\.find/
    const test = restricted.test(stringFunction)

    it("Doesn't use built-in forEach method", function() {
        expect(test).to.equal(false)
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.newFind(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.newFind(letters, function() {
            lettersCallbackCounter++
        })

        katas7.newFind(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {

        expect(katas7.newFind(numbers, function(number) {
            if(number > 4) {
                return true
            }
        })).to.eql(5)

        expect(katas7.newFind(oddNumbers, function(oddNumber) {
            if(oddNumber > 5) {
                return true
            }
        })).to.eql(7)

        expect(katas7.newFind(letters, function(letter) {
            if(vowels.includes(letter)) {
                return true
            }
        })).to.eql('a')

        expect(katas7.newFind(vowels, function(letter) {
            if(consonants.includes(letter)) {
                return true
            }
        })).to.equal(undefined)
    })
})

describe("findIndex, should reproduce the built-in method 'findIndex' using a callback function, and without using the built-in version", function() {

    afterEach(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    const stringFunction = katas7.newFindIndex.toString()
    const restricted = /\.findIndex/
    const test = restricted.test(stringFunction)

    it("Doesn't use built-in forEach method", function() {
        expect(test).to.equal(false)
    })
    
    it("Should be calling the callback function for each element in the given array", function() {

        katas7.newFindIndex(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.newFindIndex(letters, function() {
            lettersCallbackCounter++
        })

        katas7.newFindIndex(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {
        expect(katas7.newFindIndex(numbers, function(number) {
            if(number > 2) {
                return true
            }
        })).to.equal(2)

        expect(katas7.newFindIndex(numbers, function(number) {
            if(number > 7) {
                return true
            }
        })).to.equal(-1)
    })
})

describe("every, should reproduce the built-in method 'every' using a callback function, and without using the built-in version", function() {

    afterEach(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    const stringFunction = katas7.newEvery.toString()
    const restricted = /\.every/
    const test = restricted.test(stringFunction)

    it("Doesn't use built-in forEach method", function() {
        expect(test).to.equal(false)
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.newEvery(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.newEvery(letters, function() {
            lettersCallbackCounter++
        })

        katas7.newEvery(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {
        
        expect(katas7.newEvery(numbers, function(number) {
            if((typeof number) === 'number') {
                return true
            }
        })).to.equal(true)

        expect(katas7.newEvery(words, function(word) {
            if((typeof word) === 'string') {
                return true
            }
        })).to.equal(true)
    })
})

describe("filter, should reproduce the built-in method 'filter' using a callback function, and without using the built-in version", function() {
    
    afterEach(function() {
        lettersCallbackCounter = 0;
        numbersCallbackCounter = 0;
        wordsCallbackCounter = 0;
    })

    const stringFunction = katas7.newFilter.toString()
    const restricted = /\.filter/
    const test = restricted.test(stringFunction)

    it("Doesn't use built-in forEach method", function() {
        expect(test).to.equal(false)
    })

    it("Should be calling the callback function for each element in the given array", function() {

        katas7.newFilter(numbers, function() {
            numbersCallbackCounter++
        })

        katas7.newFilter(letters, function() {
            lettersCallbackCounter++
        })

        katas7.newFilter(words, function() {
            wordsCallbackCounter++
        })

        expect(numbersCallbackCounter).to.equal(6)
        expect(lettersCallbackCounter).to.equal(5)
        expect(wordsCallbackCounter).to.equal(6)
    })

    it("Behaves like the built-in method it's duplicating and returns expected results", function() {

        expect(katas7.newFilter(words, function(word) {
            if(word.length > 6) {
                return true
            }
        })).to.eql(['exuberant', 'destruction', 'present'])

        expect(katas7.newFilter(numbers, function(number) {
            if(number % 2 === 0) {
                return true
            }
        })).to.eql([2, 4, 6])
    })
})