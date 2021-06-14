const numberOperations = require("./03. Number Operations_Resources");

const { expect } = require('chai');
describe('Begin Tests', function () {

    describe('powNumber test', function () {
        it('test with 5', function () {
            let number = 5;
            expect(numberOperations.powNumber(number)).to.be.equal(25);
        });

        it('test with 2', function () {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
        });
    });


    describe('number checker function tests', function () {
        it('String input should throw an error! ', function () {
            let str = 'Test';
            expect(() => numberOperations.numberChecker(str)).to.throw(Error, 'The input is not a number!');
        });

        it('Number input under 100 should be executed correctly border situation', function () {
            let num = 99;
            expect(numberOperations.numberChecker(num)).to.be.equal('The number is lower than 100!');
        });

        it('Number input over 100 should be executed correctly border situatin', function () {
            let num = 100;
            expect(numberOperations.numberChecker(num)).to.be.equal('The number is greater or equal to 100!');
        });

        it('Fill up cases', function () {
            expect(numberOperations.numberChecker(101)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(1000)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(4)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-5)).to.be.equal('The number is lower than 100!');

        });
    });

    describe('sumArrays Tests', function () {
        it('Test with different length arrays', function () {
            let array1 = [1, 2, 3];
            let array2 = [2, 4, 5, 6];

            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([3, 6, 8, 6]);
        });

        it('Test with equal length arrays', function () {
            const array1 = [2, 3];
            const array2 = [5, 4];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([7, 7]);
        });

        it('Test with length 1', function () {
            const array1 = [5];
            const array2 = [10];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([15]);
        });

        it('Tests with empty arrays', function(){
            const arr1 = [];
            const arr2 = [];
            expect(numberOperations.sumArrays(arr1, arr2)).to.deep.equal([]);

        });
    });
});