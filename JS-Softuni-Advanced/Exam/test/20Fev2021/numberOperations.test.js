const numberOperations = require("./03. Number Operations_Resources");

const { expect } = require('chai');


describe('NumberOperations tests: ', () => {
    describe('powNumber function tests', () => {
        it('Properly executed method', () => {
            expect(numberOperations.powNumber(5)).to.be.equal(25);
        });

        it('Properly executed method 2', () => {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
        });
    });


    describe('Number checker method tests', () => {
        it('properly executed method', () => {
            expect(numberOperations.numberChecker(50)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-5)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });

        it('method with given string param', () => {
            expect(() => numberOperations.numberChecker('g')).to.throw('The input is not a number!');
        });
    });

    describe('Sum Arrays method tests', () => {
        it('properly executed method', () => {
            expect(numberOperations.sumArrays([5,2], [2])).to.deep.equal([7,2]);
        });

    });
});


