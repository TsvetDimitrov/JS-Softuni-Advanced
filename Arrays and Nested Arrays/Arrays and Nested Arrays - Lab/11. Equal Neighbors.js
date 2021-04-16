// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as array of arrays, containing string elements (2D matrix of strings).
// The output is return value of your function. Save the number of equal pairs you find and return it.



function equalNeighbors(input) {
    let count = 0;

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length; j++) {
            if (input[i][j] == input[i + 1][j]) {
                count++;
            }
            if (input[i][j] == input[i][j - 1]) {
                count++;
            }
        }
    }

    for (let i = 0; i < input[input.length - 1].length; i++) {
        if (input[input.length - 1][i] == input[input.length - 1][i + 1]) {
            count++;
        }
    }


    for (let i = 0; i < input.length - 1; i++) {
        if (input[i][0] == input[i + 1][0]) {
            count++;
        }
    }

    console.log(count);

}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);