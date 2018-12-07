const katas1 = require('./s.js')
const chai = require('chai')
const expect = chai.expect;


describe('Kata 1, Display an array with 1 - 20', function() {
    
    it('CORRECT - Displays 1 - 20', function() {
        expect(katas1.oneThroughTwenty()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
    it('Oops!  The array includes an extra number 21...double check the end condition in your for loop', function() {
        expect(katas1.oneThroughTwenty()).to.not.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])
    })
    it('Oops!  The array starts with 0...double check the start condition in your for loop', function() {
        expect(katas1.oneThroughTwenty()).to.not.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
})

describe('Kata 2, Display an array with even numbers from 2 - 20', function() {
    
    it('CORRECT - Displays even numbers from 2 - 20', function() {
        expect(katas1.evensToTwenty()).to.eql([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
    })
    it('Oops!  The array starts with 0 when it should start with 2...double check the start condition in your for loop', function() {
        expect(katas1.evensToTwenty()).to.not.eql([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
    })
    it('Oops!  The array ends with 18 when it should include 20...double check the end condition in your for loop', function() {
        expect(katas1.evensToTwenty()).to.not.eql([2, 4, 6, 8, 10, 12, 14, 16, 18])
    })
})

describe('Kata 3, Display an array with odd numbers 1 - 19', function() {

    it('CORRECT - displays odd numbers from 1 - 19', function() {
        expect(katas1.oddsToTwenty()).to.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
    })
    it('Oops! The array includes the extra number 21...double check the end condition in your for loop', function() {
        expect(katas1.oddsToTwenty()).to.not.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21])
    })
    it('Oops!  The array stops at 17 when it should include odd numbers up to 20...double check the end condition in your for loop', function() {
        expect(katas1.oddsToTwenty()).to.not.eql([1, 3, 5, 7, 9, 11, 13, 15, 17])
    })
})

describe('Kata 4, Display an array with multiples of 5 from 5 - 100', function() {

    it('CORRECT - displays multiples of 5 from 5 - 100', function() {
        expect(katas1.multiplesOfFive()).to.eql([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
    })
    it('Oops! Array includes 0...double check the start condition in your for loop', function() {
        expect(katas1.multiplesOfFive()).to.not.eql([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
    })
    it('Oops! Array includes 105...double check the end condition in your for loop', function() {
        expect(katas1.multiplesOfFive()).to.not.eql([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105])
    })
})

describe('Kata 5, Display an array with all the square numbers up to 100', function() {

    it('CORRECT - displays all square numbers from 1 - 100', function() {
        expect(katas1.squareNumbers()).to.eql([1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
    })
    it('Oops! The array displays an extra square number out of range (121)...double check the end condition in your for loop', function() {
        expect(katas1.squareNumbers()).to.not.eql([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121])
    })
    it('Oops! The array displays 0. Double check the start condition in your for loop', function() {
        expect(katas1.squareNumbers()).to.not.eql([0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
    })
})

describe('Kata 6, Display an array with numbers counting backwards 20 - 1', function() {

    it('CORRECT - displays numbers counting backwards 20 - 1', function() {
        expect(katas1.countingBackwards()).to.eql([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
    it('Oops!  The array starts with 21 instead of 20...Double check the start condition in your for loop', function() {
        expect(katas1.countingBackwards()).to.not.eql([21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
    it('Oops!  The array displays 0 instead of stopping at 1...Double check the end condition in your for loop', function() {
        expect(katas1.countingBackwards()).to.not.eql([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
    })
})

describe('Kata 7, Display an array with even numbers counting backwards 20 - 2', function() {

    it('CORRECT - displays even numbers counting backwards 20 - 2', function() {
        expect(katas1.evenNumbersBackwards()).to.eql([20, 18, 16, 14, 12, 10, 8, 6, 4, 2])
    })
    it('Oops! The array ends with 0 instead of 2...double check the end condition in your for loop', function() {
        expect(katas1.evenNumbersBackwards()).to.not.eql([20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0])
    })
})

describe('Kata 8, Display an array with odd numbers counting backwards 20 - 1', function() {

    it('CORRECT - displays odd numbers counting backwards 20 - 1', function() {
        expect(katas1.oddNumbersBackwards()).to.eql([19, 17, 15, 13, 11, 9, 7, 5, 3, 1])
    })
    it('Oops! The array starts with 21 instead of 20...double check the start condition in your for loop', function() {
        expect(katas1.oddNumbersBackwards()).to.not.eql([21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1])
    })
    it('Oops!  The array ends with -1 instead of 1...double check the end condition in your for loop', function() {
        expect(katas1.oddNumbersBackwards()).to.not.eql([19, 17, 15, 13, 11, 9, 7, 5, 3, 1, -1])
    })
})

describe('Kata 9, Display an array with multiples of 5 counting backwards from 100', function() {

    it('CORRECT - displays multiples of 5 counting backwards from 100', function() {
        expect(katas1.multiplesOfFiveBackwards()).to.eql([100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5])
    })
    it('Oops!  The array ends with 0 instead of 5...double check the end condition in your for loop', function() {
        expect(katas1.multiplesOfFiveBackwards()).to.not.eql([100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0])
    })
})

describe('Kata 10, Display an array with square numbers counting backwards from 100', function() {

    it('CORRECT - displays square numbers counting backwards from 100', function() {
        expect(katas1.squareNumbersBackwards()).to.eql([100, 81, 64, 49, 36, 25, 16, 9, 4, 1])
    })
    it('Oops!  The array ends with 0 instead of 1...double check the end condition in your for loop', function() {
        expect(katas1.squareNumbersBackwards()).to.not.eql([100, 81, 64, 49, 36, 25, 16, 9, 4, 1, 0])
    })
})
