// Write a program that extracts all words from a passed in string and converts them to upper case. 
// The extracted words in upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.

function wordsUppercase(string){

    result = string.toUpperCase().match(/\w+/g).join(", ");
    console.log(result);

}


wordsUppercase('Hi, how are you?');