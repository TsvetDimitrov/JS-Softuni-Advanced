// Write a JS function that takes three string arguments as an input. 

// Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console on two lines.
// •	Write a function that receives three string arguments.
// •	Declare two variables named sumLength and averageLength that will keep the mathematical results.
// •	Calculate the length of the strings using the length property.


function stringLength(firstString, secondString, thirdString){
    let firstStringLength = firstString.length;
    let secondStringLength = secondString.length;
    let thirdStringLength = thirdString.length;

    let sumLength = firstStringLength + secondStringLength + thirdStringLength;

    console.log(sumLength);
    console.log(Math.floor(sumLength/3));
}


stringLength('chocolate', 'ice cream', 'cake');
