// this is an example test file. some names will need to be changed

// dependencies for the test file. file to be tested is imported.
const katas1 = require('../katas1')
const chai = require('chai')
const assert = chai.assert;

describe('Display Numbers with For Loops', function() {

    it('Kata 1  - should have twenty elements', function() {
        assert.equal(katas1.oneThroughTwenty().length, 20);
    })
});