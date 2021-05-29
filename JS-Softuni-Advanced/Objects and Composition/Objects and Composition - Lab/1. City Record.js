// You will receive a city’s name (string), population (number), and treasury (number) as arguments, 
// which you will need to set as properties of an object and return it.



// NOTE!
//The solution must be returned, else judge gives 0/100!

function cityRecord(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury
    };
    return city;
}

console.log(cityRecord('Tortuga',
    7000,
    15000
));

//Another solutuon.
//The property name: name is just the same as only name. 
function cityRecord(name, population, treasury) {
    return {
        name,
        population,
        treasury
    }
};