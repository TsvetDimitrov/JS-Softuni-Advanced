const pizzUni = require('../pizzaPlace')
const { expect } = require('chai');


describe('Testing pizzaPlace class', () => {
    describe('Testing make an order method', () => {
        it('not valid input for the pizza order', () => {
            let pizza = {};
            let pizza2 = { orderedDrink: 'Cola' };

            expect(() => pizzUni.makeAnOrder(pizza)).to.throw(Error);
            expect(() => pizzUni.makeAnOrder(pizza2)).to.throw(Error);
        });
        it('Valid input cases for the pizza order', () => {
            let pizza = { orderedPizza: 'Salamanca', orderedDrink: 'CocaCola' };
            let pizza2 = { orderedPizza: 'Salamanca' };

            expect(pizzUni.makeAnOrder(pizza)).to.be.equal(`You just ordered Salamanca and CocaCola.`);
            expect(pizzUni.makeAnOrder(pizza2)).to.be.equal(`You just ordered Salamanca`);
        });
    });

    describe('Testing getRemainingWork method', () => {
        it('should return the preparing pizzas', () => {
            let pizzaArr1 = [{ pizzaName: 'Salamanca', status: 'preparing' }, { pizzaName: 'Casablanca', status: 'preparing' }];
            let pizzaArr2 = [{ pizzaName: 'Salamanca', status: 'ready' }, { pizzaName: 'Casablanca', status: 'ready' }];
            let pizzaArr3 = [{ pizzaName: 'Salamanca', status: 'preparing' }, { pizzaName: 'Casablanca', status: 'ready' }];

            expect(pizzUni.getRemainingWork(pizzaArr1)).to.be.equal(`The following pizzas are still preparing: Salamanca, Casablanca.`);
            expect(pizzUni.getRemainingWork(pizzaArr2)).to.be.equal('All orders are complete!');
            expect(pizzUni.getRemainingWork(pizzaArr3)).to.be.equal(`The following pizzas are still preparing: Salamanca.`);
        });
    });

    describe('Testing orderType method', () => {
        it('Carry out type', () => {
            expect(pizzUni.orderType(10, 'Carry Out')).deep.equal(9);

        });
        it('Delivery type', () => {
            expect(pizzUni.orderType(10, 'Delivery')).deep.equal(10);

        });
    });
});