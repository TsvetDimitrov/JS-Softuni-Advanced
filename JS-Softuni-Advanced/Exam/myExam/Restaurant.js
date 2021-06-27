class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let line of products) {
            line = line.split(' ');
            let price = Number(line).pop();
            let quantity = Number(line).pop();
            let product = line.join(' ')
            if (this.budgetMoney - price >= 0) {
                if (this.stockProducts[product]) {
                    this.stockProducts[product] += quantity;
                }
                else {
                    this.stockProducts[product] = quantity;
                    this.budgetMoney -= price;
                    this.history.push(`Successfully loaded ${quantity} ${product}`);
                }
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: [neededProducts],
                price: Number(price),
            }

            if (Object.keys(this.menu).length > 1) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meal in the menu, other ideas?`;

            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        let result = []
        for (let key of Object.keys(this.menu)) {
            result.push(`${key} - $ ${this.menu[key].price}`);
        }
        if (!result.length) {
            return ('Our menu is not ready yet, please come later...');
        }
        else {
            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]){
            return (`There is not ${meal} yet in our menu, do you want to order something else?`);
        } 

        let { products, price } = this.menu[meal];
        for (let item of products[0]) {
            item = item.split(' ');
            let quantity = Number(item).pop();
            let product = item.join(' ');

            if (this.stockProducts[product] < quantity || !this.stockProducts[product]) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`);
            }
        }

        for (let item of products[0]) {
            item = item.split(' ');
            let quantity = Number(item).pop();
            let product = item.join(' ');
            this.stockProducts[product] -= quantity;
        } this.budgetMoney += price;
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`);
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());

