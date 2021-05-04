const {expect} = require('chai');
const sum = require('./4. Sum of Numbers');


describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
});