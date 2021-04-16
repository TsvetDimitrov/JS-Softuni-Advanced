// Write a function that sorts an array of numbers so that the first element is the smallest one, 
// the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one and so on. 
// Return the resulting array.



function sortingNumbers(input){

    input.sort((a, b) => a - b);
    let result = [];

    while(input.length){
        result.push(input.shift());
        result.push(input.pop());
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);