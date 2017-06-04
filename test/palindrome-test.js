var expect = require('chai').expect;
var isPalindrome = require('../src/palindrome');

describe('palindrome-test', function () {
    it('should pass this canary test', function () {
        expect(true).to.be.true;
    });

    it('should return true for the argument `mom`', function () {
        expect(isPalindrome('mom')).to.be.true;
    });

    it('should return false for the argument `mother`', function () {
        expect(isPalindrome('mother')).to.be.false;
    });

    it('should return true for the argument `dad`', function () {
        expect(isPalindrome('dad')).to.be.true;
    });

    it('should return false for the argument `father`', function () {
        expect(isPalindrome('father')).to.be.false;
    });

    it('should return true for the argument `race car`', function () {
        expect(isPalindrome('race car')).to.be.true;
    });

    it('should return true for the argument `never odd or even`', function () {
        expect(isPalindrome('never odd or even')).to.be.true;
    });
});
