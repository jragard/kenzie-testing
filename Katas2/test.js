const katas2 = require('./s.js')
const chai = require('chai')
const expect = chai.expect;

describe("Add, Write a function named 'add' that takes two arguments and returns their sum", function() {

    it('CORRECT', function() {
        expect(katas2.add(4, 7)).to.equal(11)
    })
})

describe("Multiply, write a function that takes two arguments and returns their product", function() {
    const stringFunction = katas2.multiply.toString()
    const restrictedOperator = /[*+]/
    const test = restrictedOperator.test(stringFunction)
    it("Function doesn't use restricted built-in operators", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT", function() {
        expect(katas2.multiply(3, 9)).to.equal(27)
    })
})

describe("Power, write a function that takes two arguments (x and n) and returns the result of raising x to the nth power", function() {
    const stringFunction = katas2.power.toString()
    const restrictedOperator = /[*+]/
    const test = restrictedOperator.test(stringFunction)
    it("Function doesn't use restricted built-in operators", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT", function() {
        expect(katas2.power(2, 8)).to.equal(256)
        expect(katas2.power(3, 7)).to.equal(2187)
        expect(katas2.power(3, 13)).to.equal(1594323)
    })
})

describe("Factorial, write a function that takes a single argument and returns its factorial", function() {
    const stringFunction = katas2.factorial.toString()
    const restrictedOperator = /[*+]/
    const test = restrictedOperator.test(stringFunction)
    it("Function doesn't use restricted built-in operators", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT", function() {
        expect(katas2.factorial(4)).to.equal(24)
        expect(katas2.factorial(7)).to.equal(5040)
        expect(katas2.factorial(9)).to.equal(362880)
    })
})

describe("Fibonacci, write a fnction that takes an argument n and returns the nth Fibonacci Number", function() {
    const stringFunction = katas2.fibonacci.toString()
    const restrictedOperator = /[*+]/
    const test = restrictedOperator.test(stringFunction)
    it("Function doesn't use restricted built-in operators", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT", function() {
        expect(katas2.fibonacci(1)).to.equal(0)
        expect(katas2.fibonacci(2)).to.equal(1)
        expect(katas2.fibonacci(3)).to.equal(1)
        expect(katas2.fibonacci(4)).to.equal(2)
        expect(katas2.fibonacci(5)).to.equal(3)
        expect(katas2.fibonacci(6)).to.equal(5)
        expect(katas2.fibonacci(7)).to.equal(8)
        expect(katas2.fibonacci(8)).to.equal(13)
        expect(katas2.fibonacci(9)).to.equal(21)
    })
})