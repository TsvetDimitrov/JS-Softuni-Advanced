// Write a function that finds the biggest element inside a matrix.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it


function biggestElement(input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j <= input.length; j++) {
            if (input[i][j] > maxNumber) {
                maxNumber = input[i][j];

            }
        }
    }

    console.log(maxNumber);
}


biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]

);