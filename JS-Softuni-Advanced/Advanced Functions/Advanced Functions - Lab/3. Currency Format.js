// Write a higher-order function createFormatter that fixes some of the parameters of another function. 
// Your program will receive four parameters: three values and a function that takes 4 parameters and returns a formatted string
// (a monetary value with currency symbol). 
// Your task is to return a partially applied function, based on the input function, 
// that has its first three parameters fixed and only takes one parameter.
// You will receive the following function: 

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    let formatter = function(value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
    return formatter;
}


let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
