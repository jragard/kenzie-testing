const katas5 = require('../katas5.js');
const chai = require('chai');
const expect = chai.expect;

describe('ReverseString function behaves as expected, and unit tests correctly assert results', function() {

    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testReverseString1.toString();
    const stringFunction2 = katas5.testReverseString2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.reverseString('reverseString')
    
    it('Correctly reverses a string', function() {
        expect(functionResult).to.eql('gnirtSesrever')
    })

    it('Correctly tests reverseString function using console.assert', function() {
        expect(katas5.testReverseString1()).to.equal(undefined)
        expect(test1).to.equal(true)

    })

    it('Correctly tests reverseString function using console.assert', function() {
        expect(katas5.testReverseString2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })
})

describe('ReverseSentence function behaves as expected, and unit tests correctly assert results', function() {
    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testReverseSentence1.toString();
    const stringFunction2 = katas5.testReverseSentence2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.reverseSentence('Reverse this sentence please')

    it('Correctly reverses a sentence', function() {
        expect(functionResult).to.eql('please sentence this Reverse')
    })

    it('Correctly tests reverseSentence function using console.assert', function() {
        expect(katas5.testReverseSentence1()).to.equal(undefined)
        expect(test1).to.equal(true)
    })

    it('Correctly tests reverseSentence function using console.assert', function() {
        expect(katas5.testReverseSentence2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })

})

describe('minimumValue function behaves as expected, and unit tests correctly assert results', function() {

    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testMinimumValue1.toString();
    const stringFunction2 = katas5.testMinimumValue2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.minimumValue([45, 20, 21, 5, 56, 30])

    it('Correctly returns minimum value', function() {
        expect(functionResult).to.eql(5)
    })
    
    it('Correctly tests minimumValue function using console.assert', function() {
        expect(katas5.testMinimumValue1()).to.equal(undefined)
        expect(test1).to.equal(true)
    })

    it('Correctly tests minimumValue function using console.assert', function() {
        expect(katas5.testMinimumValue2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })

})

describe('maximumValue function behaves as expected, and unit tests correctly assert results', function() {

    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testMaximumValue1.toString();
    const stringFunction2 = katas5.testMaximumValue2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.maximumValue([45, 20, 21, 5, 56, 30])

    it('Correctly returns maximum value', function() {
        expect(functionResult).to.eql(56)
    })
    
    it('Correctly tests maximumValue function using console.assert', function() {
        expect(katas5.testMaximumValue1()).to.equal(undefined)
        expect(test1).to.equal(true)
    })

    it('Correctly tests maximumValue function using console.assert', function() {
        expect(katas5.testMaximumValue2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })

})

describe('calculateRemainder function behaves as expected, and unit tests correctly assert results', function() {

    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testCalculateRemainder1.toString();
    const stringFunction2 = katas5.testCalculateRemainder2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.calculateRemainder(9, 7)

    it('Correctly returns remainder', function() {
        expect(functionResult).to.eql(2)
    })
    
    it('Correctly tests calculateRemainder function using console.assert', function() {
        expect(katas5.testCalculateRemainder1()).to.equal(undefined)
        expect(test1).to.equal(true)
    })

    it('Correctly tests calculateRemainder function using console.assert', function() {
        expect(katas5.testCalculateRemainder2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })

})

describe('distinctValues function behaves as expected, and unit tests correctly assert results', function() {

    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testDistinctValues1.toString();
    const stringFunction2 = katas5.testDistinctValues2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.distinctValues("5 9 11 5 13 9 4 5")

    it('Correctly returns distinct values', function() {
        expect(functionResult).to.eql("5 9 11 13 4")
    })
    
    it('Correctly unit tests happy path of distinctValues function', function() {
        expect(katas5.testDistinctValues1()).to.equal(undefined)
        expect(test1).to.equal(true)
    })

    it('Correctly unit tests happy path of distinctValues function', function() {
        expect(katas5.testDistinctValues2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })

})

describe('countValues function behaves as expected, and unit tests correctly assert results', function() {

    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testCountValues1.toString();
    const stringFunction2 = katas5.testCountValues2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.countValues("5 9 11 5 13 9 4 5")

    it('Correctly returns each value and how many times they appear in the string', function() {
        expect(functionResult).to.eql("5(3) 9(2) 11(1) 13(1) 4(1)")
    })
    
    it('Correctly unit tests happy path of countValues function', function() {
        expect(katas5.testCountValues1()).to.equal(undefined)
        expect(test1).to.equal(true)
    })

    it('Correctly unit tests happy path of countValues function', function() {
        expect(katas5.testCountValues2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })

})

describe('evaluateExpression function behaves as expected, and unit tests correctly assert results', function() {

    const requiredString = /console\.assert/
    const stringFunction1 = katas5.testEvaluateExpression1.toString();
    const stringFunction2 = katas5.testEvaluateExpression2.toString();
    const test1 = requiredString.test(stringFunction1)
    const test2 = requiredString.test(stringFunction2)

    let functionResult = katas5.evaluateExpression("c + d - a + f", {a: 5, c: 9, d: 4, f: 6})

    it('Correctly evaluates expression', function() {
        expect(functionResult).to.eql(14)
    })
    
    it('Correctly unit tests happy path of evaluateExpression function', function() {
        expect(katas5.testEvaluateExpression1()).to.equal(undefined)
        expect(test1).to.equal(true)
    })

    it('Correctly unit tests happy path of evaluateExpression function', function() {
        expect(katas5.testEvaluateExpression2()).to.equal(undefined)
        expect(test2).to.equal(true)
    })

})