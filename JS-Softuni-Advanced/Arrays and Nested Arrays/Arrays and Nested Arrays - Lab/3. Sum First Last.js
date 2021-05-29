// Write a function that calculates and return the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function and should be a number.

function sumFirstAndLast(arr){

    return Number(arr[0]) + Number(arr[arr.length-1]);
}


console.log(sumFirstAndLast(['20', '30', '40']));