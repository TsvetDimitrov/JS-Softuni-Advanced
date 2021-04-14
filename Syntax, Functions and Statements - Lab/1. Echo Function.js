// Write a JS function that takes one string parameter and prints on two lines the length
// of the parameter and then the unchanged parameter itself.
// Hints
// •	Write a function that receives a single parameter.
// •	Use the console.log function to print text on the console. Each call prints a new line automatically.
// •	The string’s length property is used to determine how many characters are in a given string



function echoFunction(param) {
    console.log(param.length);
    console.log(param);

}

echoFunction('strings are easy');