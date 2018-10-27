const katas1 = require('../katas1')
var chai = require('chai')
var assert = chai.assert;

let oneThroughTwenty = katas1.oneThroughTwenty();
let evensToTwenty = katas1.evensToTwenty();



describe('Display Numbers with For Loops', function() {
    it('should have twenty elements', function() {
        assert.equal(oneThroughTwenty.length, 20);
    })
    it('should display 1 - 20', function() {
        for (let counter = 1; counter < 21; counter++) {
            assert.isTrue(oneThroughTwenty.includes(counter))
        }
    })
    it('should have 10 elements', function() {
        assert.equal(evensToTwenty.length, 10)
    })
    it('should display even numbers 2 - 20', function() {
        for (let counter = 2; counter < 21; counter += 2) {
            assert.isTrue(evensToTwenty.includes(counter))
        }
    })
});