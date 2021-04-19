// You have been tasked to create a registry for different towns and their population.
// The input comes as array of strings. Each element will contain data for a town and its population in the following format:
//  "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.
// Output
// As output, you must print all the towns, and their population.



function townPopulation(arr) {

    let towns = {};
    let line;
    while((line = arr.shift()) !== undefined){
        let [town, pop] = line.split(" <-> ");
        pop = Number(pop);
        if(!towns.hasOwnProperty(town)){
            towns[town] = pop;
        }else{
            towns[town] += pop;
        }
    }
    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);