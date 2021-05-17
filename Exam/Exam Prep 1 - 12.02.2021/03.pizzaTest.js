const {expect} = require('chai');
const pizzUni = require(`./03.pizza`);

//Solution using expect.
describe('test', function(){

    it('testing makeAnOrder', function(){
        let pizza1 = {};
        let pizza2 = {orderedPizza: 'Margarita', orderedDrink: 'CocaCola'};
        let pizza3 = {orderedPizza: 'Havana'};
        let pizza4 = {orderedDrink: 'Sprite'};
        expect(() => pizzUni.makeAnOrder(pizza1)).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
        expect(pizzUni.makeAnOrder(pizza2)).to.be.equal(`You just ordered Margarita and CocaCola.`);
        expect(pizzUni.makeAnOrder(pizza3)).to.be.equal(`You just ordered Havana`);
        expect(() => pizzUni.makeAnOrder(pizza4)).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
    });

    it('testing getRemainingWork', function(){
        let pizza1 = [{pizzaName: 'Margarita', status: 'preparing'}, {pizzaName: 'Havana', status: 'preparing'}];
        expect(pizzUni.getRemainingWork(pizza1)).to.be.equal(`The following pizzas are still preparing: Margarita, Havana.`);

        let pizza2 = [{pizzaName: 'Margarita', status: 'ready'}, {pizzaName: 'Luchiano', status: 'ready'}];
        expect(pizzUni.getRemainingWork(pizza2)).to.be.equal('All orders are complete!');

        let pizza3 = [{pizzaName: 'Quatro Machone', status: 'preparing'}, {pizzaName: 'Havana', status: 'ready'}];
        expect(pizzUni.getRemainingWork(pizza3)).to.be.equal(`The following pizzas are still preparing: Quatro Machone.`)
    }); 

    it('testing orderType', function(){
        expect(pizzUni.orderType(10, 'Carry Out')).to.deep.equal(9);
        expect(pizzUni.orderType(20, 'Delivery')).to.deep.equal(20);
    });
});