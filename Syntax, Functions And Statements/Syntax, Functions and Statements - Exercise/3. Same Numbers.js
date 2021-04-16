// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.
function sameNumbers(number){
    number = String(number);  //number.toString() is the same. 
    let isDiff = false;
    for (const num of number) {
        for(let i = 0; i <number.length; i++){
            if(num !== number[i]){
                isDiff = true;
                break;
            }
        }
    }

    if(!isDiff){
        console.log(`true`);
    }else{
        console.log(`false`);
    }


    console.log(number.split("").reduce((acc, val) => Number(acc) + Number(val), 0));
}

sameNumbers(1234);

//Another solution
/*
function sameNumbers2(number){
    number = String(number);  //number.toString() is the same. 
    let isSame = true;
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        let current = Number(number[i]);
        let next = number[i+1];

        if(number[i] !== number[i+1] && next !== undefined){
            isSame = false;
        }
        sum += current;
    }

    return `${isSame}\n${sum}`;
}


console.log(sameNumbers2(1234));
console.log(sameNumbers2(222222));
*/