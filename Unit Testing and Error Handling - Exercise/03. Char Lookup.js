// Write unit tests for a function that retrieves a character at a given index from a passed in string.
// You are given a function named lookupChar(), which has the following functionality:
// •	lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :
// o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// o	If both parameters are of the correct type but the value of the index is incorrect 
// (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
// o	If both parameters have correct types and values - return the character at the specified index in the string.

const describe = require('mocha').describe;
const assert = require('chai').assert;


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('Lookup Char', () => {
    it('', () => {
        assert.isUndefined(lookupChar(1, 0));
        assert.isUndefined(lookupChar('abc', 5.5));
        assert.isUndefined(lookupChar('abc', 'a'));

    })
    it('Index bounds', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index');
        assert.equal(lookupChar('abc', 4), 'Incorrect index');

    })
    it('Correct index and string', () => {
        assert.equal(lookupChar('abc', 2), 'c');
        assert.equal(lookupChar('abc', 0), 'a');

    })
});
