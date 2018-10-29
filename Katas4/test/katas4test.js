const katas4 = require('../katas4')
const chai = require('chai')
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe('Manipulating strings and arrays with prototype methods', function() {

    it('Kata 1  - should display an array from gotCitiesCSV', function() {
        expect(katas4.kata1()).to.eql(['King\'s Landing', 'Braavos', 'Volantis', 'Old Valyria', 'Free Cities', 'Qarth', 'Meereen'])
    })
})