let { expect } = require('chai');
let StringBuilder = require('../13. String Builder');

describe("StringBuilder Tests", () => {
    describe('constructor test', () => {
        it('Should initialize with empty array', () => {
            let sb = new StringBuilder(undefined);
            expect(sb.toString()).to.equal('');
        });

        it('Should throw an error if passed a non string argument', function () {
            expect(() => new StringBuilder(1.23)).to.throw(TypeError);
            expect(() => new StringBuilder(null)).to.throw(TypeError);
        });

        it('Should initialize correct way when we pass correct string', function () {
            let sb1 = new StringBuilder('abc');
            let sb2 = new StringBuilder('test');

            expect(sb1.toString()).to.equal('abc');
            expect(sb2.toString()).to.equal('test');

        });
    });

    describe('apend method test', () => {
        it('Should throw when passes non string arg', () => {
            let sb = new StringBuilder();
            expect(() => sb.append(true)).to.throw(TypeError);

            let sb2 = new StringBuilder('abc');
            expect(() => sb2.append(123)).to.throw(TypeError);
        });


        it('Should be executed correctly', () => {
            let input = '123';
            let inpu2 = 'wow';
            let expected = 'abc123';
            let expected2 = 'abc123wow';
            let expected3 = 'abc123ww';
            let sb = new StringBuilder('abc');
            sb.append(input);
            expect(sb.toString()).to.equal(expected);
            sb.append(inpu2);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(7, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });

    describe('prepend method test', () => {
        it('Should throw when passes non string arg', () => {
            let sb = new StringBuilder();
            expect(() => sb.prepend(true)).to.throw(TypeError);

            let sb2 = new StringBuilder('abc');
            expect(() => sb2.prepend(123)).to.throw(TypeError);
        });


        it('Should be executed correctly', () => {
            let input = '123';
            let inpu2 = 'wow';
            let expected = '123abc';
            let expected2 = 'wow123abc';
            let expected3 = 'wow123bc'
            let sb = new StringBuilder('abc');
            sb.prepend(input);
            expect(sb.toString()).to.equal(expected);
            sb.prepend(inpu2);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(6,1);
            expect(sb.toString()).to.equal(expected3);

        });
    });


    describe('insertAt method test', () => {
        it('Should throw when passes non string arg', () => {
            let sb = new StringBuilder();
            expect(() => sb.insertAt(true, 0)).to.throw(TypeError);

            let sb2 = new StringBuilder('abc');
            expect(() => sb2.insertAt(123, 1)).to.throw(TypeError);
        });


        it('Should be executed correctly', () => {
            let input = ' are';
            let inpu2 = ' fast';
            let expected = 'cars are';
            let expected2 = 'cars fast are';
            let sb = new StringBuilder('cars');
            sb.insertAt(input, 4);
            expect(sb.toString()).to.equal(expected);
            sb.insertAt(inpu2, 4);
            expect(sb.toString()).to.equal(expected2);
        });

        
        it('Should be executed correctly 2', () => {
            let input = ' are';
            let inpu2 = ' fast';
            let expected = 'cars are';
            let expected2 = 'cars fast are';
            let expected3 = 'cars fast ae';
            let sb = new StringBuilder('cars');
            sb.insertAt(input, 4);
            expect(sb.toString()).to.equal(expected);
            sb.insertAt(inpu2, 4);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(11, 1);
            expect(sb.toString()).to.equal(expected3);

        });
    });

    describe('remove method test', () => {

        it('Should be executed correctly', () => {
            let expected = 'cars are fat';
            let expected2 = 'cars fat';
            let sb = new StringBuilder('cars are fast');
            sb.remove(11, 1);
            expect(sb.toString()).to.equal(expected);
            sb.remove(4, 4);
            expect(sb.toString()).to.equal(expected2);
        });
    });

    describe('toString method test', () => {
        it('Should return correct string when called', () => {
            let expected = '';
            let expected2 = 'cars are fast';
            let sb = new StringBuilder();
            let sb2 = new StringBuilder('cars are fast');
            sb.toString();
            expect(sb.toString()).to.equal(expected);
            sb.toString();
            expect(sb2.toString()).to.equal(expected2);
        });
    });
});