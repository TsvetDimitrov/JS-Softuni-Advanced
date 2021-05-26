// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.
// function lastKNumbersSequence(nTimes, kLastEl){

//     let result = [1];

//     for(let i = 1; i < nTimes; i++){
//         let startIndex = Math.max(0, i-kLastEl);
//         let curElement = result.slice(startIndex, startIndex + kLastEl).reduce((acc, el) => acc + el, 0);
//         result.push(curElement);
//     }
//     console.log(result);

// }





// Another solution

function lastKNumbersSequence2(n, k){    
    let newArr = [1];
    let sumNumbers = 0;

    for(let i = 0;i < n-1; i++){
        let sum = newArr.slice(-k);
        for (const iterator of sum) {
            sumNumbers += Number(iterator);
        }
        newArr.push(sumNumbers);
        sumNumbers = 0;
    }
    return newArr.join(" ");
}



console.log(lastKNumbersSequence2(8, 2));
// The 100/100 solution.

function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
         let startIndex = Math.max(0, i - k);
         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
         result.push(currentElement);
    }
    return result;
}