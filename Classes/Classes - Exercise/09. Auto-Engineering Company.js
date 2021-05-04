// You are tasked to create a register for a company that produces cars. You need to store how many cars have been produced from a 
// specified model of a specified brand.
// Input
// The input comes as array of strings. Each element holds information in the following format:
// “{carBrand} | {carModel} | {producedCars}”
// The car brands and models are strings, the produced cars are numbers. If the car brand you’ve received already exists, 
// just add the new car model to it with the produced cars as its value. If even the car model exists, 
// just add the given value to the current one.
// Output
// As output you need to print - for every car brand, the car models, and number of cars produced from that model. The output format is:
// “{carBrand}
//   ###{carModel} -> {producedCars}
//   ###{carModel2} -> {producedCars}
//   ...”
// The order of printing is the order in which the brands and models first appear in the input. 
// The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, 
// should be the first printed and so on. 


function autoCompany(arr) {

    // let result = arr.map((line) => line.split(' | '))
    // .reduce((storage, cars) => {
    //     let [brand, model, quantity] = cars;

    //     if(!storage[brand]){
    //         storage[brand] = {};
    //     }
    //     if(!storage[brand][model]){
    //         storage[brand][model] = 0;
    //     }

    //     storage[brand][model] += Number(quantity);
    //     return storage;

    // }, {})
    // return result;


    let splitted = [];
    for (let i = 0; i < arr.length; i++) {
        splitted.push(arr[i].split(" | "));
    }

    let storage = new Map();

    for (let i = 0; i < splitted.length; i++) {
        let cars = splitted[i];

        let [brand, model, quantity] = cars;
        if (!storage.has(brand)) {
            storage.set(brand, new Map());
        }

        if (!storage.get(brand).has(model)) {
            storage.get(brand).set(model, 0);
        }
        let value = storage.get(brand).get(model);
        storage.get(brand).set(model, value + Number(quantity))
    }
    let resultString = [];
    for ([brand, model] of storage.entries()) {
        let result = `${brand}\n`;
        for (let [name, quantity] of model.entries()) {
            result += `###${name} -> ${quantity}\n`;
        }
        resultString.push(result.trim());
    }
    return resultString.join("\n");
}



console.log(autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));