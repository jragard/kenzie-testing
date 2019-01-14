const katas1 = require('./s.js')
const chai = require('chai')
const expect = chai.expect;
const colors = require('mocha/lib/reporters/base').colors;
colors['pending'] = '93';
colors['green'] = '92';

const edgeSuccess = 'Edge case passed';
const success = 'CORRECT!  Function passes all tests';
const incorrect = 'Incorrect - Something has gone wrong';

describe('Kata 1, Display an array with 1 - 20', function() {
    
    it("should be a function", function() {
        if(typeof katas1.oneThroughTwenty != 'function') {
            this.skip();
        }
    })
   
    if(typeof katas1.oneThroughTwenty === 'function') {

        const studentAnswer = katas1.oneThroughTwenty();
        const correctAnswer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        const startsEarly = 'Oops!  The array starts with 0...double check the start condition in your for loop';
        const endsLate = 'Oops!  The array includes an extra number 21...double check the end condition in your for loop';
        const endsEarly = 'Oops!  The array ends at 19 instead of 20...double check the end condition in your for loop';

        it(studentAnswer.slice(0)[0] === 0 ? startsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(0)[0]).to.not.eql(0);
        })
        it(studentAnswer.slice(-1)[0] === 21 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(21);
        })
        it(studentAnswer.slice(-1)[0] === 19 ? endsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(19);
        })    
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})

describe('Kata 2, Display an array with even numbers from 2 - 20', function() {


    it("should be a function", function() {
        if(typeof katas1.evensToTwenty != 'function') {
            this.skip();
        }
    })

      if(typeof katas1.evensToTwenty === 'function') {

        const studentAnswer = katas1.evensToTwenty();
        const correctAnswer = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

        const startsEarly = 'Oops!  The array starts with 0 when it should start with 2...double check the start condition in your for loop';
        const endsEarly = 'Oops!  The array ends with 18 when it should go to 20...double check the end condition in your for loop';
        const endsLate = 'Oops!  The array ends with 22 when it should stop at 20...double check the end condition in your for loop';
        
        it(studentAnswer.slice(0)[0] === 0 ? startsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(0)[0]).to.not.eql(0);
        })
        it(studentAnswer.slice(-1)[0] === 1 ? endsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(18);
        })
        it(studentAnswer.slice(-1)[0] === 2 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(22);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(katas1.evensToTwenty()).to.eql(correctAnswer)
        })
    }
})

describe('Kata 3, Display an array with odd numbers 1 - 19', function() {

    it("should be a function", function() {
        if(typeof katas1.oddsToTwenty != 'function') {
            this.skip();
        }
    })

    const endsLate = 'Oops! The array includes the extra number 21...double check the end condition in your for loop'
    const endsEarly = 'Oops! The array stops at 17 when it should include odd numbers up to 20...double check the end condition in your for loop'


    if(typeof katas1.oddsToTwenty === 'function') {

        const studentAnswer = katas1.oddsToTwenty();
        const correctAnswer = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        it(studentAnswer.slice(-1)[0] === 21 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(21);
        })
        it(studentAnswer.slice(-1)[0] === 17 ? endsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(17);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})

describe('Kata 4, Display an array with multiples of 5 from 5 - 100', function() {

    it("should be a function", function() {
        if(typeof katas1.multiplesOfFive != 'function') {
            this.skip();
        }
    })

    const startsEarly = 'Oops! Array includes 0...double check the start condition in your for loop';
    const endsEarly = 'Oops! Array ends at 95...double check the end condition in your for loop';

    if(typeof katas1.multiplesOfFive === 'function') {

        const studentAnswer = katas1.multiplesOfFive();
        const correctAnswer = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

        it(studentAnswer.slice(0)[0] === 0 ? startsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(0)[0]).to.not.eql(0);
        })
        it(studentAnswer.slice(-1)[0] === 95 ? endsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(95);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})

describe('Kata 5, Display an array with all the square numbers up to 100', function() {

    it("should be a function", function() {
        if(typeof katas1.squareNumbers != 'function') {
            this.skip();
        }
    })

    const endsLate = 'Oops! The array displays an extra square number out of range (121)...double check the end condition in your for loop';
    const startsEarly = 'Oops! The array displays 0. Double check the start condition in your for loop';

    if(typeof katas1.squareNumbers === 'function') {

        const studentAnswer = katas1.squareNumbers();
        const correctAnswer = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

        it(studentAnswer.slice(-1)[0] === 121 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(121);
        })
        it(studentAnswer.slice(0)[0] === 0 ? startsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(0)[0]).to.not.eql(0);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})

describe('Kata 6, Display an array with numbers counting backwards 20 - 1', function() {

    it("should be a function", function() {
        if(typeof katas1.countingBackwards != 'function') {
            this.skip();
        }
    })
    
    const startsEarly = 'Oops!  The array starts with 21 instead of 20...Double check the start condition in your for loop';
    const endsLate = 'Oops!  The array displays 0 instead of stopping at 1...Double check the end condition in your for loop';
    const notReversedMessage = 'Oops! Array is counting up from 1 instead of down from 20.  Double check your iterator and initializer';

    if(typeof katas1.countingBackwards === 'function') {

        const studentAnswer = katas1.countingBackwards();
        const correctAnswer = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const notReversed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        it(JSON.stringify(studentAnswer) === JSON.stringify(notReversed) ? notReversedMessage : edgeSuccess, function() {
            expect(studentAnswer).to.not.eql(notReversed);
        })
        it(studentAnswer.slice(0)[0] === 21 ? startsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(0)[0]).to.not.eql(21);
        })
        it(studentAnswer.slice(-1)[0] === 0 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(0);
        }) 
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})

describe('Kata 7, Display an array with even numbers counting backwards 20 - 2', function() {

    it("should be a function", function() {
        if(typeof katas1.evenNumbersBackwards != 'function') {
            this.skip();
        }
    })

    const correctAnswer = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2];

    const endsLate = 'Oops! The array ends with 0 instead of 2...double check the end condition in your for loop';
    const notReversed = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    const notReversedMessage = 'Oops! Array is counting up from 2 instead of down from 20.  Double check your iterator and initializer';


      if(typeof katas1.evenNumbersBackwards === 'function') {

        const studentAnswer = katas1.evenNumbersBackwards();

        it(studentAnswer.slice(-1)[0] === 0 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(0);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(notReversed) ? notReversedMessage : edgeSuccess, function() {
            expect(studentAnswer).to.not.eql(notReversed);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})

describe('Kata 8, Display an array with odd numbers counting backwards 20 - 1', function() {

    it("should be a function", function() {
        if(typeof katas1.oddNumbersBackwards != 'function') {
            this.skip();
        }
    })

    const correctAnswer = [19, 17, 15, 13, 11, 9, 7, 5, 3, 1];

    const startsEarly = 'Oops! The array starts with 21 instead of 20...double check the start condition in your for loop';
    const endsLate = 'Oops!  The array ends with -1 instead of 1...double check the end condition in your for loop';
    const notReversed = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const notReversedMessage = 'Oops! Array is counting up from 1 instead of down from 19.  Double check your iterator and initializer';


    if(typeof katas1.oddNumbersBackwards === 'function') {

        const studentAnswer = katas1.oddNumbersBackwards();

        it(studentAnswer.slice(0)[0] === 21 ? startsEarly : edgeSuccess, function() {
            expect(studentAnswer.slice(0)[0]).to.not.eql(21);
        })
        it(studentAnswer.slice(-1)[0] === -1 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(-1);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(notReversed) ? notReversedMessage : edgeSuccess, function() {
            expect(studentAnswer).to.not.eql(notReversed);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer)
        })
    }
})

describe('Kata 9, Display an array with multiples of 5 counting backwards from 100', function() {

    it("should be a function", function() {
        if(typeof katas1.multiplesOfFiveBackwards != 'function') {
            this.skip();
        }
    })

    
    const correctAnswer = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5];

    const notReversed = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const notReversedMessage = 'Oops! Array is counting up from 5 instead of down from 100.  Double check your iterator and initializer';
    const endsLate = 'Oops!  Array ends with 0 instead of 5.  Double check the end condition in your for loop';


      if(typeof katas1.multiplesOfFiveBackwards === 'function') {

        const studentAnswer = katas1.multiplesOfFiveBackwards();

        it(JSON.stringify(studentAnswer) === JSON.stringify(notReversed) ? notReversedMessage : edgeSuccess, function() {
            expect(studentAnswer).to.not.eql(notReversed);
        })
        it(studentAnswer.slice(-1)[0] === 0 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(0);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})

describe('Kata 10, Display an array with square numbers counting backwards from 100', function() {

    it("should be a function", function() {
        if(typeof katas1.squareNumbersBackwards != 'function') {
            this.skip();
        }
    })

    const correctAnswer = [100, 81, 64, 49, 36, 25, 16, 9, 4, 1];
    const notReversed = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

    const endsLate = 'Oops!  The array ends with 0 instead of 1...double check the end condition in your for loop';
    const notReversedMessage = 'Oops! Array is counting up from 1 instead of down from 100.  Double check your iterator and initializer';

    if(typeof katas1.squareNumbersBackwards === 'function') {

        const studentAnswer = katas1.squareNumbersBackwards();

        it(studentAnswer.slice(-1)[0] === 0 ? endsLate : edgeSuccess, function() {
            expect(studentAnswer.slice(-1)[0]).to.not.eql(0);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(notReversed) ? notReversedMessage : edgeSuccess, function() {
            expect(studentAnswer).to.not.eql(notReversed);
        })
        it(JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer) ? success : incorrect, function() {
            expect(studentAnswer).to.eql(correctAnswer);
        })
    }
})
