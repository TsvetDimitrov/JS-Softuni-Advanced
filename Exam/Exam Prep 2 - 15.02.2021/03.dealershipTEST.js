//this is an solution with assert

const dealership = require('./03.dealership');
const {describe} = require('mocha');
const {assert} = require('chai');
const { carEquipment } = require('./03.dealership');



describe('test', () => {
    it('newCarCost', () => {
        assert.equal(dealership.newCarCost('a', 4), 4);
        assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000);
    });

    it(`carEquipment`, () => {
        assert.deepEqual(dealership.carEquipment(['a'], [0]), ['a']);
        assert.deepEqual(dealership.carEquipment(['a','b','y'], [1,2]), ['b', 'y']);
        assert.deepEqual(dealership.carEquipment(['a','b','y'], [1]), ['b']);
    });

    it('euroCategory', () => {
        assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
        assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
        assert.equal(dealership.euroCategory(7), `We have added 5% discount to the final price: 14250.`);


    })
})