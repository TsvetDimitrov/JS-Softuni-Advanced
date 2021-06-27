const testNumbers = require("../testNumbers");

const { expect } = require('chai');

describe('Begin tests', () => {
    describe('sumNumbers method tests', () => {
        it('Should return undefined for invalid input', () => {
            expect(testNumbers.sumNumbers('asd', 'asd')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(1, 'asd')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers('asd', 1)).to.be.equal(undefined);
        });

        it('properly executed method', () => {
            expect(testNumbers.sumNumbers(1.233, 1.21)).to.be.equal('2.44');
            expect(testNumbers.sumNumbers(1.2333, 1.212)).to.be.equal('2.45');
            expect(testNumbers.sumNumbers(1, 1)).to.be.equal('2.00');
            expect(testNumbers.sumNumbers(1.5, 1)).to.be.equal('2.50');
        });
    });

    describe('numberChecker method tests', () => {
        it('should throw an error for invalid input', () => {
            expect(() => testNumbers.numberChecker('asd')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker('a')).to.throw(Error, 'The input is not a number!');
        });

        it('properly executed method', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(5)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(0)).to.be.equal('The number is even!');
        });
    });

    describe('averageSumArray method tests', () => {
        it('method tests', () => {
            expect(testNumbers.averageSumArray([2, 4, 1])).to.be.equal(2.3333333333333335);
            expect(testNumbers.averageSumArray([2, 2, 2])).to.be.equal(2);
            expect(testNumbers.averageSumArray([])).to.be.NaN;
        });
    });
});