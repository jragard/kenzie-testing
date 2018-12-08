const katas3 = require('../katas3.js');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const colors = require('mocha/lib/reporters/base').colors;
colors['pending'] = '93';

const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];
const twenty = Array.from(Array(20), (e, i) => i + 1);
const hundred = Array.from(Array(100), (e, i) => i + 1);
// create new reverse arrays so we do not mutate original by calling .reverse()
const twentyReversed = Array.from(Array(20), (e, i) => i + 1).reverse();
const hundredReversed = Array.from(Array(100), (e, i) => i + 1).reverse();
describe('Display numbers on to page as html elements with for loops', function() {
  // kata 1
  describe('Kata 1', function() {
    const studentAnswer = katas3.kata1;
    const referenceAnswer = twenty;
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    if (typeof studentAnswer === 'function') {
      it('Function should return an Array', () => {
        assert.isArray(studentAnswer());
      });
      it('Array should contain the correct amount of numbers', () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it('Array should contain only values 1-20', () => {
        studentAnswer().map(item => {
          assert.isTrue(referenceAnswer.includes(item));
        });
      });
      it('Array items should be in the Correct Order', () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });
  // kata 2
  describe('Kata 2', function() {
    const studentAnswer = katas3.kata2;
    const referenceAnswer = twenty.filter(x => x % 2 === 0);
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    if (typeof studentAnswer === 'function') {
      it('Function Should return an Array', () => {
        assert.isArray(studentAnswer());
      });
      it('Array Should contain the correct amount of numbers', () => {
        assert.strictEqual(referenceAnswer.length, studentAnswer().length);
      });

      it('Array should contain only even values 1-20', () => {
        studentAnswer().map(item => {
          assert.isTrue(referenceAnswer.includes(item));
        });
      });
      it('Array items should be in the Correct Order', () => {
        studentAnswer().forEach((item, i) => {
          assert.strictEqual(referenceAnswer[i], item);
        });
      });
    }
  });

  // kata 3
  describe('Kata 3', function() {
    const studentAnswer = katas3.kata3;
    const referenceAnswer = twenty.filter(x => x % 2 !== 0);
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });

    it('Array should contain only Odd values 1-20', () => {
      studentAnswer().map(item => {
        assert.isTrue(referenceAnswer.includes(item));
      });
    });
    it('Array items should be in the Correct Order', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  // kata 4
  describe('Kata 4', function() {
    const studentAnswer = katas3.kata4;
    const referenceAnswer = hundred.filter(x => x % 5 === 0);

    it('Should be a function', () => {
      assert.isFunction(studentAnswer);
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });

    it('Array should contain only multiples of 5 from 1-100', () => {
      studentAnswer().map(item => {
        assert.isTrue(referenceAnswer.includes(item));
      });
    });
    it('Array items should be in the Correct Order', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  // kata 5
  describe('Kata 5', function() {
    const studentAnswer = katas3.kata5;
    const referenceAnswer = hundred.filter(x => Number.isInteger(Math.sqrt(x)));
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });

    it('Array should contain only the square numbers from 1-100', () => {
      expect(studentAnswer()).to.have.all.members(referenceAnswer);
    });
    it('Array items should be in the Correct Order', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  // kata 6
  describe('Kata 6', function() {
    const studentAnswer = katas3.kata6;
    const referenceAnswer = twentyReversed;
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });

    it('Array should contain only numbers 1-20', () => {
      expect(studentAnswer()).to.have.all.members(referenceAnswer);
    });
    it('Array items should be in the Correct Order (Descending)', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  // kata 7
  describe('Kata 7', function() {
    const studentAnswer = katas3.kata7;
    const referenceAnswer = twentyReversed.filter(x => x % 2 === 0);
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });
    it('Array should contain only even numbers 1-20', () => {
      expect(studentAnswer()).to.have.all.members(referenceAnswer);
    });
    it('Array items should be in the Correct Order (Descending)', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  // kata 7
  describe('Kata 8', function() {
    const studentAnswer = katas3.kata8;
    const referenceAnswer = twentyReversed.filter(x => x % 2 !== 0);
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });

    it('Array should contain only odd numbers 1-20', () => {
      expect(studentAnswer()).to.have.all.members(referenceAnswer);
    });
    it('Array items should be in the Correct Order (Descending)', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  // kata 9
  describe('Kata 9', function() {
    const studentAnswer = katas3.kata9;
    const referenceAnswer = hundredReversed.filter(x => x % 5 === 0);
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });

    it('Array should contain only multiples of 5 from 1-100', () => {
      expect(studentAnswer()).to.have.all.members(referenceAnswer);
    });
    it('Array items should be in the Correct Order (Descending)', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  // kata 10
  describe('Kata 10', function() {
    const studentAnswer = katas3.kata10;
    const referenceAnswer = hundredReversed.filter(x => Number.isInteger(Math.sqrt(x)));
    it('Kata Should be a function', function() {
      typeof studentAnswer === 'function' ? assert.isFunction(studentAnswer) : this.skip();
    });
    it('Function Should return an Array', () => {
      assert.isArray(studentAnswer());
    });
    it('Array Should contain the correct amount of numbers', () => {
      assert.strictEqual(referenceAnswer.length, studentAnswer().length);
    });

    it('Array should contain only square numbers from 1-100', () => {
      expect(studentAnswer()).to.have.all.members(referenceAnswer);
    });
    it('Array items should be in the Correct Order (Descending)', () => {
      studentAnswer().forEach((item, i) => {
        assert.strictEqual(referenceAnswer[i], item);
      });
    });
  });
  describe('Kata 11', function() {
    it('Is function: kata11', function() {
      typeof katas3.kata11 !== 'function' ? this.skip() : assert.isFunction(katas3.kata11);
    });

    if (typeof katas3.kata11 === 'function') {
      studentAnswer = katas3.kata11();
      it('Length of array', () => {
        assert.equal(studentAnswer.length, sampleArray.length);
      });

      it('Values are the correct array', () => {
        studentAnswer.map(item => {
          assert.isTrue(sampleArray.includes(item));
        });
      });
    }
  });

  describe('Kata 12', function() {
    let answer = [];
    for (let i = 0; i < sampleArray.length; i++) {
      if (sampleArray[i] % 2 == 0) {
        answer.push(sampleArray[i]);
      }
    }
    it('Is function: kata12', function() {
      typeof katas3.kata12 !== 'function' ? this.skip() : assert.isFunction(katas3.kata12);
    });
    if (typeof katas3.kata12 === 'function') {
      const studentAnswer = katas3.kata12();
      it('Length of array', function() {
        assert.equal(studentAnswer.length, answer.length);
      });

      it('Values of Arrays are correct', function() {
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe('Kata 13', function() {
    let answer = sampleArray.filter(item => item % 2 !== 0);

    it('Is function: kata13', function() {
      typeof katas3.kata13 !== 'function' ? this.skip() : assert.isFunction(katas3.kata13);
    });

    if (typeof katas3.kata13 === 'function') {
      it('Length of array', () => {
        let studentAnswer = katas3.kata13();
        assert.equal(studentAnswer.length, answer.length);
      });
      it('Values are correct', () => {
        const studentAnswer = katas3.kata13();
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe('Kata 14', function() {
    it('Is function: kata14', function() {
      typeof katas3.kata14 !== 'function' ? this.skip() : assert.isFunction(katas3.kata14);
    });

    if (typeof katas3.kata14 === 'function') {
      const studentAnswer = katas3.kata14();
      const answer = sampleArray.map(number => number * number);

      it('Length of Array', () => {
        assert.equal(studentAnswer.length, answer.length);
      });
      it('Values are Correct', () => {
        expect(studentAnswer).to.have.all.members(answer);
      });
    }
  });

  describe('Kata15', function() {
    it('is function: kata15', function() {
      typeof katas3.kata15 !== 'function' ? this.skip() : assert.isFunction(katas3.kata15);
      assert.isFunction(katas3.kata15);
    });
    if (typeof katas3.kata15 === 'function') {
      const sum = (total, num) => total + num;
      let N = 21;
      let a = Array.apply(null, { length: N }).map(Number.call, Number);
      let answer = a.reduce(sum);
      let studentAnswer = katas3.kata15();
      it('Sum of 1-20', () => {
        assert.equal(studentAnswer, answer);
      });
    }
  });

  describe('Kata 16', function() {
    it('Is function: kata16', function() {
      typeof katas3.kata16 !== 'function' ? this.skip() : assert.isFunction(katas3.kata16);
    });
    if (typeof katas3.kata16 === 'function') {
      const sum = (total, num) => total + num;
      const studentAnswer = katas3.kata16();
      const answer = sampleArray.reduce(sum);
      it('Sum of sample Array', function() {
        assert.equal(studentAnswer, answer);
      });
    }
  });

  describe('Kata 17', function() {
    it('Should be a function', function() {
      typeof katas3.kata17 !== 'function' ? this.skip() : assert.isFunction(kata3.kata17);
    });
  });

  describe('Kata 18', function() {
    it('Is function', function() {
      typeof katas3.kata18 !== 'function' ? this.skip() : assert.isFunction(kata3.kata18);
    });
  });

  describe('Kata 19', function() {
    it('Is function', function() {
      typeof katas3.kata19 !== 'function' ? this.skip() : assert.isFunction(kata3.kata19);
    });
  });

  describe('Kata 20', function() {
    it('Is function', function() {
      typeof katas3.kata20 !== 'function' ? this.skip() : assert.isFunction(kata3.kata20);
    });
  });

  describe('Kata 21', function() {
    it('Is function', function() {
      typeof katas3.kata21 !== 'function' ? this.skip() : assert.isFunction(kata3.kata21);
    });
  });
});
