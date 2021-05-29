// Write a function that finds the elements at even positions in an array.
// The input comes as array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

function evenPositionElements(input){
    let result = ''
    for(let i = 0; i < input.length; i+=2){
        result += input[i] + " ";
    }
    return result;
}

console.log(evenPositionElements(['20', '30', '40', '50', '60']));