const chai = require('chai');
const expect = require('chai').expect;
const { getAnagramsOf } = require('./s.js');
   
describe('Anagrams 1', function() {
    describe('getAnagramsOf()', function() {
        it('should correctly return anagrams of ""', function() {
            expect(getAnagramsOf('')).to.eql([]);
        }); 
        
        it('should correctly return anagrams of "steal"', function () {
            expect(getAnagramsOf('steal')).to.eql(['least', 'slate', 'stale', 'steal']);
        });

        it('should correctly return anagrams of "listen"', function() {
            expect(getAnagramsOf('listen')).to.eql(['listen', 'silent', 'tinsel']);
        });

        it('should correctly return anagrams of "restful"', function() {
            expect(getAnagramsOf('restful')).to.eql(['fluster', 'restful']);
        });

        it('should correctly return anagrams of "forth"', function() {
            expect(getAnagramsOf('forth')).to.eql(['forth', 'froth']);
        });

        it('should correctly return anagrams of "dairy"', function() {
            expect(getAnagramsOf('dairy')).to.eql(['dairy', 'diary']);
        });
            
        it('should correctly return anagrams of "reserve"', function() {
            expect(getAnagramsOf('reserve')).to.eql(['reserve', 'reverse']);
        });
    });
});
