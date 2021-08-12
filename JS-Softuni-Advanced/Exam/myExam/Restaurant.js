class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
 
    loadProducts(products) {
        for (const line of products) {
            let [productName, productQuantity, productTotalPrice] = line.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
 
            if(productTotalPrice <= this.budgetMoney) {
                if(!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = productQuantity;
                } else {
                    this.stockProducts[productName] += productQuantity;
                }
 
                this.budgetMoney -= productTotalPrice;
 
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
 
        let result = this.history.slice(this.history.length - products.length);
 
        return result.join('\n');
    }
 
    addToMenu(mealName, neededProducts, price) {
        if(!this.menu[mealName]) {
            this.menu[mealName] = {
                products: [neededProducts],
                price: Number(price),
            }
        
 
            let length = Object.keys(this.menu).length;
            if(length == 1) {
                return `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${mealName} we have ${length} meals in the menu, other ideas?`
            }
        } else {
            return `The ${mealName} is already in the our menu, try something different.`;
        }
    }
 
    showTheMenu() {
        let allMealsInMenu = Object.keys(this.menu);
        if(allMealsInMenu.length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }
 
        let result = [];
 
        allMealsInMenu
            .forEach(key => result.push(`${key} - $ ${this.menu[key].price}`));
 
        return result.join('\n');
    }
 
    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let {products,price}= this.menu[meal];
        for (let item of products[0]) {  
            item = item.split(' ')
            let quantity = Number(item.pop());
            let product = item.join(' ')
 
            if (this.stockProducts[product] < quantity || !this.stockProducts[product]) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`) 
            }
        }
 
        for (let item of products[0]) {
            item = item.split(' ')
            let quantity = Number(item.pop());
            let product = item.join(' ')
            this.stockProducts[product] -= quantity
        } this.budgetMoney += price;
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`) 
    }
}