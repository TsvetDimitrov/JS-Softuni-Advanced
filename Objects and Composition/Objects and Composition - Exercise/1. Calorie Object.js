// Write a function that composes an object by given properties. The input comes as an array of strings. 
// Every even index of the array represents the name of the food. Every odd index is a number that is
//  equal to the calories in 100 grams of the given product. Assign each value to its
//   corresponding property and print it on the console.
// The input comes as an array of string elements.
// The output should be printed on the console.


function calorieObject(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = Number(arr[i + 1]);
    }
    return result;
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);