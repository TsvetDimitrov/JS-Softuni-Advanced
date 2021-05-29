// Write a program that filters the employees of your company. You should  print the result in a specific format. 
// You will receive 2 parameters (data, criteria). You should parse the input, find all employees that fullfil the citeria and print them.
// Input
// You will receive a string with all the employees, and a criteria by witch you should sort the employees. 
// If the criteria is "all" print all the employees in the given format.
// Output
// The output should be the printed on the console. 
// For more information check the examples.

function solve(data, criteria) {

    let [prefix, value] = criteria.split('-');

    let counter = 0;



    JSON.parse(data).forEach(person => selectByCriteria.call(person));



    function selectByCriteria() {

        if (this[prefix] === value || criteria === 'all') {

            return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);

        }

    }

}


const jsonData = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;


const r2 = solve(jsonData, 'last_name-Johnson');