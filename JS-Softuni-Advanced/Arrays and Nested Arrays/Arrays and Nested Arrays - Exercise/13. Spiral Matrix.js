// Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
// Input
// The input comes as 2 numbers that represent the dimension of the matrix. 
// Output
// The output is the matrix filled spirally starting from 1. You need to print every row on a new line,
//  with the cells separated by a space. Check the examples below. 


function spiralMatrix(rows, cols) {
    printMatrix(getMatrix(rows, cols));

    function getMatrix(rows, cols) {
        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];
        let matrix = [];
        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (count < maxCount) {
            for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
            minRow++;
            for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
            maxCol--;
            for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
            maxRow--;
            for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
            minCol++;
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
        // console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}

spiralMatrix(5, 5);