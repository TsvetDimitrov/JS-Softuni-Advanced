const pizzUni = require("./pizza");
// const expect = require('chai').expect;
const { describe } = require('mocha');
const { assert } = require('chai');



describe('test', () => {
    it('Make an order', () => {
        let pizza0 = { orderedPizza: 'pizza', orderedDrink: 'drink' };
        let pizza1 = { orderedDrink: 'drink' };
        let pizza2 = { orderedPizza: 'pizza' };
        let pizza3 = {};

        assert.throw(() => pizzUni.makeAnOrder(pizza1), 'You must order at least 1 Pizza to finish the order.');
        assert.throw(() => pizzUni.makeAnOrder(pizza3), 'You must order at least 1 Pizza to finish the order.');

        assert.equal(pizzUni.makeAnOrder(pizza0), `You just ordered ${pizza0.orderedPizza} and ${pizza0.orderedDrink}.`);
        assert.equal(pizzUni.makeAnOrder(pizza2), `You just ordered ${pizza2.orderedPizza}`);

    });

    it('Test 2', () => {
        let statusPizza1 = [
            { pizzaName: `pizza23`, status: 'ready' },
            { pizzaName: `pizza4`, status: 'ready' },
            { pizzaName: `pizzaM`, status: 'preparing' },
            { pizzaName: `pizzaL`, status: 'preparing' }
        ];

        let statusPizza2 = [
            { pizzaName: `pizza`, status: 'ready' },
            { pizzaName: `pizza`, status: 'ready' },
        ];


        let statusPizza3 = [
            { pizzaName: `pizzad`, status: 'preparing' },
            { pizzaName: `pizzaf`, status: 'preparing' },
        ];

        assert.equal(pizzUni.getRemainingWork(statusPizza1), `The following pizzas are still preparing: pizzaM, pizzaL.`);
        assert.equal(pizzUni.getRemainingWork(statusPizza2), 'All orders are complete!');
        assert.equal(pizzUni.getRemainingWork(statusPizza3), `The following pizzas are still preparing: pizzad, pizzaf.`);
    });

    it('Test 3', () => {
        assert.equal(pizzUni.orderType(10, 'Carry Out'), 9);
        assert.equal(pizzUni.orderType(10, 'Delivery'), 10);
    })
})