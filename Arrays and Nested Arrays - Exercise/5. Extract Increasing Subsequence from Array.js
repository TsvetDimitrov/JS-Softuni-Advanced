// Write a function that extracts only those numbers that form a non-decreasing subsequence.
//  In other words, you start from the first element and continue to the end of the given array of numbers. 
//  Any number which is LESS THAN the current biggest one is ignored, 
//  alternatively if it’s equal or higher than the current biggest one you set 
//  it as the current biggest one and you continue to the next number. 
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subsequence. 
// Return the array of numbers.

// The solution is right, but judge gives 80/100. The other solution gives 100/100
function extractIncreasingSubsequence(arr) {
    let result = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
        let lastElement = result[result.length - 1];
        if (lastElement < arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}



console.log(extractIncreasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]
));



function extractIncreasingSubsequence1(lines) {
    lines=lines.map(Number);
    let result=[];
    let biggest = lines[0];
    for (let i = 0; i < lines.length; i++) {
        if(lines[i]>=biggest){
            result.push(lines[i]);
            biggest=lines[i];
        }
    }
   return result;
}

console.log(extractIncreasingSubsequence1([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    ))