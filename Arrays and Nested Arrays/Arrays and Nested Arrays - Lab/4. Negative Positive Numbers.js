// Write a JS function that processes the elements in an array one by one and produces a new array. 
// Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
// The input comes as array of number elements.
// The output is printed on the console, each element on a new line.

function negativePositiveNumber(input) {
    let result = [];

    for (const num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result.join("\n");
}

console.log(negativePositiveNumber([3, -2, 0, -1]));