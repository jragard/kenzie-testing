const katas1 = require('../assignments-to-test/katas1')
const chai = require('chai')
const assert = chai.assert;


describe('Display Numbers with For Loops', function() {

    it('Kata 1  - should have twenty elements', function() {
        assert.equal(katas1.oneThroughTwenty().length, 20);
    })
    it('        - should display 1 - 20', function() {
        for (let counter = 1; counter < 21; counter++) {
            assert.isTrue(katas1.oneThroughTwenty().includes(counter))
        }
    })
    it('Kata 2  - should have 10 elements', function() {
        assert.equal(katas1.evensToTwenty().length, 10)
    })
    it('        - should display even numbers 2 - 20', function() {
        for (let counter = 2; counter < 21; counter += 2) {
            assert.isTrue(katas1.evensToTwenty().includes(counter))
        }
    })
    it('Kata 3  - should have 10 elements', function() {
        assert.equal(katas1.oddsToTwenty().length, 10)
    })
    it('        - should display odd numbers 1 - 19', function() {
        for (let counter = 1; counter < 20; counter += 2) {
            assert.isTrue(katas1.oddsToTwenty().includes(counter))
        }
    })
    it('Kata 4  - should have twenty elements', function() {
        assert.equal(katas1.multiplesOfFive().length, 20);
    })
    it('        - should display multiples of 5 up to 100', function() {
        for (let counter = 5; counter < 101; counter += 5) {
            assert.isTrue(katas1.multiplesOfFive().includes(counter))
        }
    })
    it('Kata 5  - should have 10 elements', function() {
        assert.equal(katas1.squareNumbers().length, 10)
    })
    it('        - should display square numbers up to 100', function() {
        for (let counter = 1; counter < 11; counter += 1) {
            assert.isTrue(katas1.squareNumbers().includes(counter**2))
        }
    })
    it('Kata 6  - should have twenty elements', function() {
        assert.equal(katas1.countingBackwards().length, 20);
    })
    it('        - should display numbers counting backwards from 20', function() {
        for (let counter = 20; counter > 0; counter -= 1) {
            assert.isTrue(katas1.countingBackwards().includes(counter))
        }
    })
    it('Kata 7  - should have 10 elements', function() {
        assert.equal(katas1.evenNumbersBackwards().length, 10)
    })
    it('        - should display even numbers backwards from 20', function() {
        for (let counter = 20; counter > 1; counter -= 2) {
            assert.isTrue(katas1.evenNumbersBackwards().includes(counter))
        }
    })
    it('Kata 8  - should have 10 elements', function() {
        assert.equal(katas1.oddNumbersBackwards().length, 10)
    })
    it('        - should display odd numbers backwards from 20', function() {
        for (let counter = 19; counter > 2; counter -= 2) {
            assert.isTrue(katas1.oddNumbersBackwards().includes(counter))
        }
    })
    it('Kata 9  - should have twenty elements', function() {
        assert.equal(katas1.multiplesOfFiveBackwards().length, 20);
    })
    it('        - should display multiples of five counting backwards from 100', function() {
        for (let counter = 100; counter > 1; counter -= 5) {
            assert.isTrue(katas1.multiplesOfFiveBackwards().includes(counter))
        }
    })
    it('Kata 10 - should have 10 elements', function() {
        assert.equal(katas1.squareNumbersBackwards().length, 10)
    })
    it('        - should display square numbers counting backwards from 100', function() {
        for (let counter = 10; counter > 0; counter -= 1) {
            assert.isTrue(katas1.squareNumbersBackwards().includes(counter**2))
        }
    })
});