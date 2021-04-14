// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

function sumOfNumbersNM(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    let result = 0;
    for(let i = num1; i <= num2; i++){
        result += i;
    }
    console.log(result);

}

sumOfNumbersNM('1', '5' );
