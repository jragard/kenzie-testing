const katas2 = require('../katas2.js')
const chai = require('chai')
const expect = chai.expect;
const colors = require('mocha/lib/reporters/base').colors;
colors['pending'] = '93';
colors['green'] = '92';
const isFunction = obj => Object.getPrototypeOf(obj)

const success = 'CORRECT!  Function passes all tests';
const incorrect = 'Incorrect - Something has gone wrong';

describe("Add, Write a function named 'add' that takes two arguments and returns their sum", function () {
    
    it("should be a function", function() {
        if(typeof isFunction(katas2.add) != 'function') {
            this.skip();
        }
    })

    if(typeof isFunction(katas2.add) === 'function') {

        const studentAnswer1 = katas2.add(4, 7);
        const studentAnswer2 = katas2.add(-4, 7);

        it((studentAnswer1 === 11 && studentAnswer2 === 3) ? success : incorrect, function () {
            expect(studentAnswer1).to.equal(11);
            expect(studentAnswer2).to.equal(3);
        })
    }
})

describe("Multiply, write a function that takes two arguments and returns their product", function () {

    it("should be a function", function() {
        if(typeof isFunction(katas2.multiply) != 'function') {
            this.skip();
        }
    })

    if(typeof isFunction(katas2.multiply) === 'function') {

        const stringFunction = katas2.multiply.toString()
        const restrictedOperator = /[*+]/
        const test = restrictedOperator.test(stringFunction)

        const multiplicationTable = {
            1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            2: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            3: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            4: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
            5: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            6: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
            7: [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
            8: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
            9: [0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
            10: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        }

        let correctValues = true;

        for(key in multiplicationTable) {
            for(let index = 0; index < 10; index++) {
                let answer = katas2.multiply(Number(key), index);
                if(answer != multiplicationTable[key][index]) {
                    correctValues = false;
                }
            }
        }

        it("Function doesn't use restricted built-in operators", function () {
            expect(test).to.equal(false)
        })
        it(correctValues ? success : incorrect, function () {
            expect(correctValues).to.equal(true);
        })
    }
})

describe("Power, write a function that takes two arguments (x and n) and returns the result of raising x to the nth power", function () {

    it("should be a function", function() {
        if(typeof isFunction(katas2.power) != 'function') {
            this.skip();
        }
    })

    if(typeof isFunction(katas2.power) === 'function') {
        const stringFunction = katas2.power.toString();
        const restrictedOperator = /[*+]/;
        const test = restrictedOperator.test(stringFunction);

        const powersTable = {
                        2: [1, 2, 4, 8, 16],
                        3: [1, 3, 9, 27, 81],
                        4: [1, 4, 16, 64, 256],
                        5: [1, 5, 25, 125, 625],
                        6: [1, 6, 36, 216, 1296],
                        7: [1, 7, 49, 343, 2401],
                    }

        let correctValues = true;

        for(key in powersTable) {
            for(let index = 0; index < 5; index++) {
                let answer = katas2.power(Number(key), index);
                if(answer != powersTable[key][index]) {
                    correctValues = false;
                }
            }
        }

        it("Function doesn't use restricted built-in operators", function () {
            expect(test).to.equal(false);
        })
        it(correctValues ? success : incorrect, function () {
            expect(correctValues).to.equal(true);
        })
    }
})

describe("Factorial, write a function that takes a single argument and returns its factorial", function () {

    it("should be a function", function() {
        if(typeof isFunction(katas2.factorial) != 'function') {
            this.skip();
        }
    })

    if(typeof isFunction(katas2.factorial) === 'function') {

        const stringFunction = katas2.factorial.toString();
        const restrictedOperator = /[*+]/;
        const test = restrictedOperator.test(stringFunction);

        const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
        let correctValues = true;

        for(let index = 0; index < 10; index++) {

            let answer = katas2.factorial(index);
            if(answer != factorials[index]) {
                correctValues = false;
            }
        }

        it("Function doesn't use restricted built-in operators", function () {
            expect(test).to.equal(false);
        })
        it(correctValues ? success : incorrect, function () {
            expect(correctValues).to.equal(true);
        })
    }
})

describe("Fibonacci, write a fnction that takes an argument n and returns the nth Fibonacci Number", function () {

    it("should be a function", function() {
        if(typeof isFunction(katas2.fibonacci) != 'function') {
            this.skip();
        }
    });

    
    if(typeof isFunction(katas2.fibonacci) === 'function') {

        const stringFunction = katas2.fibonacci.toString();
        const restrictedOperator = /[*+]/;
        const test = restrictedOperator.test(stringFunction);
        
        let correctValues = true;

        for(let i = 3; i < 25; i++) {
            let firstNum = katas2.fibonacci(i - 2);
            let secondNum = katas2.fibonacci(i - 1);
            let thirdNum = katas2.fibonacci(i);

            if(firstNum + secondNum != thirdNum) {
                correctValues = false;
            }
        }
        it("Function doesn't use restricted built-in operators", function () {
            expect(test).to.equal(false);
        })
        it(correctValues ? success : incorrect, function () {
            expect(correctValues).to.equal(true);

        })
    }
})