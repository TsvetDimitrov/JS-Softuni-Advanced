// You are given an array of numbers. Write a JS function that return the elements at odd positions from the array, 
// doubled and in reverse order.
// The input comes as array of number elements.
// The output is return on the console on a single line, separated by space.


function processOddPositions(input){
    let newArray = [];

    for(let i = 1; i < input.length; i+=2){
        newArray.push(input[i]);
    }

    newArray = newArray.map(a => a * 2).reverse().join(" ");
    return newArray;
}

console.log(processOddPositions([10, 15, 20, 25]));