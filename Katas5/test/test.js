const katas5 = require('../katas5.js');
const chai = require('chai');
const expect = chai.expect;

describe('ReverseString function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.reverseString('reverseString')
    
    it('Correctly reverses a string', function() {
        expect(functionResult).to.eql('gnirtSesrever')
    })

    it('Correctly unit tests happy path of reverseString function', function() {
        expect(katas5.testReverseString1()).to.equal(undefined)
    })
})

describe('ReverseSentence function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.reverseSentence('Reverse this sentence please')

    it('Correctly reverses a sentence', function() {
        expect(functionResult).to.eql('please sentence this Reverse')
    })

    it('Correctly unit tests happy path of reverseSentence function', function() {
        expect(katas5.testReverseSentence1()).to.equal(undefined)
    })

})

describe('minimumValue function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.minimumValue([45, 20, 21, 5, 56, 30])

    it('Correctly returns minimum value', function() {
        expect(functionResult).to.eql(5)
    })
    
    it('Correctly unit tests happy path of minimumValue function', function() {
        expect(katas5.testMinimumValue1()).to.equal(undefined)
    })

})

describe('maximumValue function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.maximumValue([45, 20, 21, 5, 56, 30])

    it('Correctly returns maximum value', function() {
        expect(functionResult).to.eql(56)
    })
    
    it('Correctly unit tests happy path of maximumValue function', function() {
        expect(katas5.testMaximumValue1()).to.equal(undefined)
    })

})

describe('calculateRemainder function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.calculateRemainder(9, 7)

    it('Correctly returns remainder', function() {
        expect(functionResult).to.eql(2)
    })
    
    it('Correctly unit tests happy path of calculateRemainder function', function() {
        expect(katas5.testCalculateRemainder1()).to.equal(undefined)
    })

})

describe('distinctValues function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.distinctValues("5 9 11 5 13 9 4 5")

    it('Correctly returns distinct values', function() {
        expect(functionResult).to.eql("5 9 11 13 4")
    })
    
    it('Correctly unit tests happy path of distinctValues function', function() {
        expect(katas5.testDistinctValues1()).to.equal(undefined)
    })

})

describe('countValues function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.countValues("5 9 11 5 13 9 4 5")

    it('Correctly returns each value and how many times they appear in the string', function() {
        expect(functionResult).to.eql("5(3) 9(2) 11(1) 13(1) 4(1)")
    })
    
    it('Correctly unit tests happy path of countValues function', function() {
        expect(katas5.testCountValues1()).to.equal(undefined)
    })

})

describe('evaluateExpression function behaves as expected, and unit tests correctly assert results', function() {

    let functionResult = katas5.evaluateExpression("c + d - a + f", {a: 5, c: 9, d: 4, f: 6})

    it('Correctly evaluates expression', function() {
        expect(functionResult).to.eql(14)
    })
    
    it('Correctly unit tests happy path of evaluateExpression function', function() {
        expect(katas5.testEvaluateExpression1()).to.equal(undefined)
    })

})