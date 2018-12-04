const fb = require('../fizzbuzz.js')
const chai = require('chai')
const sw = require('selenium-webdriver')
const chaiWebdriver = require('chai-webdriver')

const expect = chai.expect
const driver = new sw.Builder()
    .withCapabilities(sw.Capabilities.chrome())
    .build()

chai.use(chaiWebdriver(driver))

driver.get('https://tymitchell2100.gitlab.io/fizz-buzz/')

describe('Fizzbuzz Test Suite', () => {
    // describe('Checking numbers on DOM', () => {
    //     it('should return 2', () => {
    //         expect(fb.fizzbuzz()).to.equal(2)
    //     })
    // })
    describe('Checking first element contains value of 1', () => {
        it('should contain 1', () => {
            expect('body').dom.to.contain.text('1')
        })
    })
})