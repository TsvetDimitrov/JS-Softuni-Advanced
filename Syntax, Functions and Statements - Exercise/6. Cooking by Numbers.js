// Write a program that receives 6 parameters which are a number and a list of five operations. 
// Perform the operations sequentially by starting with the input number and using the result of every operation as 
// starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of number
// •	spice - add 1 to number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. 
// The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.

function cookingByNumbers(number, ...operations) {
    number = Number(number);
    let line;
    while ((line = operations.shift()) !== undefined) {
        if (line === "chop") {
            number = chop(number);
            console.log(number);

        } else if (line === "dice") {
            number = dice(number);
            console.log(number);

        } else if (line === "spice") {
            number = spice(number);
            console.log(number);
        } else if (line === "fillet") {
            number = fillet(number);
            console.log(number);
        } else if (line === "bake") {
            number = bake(number);
            console.log(number);
        }
    }
    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }


    function fillet(number) {
        let cut = number * 0.2;
        return number - cut;
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');