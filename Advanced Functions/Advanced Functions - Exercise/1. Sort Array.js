// Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it. 
// You will receive a numeric array and a string as arguments to the first function in your code. 
// •	If the second argument is asc, the array should be sorted in ascending order (smallest values first).
// •	If it is desc, the array should be sorted in descending order (largest first).
// Input
// You will receive a numeric array and a string as input parameters. 
// Output
// The output should be the sorted array.

function sortArr(arr, str) {
    if (str === "desc") {
        return arr.sort((a, b) => b - a);
    } else if (str === "asc") {
        return arr.sort((a, b) => a - b);
    }

}


sortArr([14, 7, 17, 6, 8], 'desc')


//Another solution
function sortArrWithObj(arr, str) {
    let map = {
        'desc': (a, b) => b - a,
        'asc': (a, b) => a - b
    }

    return arr.sort(map[str]);
}