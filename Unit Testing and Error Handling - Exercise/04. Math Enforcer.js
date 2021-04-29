// Your task is to test an object named mathEnforcer, which should have the following functionality: 
// •	addFive(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the funtion should return undefined.
// o	If the parameter is a number, add 5 to it, and return the result.
// •	subtractTen(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, subtract 10 from it, and return the result.
// •	sum(num1, num2) - A function that accepts two parameters:
// o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum. 

const describe = require('mocha').describe;
const assert = require('chai').assert;


let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};



describe('mathEnforcer', () => {
    describe('add', () => {
        it('is not number', () => {
            assert.isUndefined(mathEnforcer.addFive('5'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
            // assert.isNaN(mathEnforcer.addFive(Nan));

        });

        it('add properly', () => {
            assert.equal(mathEnforcer.addFive(6), 11);
            assert.equal(mathEnforcer.addFive(-1), 4);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
        })

    });
    describe('sum', () => {
        it('is not number', () => {
            assert.isUndefined(mathEnforcer.sum('5', 1));
            assert.isUndefined(mathEnforcer.sum(6, '2'));
            assert.isUndefined(mathEnforcer.sum(undefined));
            // assert.isNaN(mathEnforcer.addFive(Nan));

        });

        it('sum properly', () => {
            assert.equal(mathEnforcer.sum(6, 10), 16);
            assert.equal(mathEnforcer.sum(-1, -8), -9);
            assert.equal(mathEnforcer.sum(1.2, - 3.2), -2);
        })
    });
    describe('substract', () => {
        it('is not number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('5'));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
            // assert.isNaN(mathEnforcer.addFive(Nan));

        });
        it('subtract properly', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-1), -11);
            assert.equal(mathEnforcer.subtractTen(5.5), -4.5);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20), 10);


        })
    });
})