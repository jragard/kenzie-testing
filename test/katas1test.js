const katas1 = require('../katas1')
const chai = require('chai')
const assert = chai.assert;

const oneThroughTwenty = katas1.oneThroughTwenty();
const evensToTwenty = katas1.evensToTwenty();
const oddsToTwenty = katas1.oddsToTwenty();
const multiplesOfFive = katas1.multiplesOfFive();
const squareNumbers = katas1.squareNumbers();
const countingBackwards = katas1.countingBackwards();
const evenNumbersBackwards = katas1.evenNumbersBackwards();
const oddNumbersBackwards = katas1.oddNumbersBackwards();
const multiplesOfFiveBackwards = katas1.multiplesOfFiveBackwards();
const squareNumbersBackwards = katas1.squareNumbersBackwards();



describe('Display Numbers with For Loops', function() {

    it('Kata 1  - should have twenty elements', function() {
        assert.equal(oneThroughTwenty.length, 20);
    })
    it('        - should display 1 - 20', function() {
        for (let counter = 1; counter < 21; counter++) {
            assert.isTrue(oneThroughTwenty.includes(counter))
        }
    })
    it('Kata 2  - should have 10 elements', function() {
        assert.equal(evensToTwenty.length, 10)
    })
    it('        - should display even numbers 2 - 20', function() {
        for (let counter = 2; counter < 21; counter += 2) {
            assert.isTrue(evensToTwenty.includes(counter))
        }
    })
    it('Kata 3  - should have 10 elements', function() {
        assert.equal(oddsToTwenty.length, 10)
    })
    it('        - should display odd numbers 1 - 19', function() {
        for (let counter = 1; counter < 20; counter += 2) {
            assert.isTrue(oddsToTwenty.includes(counter))
        }
    })
    it('Kata 4  - should have twenty elements', function() {
        assert.equal(multiplesOfFive.length, 20);
    })
    it('        - should display multiples of 5 up to 100', function() {
        for (let counter = 5; counter < 101; counter += 5) {
            assert.isTrue(multiplesOfFive.includes(counter))
        }
    })
    it('Kata 5  - should have 10 elements', function() {
        assert.equal(squareNumbers.length, 10)
    })
    it('        - should display square numbers up to 100', function() {
        for (let counter = 1; counter < 11; counter += 1) {
            assert.isTrue(squareNumbers.includes(counter**2))
        }
    })
    it('Kata 6  - should have twenty elements', function() {
        assert.equal(countingBackwards.length, 20);
    })
    it('        - should display numbers counting backwards from 20', function() {
        for (let counter = 20; counter > 0; counter -= 1) {
            assert.isTrue(countingBackwards.includes(counter))
        }
    })
    it('Kata 7  - should have 10 elements', function() {
        assert.equal(evenNumbersBackwards.length, 10)
    })
    it('        - should display even numbers backwards from 20', function() {
        for (let counter = 20; counter > 1; counter -= 2) {
            assert.isTrue(evenNumbersBackwards.includes(counter))
        }
    })
    it('Kata 8  - should have 10 elements', function() {
        assert.equal(oddNumbersBackwards.length, 10)
    })
    it('        - should display odd numbers backwards from 20', function() {
        for (let counter = 19; counter > 2; counter -= 2) {
            assert.isTrue(oddNumbersBackwards.includes(counter))
        }
    })
    it('Kata 9  - should have twenty elements', function() {
        assert.equal(multiplesOfFiveBackwards.length, 20);
    })
    it('        - should display multiples of five counting backwards from 100', function() {
        for (let counter = 100; counter > 1; counter -= 5) {
            assert.isTrue(multiplesOfFiveBackwards.includes(counter))
        }
    })
    it('Kata 10 - should have 10 elements', function() {
        assert.equal(squareNumbersBackwards.length, 10)
    })
    it('        - should display square numbers counting backwards from 100', function() {
        for (let counter = 10; counter > 0; counter -= 1) {
            assert.isTrue(squareNumbersBackwards.includes(counter**2))
        }
    })
});