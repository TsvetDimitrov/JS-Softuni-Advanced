// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.


function greatestCommonDivisor(num1, num2){

    while(num2){
        let num3 = num2;
        num2 = num1 % num2;
        num1 = num3;
    }
    console.log(num1);
}


greatestCommonDivisor(2154, 458);