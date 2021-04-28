// You need to write unit tests for a function isOddOrEven() that checks whether the length of a passed in string is even or odd.
// If the passed parameter is NOT a string return undefined.
//  If the parameter is a string return either "even" or "odd" based on the length of the string.


const describe = require('mocha').describe;
const assert = require('chai').assert;
function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}



describe('check is odd or even', () => {
    it('Is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd', 'Message a==a');
    });
    it('Type is string', () => {
        assert.isUndefined(isOddOrEven(1), "IT is undefined");
    });


    it('Is even', () => {
        assert.equal(isOddOrEven('aa'), 'even', "message even");
    })

    //Overload test
    it('Number input', () => {
        assert.isUndefined(isOddOrEven(5.55), 'It is undefined!');
    });
})