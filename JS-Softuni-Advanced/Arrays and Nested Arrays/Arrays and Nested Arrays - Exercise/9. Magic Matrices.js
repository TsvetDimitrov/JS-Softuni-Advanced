
// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

function magicMatrices(matrix) {
    let rowSum = [];
    let colSum = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let sum = row.reduce((acc, val) => (acc + val), 0);
        rowSum.push(sum);
    }


    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let newRow = [];

        for (let j = 0; j < matrix.length; j++) {
            let index = matrix.length - 1 - j;
            newRow.push(matrix[index][i]);
        }
        let sum = newRow.reduce((acc, val) => (acc + val), 0);
        colSum.push(sum);
    }
    return rowSum.concat(colSum).every((el, i, arr) => el === arr[0]);
}


magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);