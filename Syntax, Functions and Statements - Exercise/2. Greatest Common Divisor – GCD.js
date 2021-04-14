<<<<<<< HEAD
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


=======
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


>>>>>>> 5d87c69eebaacb2503a8697043f7642e5aca0eea
greatestCommonDivisor(2154, 458);