// Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value,
//  so it can be chained in a functional manner. 
// Input
// Your function needs to take one numeric argument.
// Output
// Your function needs to return itself with an updated context.


function add(a) {
    let sum = 0;
    sum += a;

    function calc(b) {
        sum += b;
        return calc;
    }
    calc.toString = () => sum;
    return calc;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString())