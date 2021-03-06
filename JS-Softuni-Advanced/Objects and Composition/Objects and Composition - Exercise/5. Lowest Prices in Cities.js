// You will be given several towns, with products and their price. 
// You need to find the lowest price for every product and the town it is sold at for that price.
// Input
// The input comes as array of strings. Each element will hold data about a town, product, and its price at that town. 
// The town and product will be strings, the price will be a number. The input will come in the following format:
// {townName} | {productName} | {productPrice}
// If you receive the same town and product more than once, you should update the old value with the new one.
// Output
// As output you must print each product with its lowest price and the town at which the product is sold at that price. 
// If two towns share the same lowest price, print the one that was entered first. 
// The output, for every product, should be in the following format:
// {productName} -> {productLowestPrice} ({townName})
// The order of output is - order of entrance. See the examples for more info.



function lowerPricesInCities(input) {
    let log = {

    };
    while (input.length) {
        let entry = input.shift();
        let [town, product, price] = entry.split(" | ");

        if (!log[product]) {
            log[product] = { town, price: Number(price) };
        } else {
            log[product] = log[product].price <= Number(price) ? log[product] : { town, price: Number(price) };
        }
    }


    let result = [];
    for (const product in log) {
        result.push(`${product} -> ${log[product].price} (${log[product].town})`);
    }
    return result.join("\n");

}

console.log(lowerPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));