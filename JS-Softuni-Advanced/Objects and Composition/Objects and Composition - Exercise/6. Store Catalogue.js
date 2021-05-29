// You have to create a sorted catalogue of store products. You will be given the products’ names and prices. 
// You need to order them by alphabetical order. 
// Input
// The input comes as array of strings. Each element holds info about a product in the following format:
// “{productName} : {productPrice}”
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. 
// There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// Output
// As output you must print all the products in a specified format. They must be ordered exactly as specified above. 
// The products must be divided into groups, by the initial of their name. The group’s initial should be printed, 
// and after that the products should be printed with 2 spaces before their names. For more info check the examples.


function storeCatalogue(input) {
    let dictionary = {};
    while (input.length) {
        let [name, price] = input.shift().split(" : ");
        const firstLetter = name[0];


        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = [];
        }


        dictionary[firstLetter].push({ name, price: Number(price) });
        dictionary[firstLetter].sort((a, b) => a.name.localeCompare(b.name));
    }

    let result = [];


    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1].sort((a, b) => a.name.localeCompare(b.name)).map(product => `  ${product.name}: ${product.price}`)
        .join("\n");
        let string = `${entry[0]}\n ${values}`;
        result.push(string)
    });

    return result.join("\n");
}

console.log(storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));