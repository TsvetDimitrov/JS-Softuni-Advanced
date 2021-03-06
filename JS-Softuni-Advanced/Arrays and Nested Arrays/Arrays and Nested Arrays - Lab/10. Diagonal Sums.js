// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). 
// Write a function that finds the sum at the main and at the secondary diagonals.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal,
//  then the sum at the secondary diagonal.


function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        firstDiagonal += input[i][i];
        secondDiagonal += input[i][input.length - i - 1];
    }

    console.log(firstDiagonal, secondDiagonal);
}

diagonalSums([[20, 40],
[10, 60]]
);