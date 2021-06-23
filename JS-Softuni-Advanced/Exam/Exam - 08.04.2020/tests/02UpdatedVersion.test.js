let { Repository } = require('../solution.js');
const { expect } = require('chai');


describe('Reposotory class tests', () => {
    let repo = "";
    let properties = "";
    let entity = "";
    let entity2 = "";
    let entity3 = "";

    beforeEach(() => {
        properties = {
            name: "string",
            age: "number",
            birthday: "object",
        };
        repo = new Repository(properties);
        entity = { name: "stamat", age: 5, birthday: new Date(1998, 0, 7) };
        entity2 = { name: "stamat2", age: 5, birthday: new Date(1998, 0, 7) };
        entity3 = { name: "stamat3", age: 5, birthday: new Date(1998, 0, 7) };
    });

    describe('Getter method test', () => {
        it('getter test should work properly', () => {
            expect(repo.count).to.be.equal(0)
        });
    });

    describe('Add method tests', () => {
        it('add should work properly', () => {
            expect(repo.add(entity)).to.be.equal(0);
            expect(repo.add(entity2)).to.be.equal(1);
            expect(repo.add(entity3)).to.be.equal(2);
        });

        it('Should throw an error', () => {
            let uncorrect1 = { names: 'Kolio Kolev', age: 10, birthday: new Date(1998, 0, 7) };
            let uncorrect2 = { name: 'Kolio Kolev', age: '10', birthday: new Date(1998, 0, 7) };

            expect(() => repo.add(uncorrect1)).to.throw(Error, `Property name is missing from the entity!`);
            expect(() => repo.add(uncorrect2)).to.throw(Error, `Property age is not of correct type!`);
        });
    });

    describe('getId tests', () => {
        it('getId should work properly', () => {
            repo.add(entity);
            repo.add(entity2);
            repo.add(entity3);

            expect(repo.getId(1)).to.deep.equal(entity2);
            expect(repo.getId(2)).to.deep.equal(entity3);
            expect(repo.getId(0)).to.deep.equal(entity);
        });

        it('getId should throw an error for invalid input', () => {
            repo.add(entity);
            repo.add(entity2);
            repo.add(entity3);

            expect(() => repo.getId(-1)).to.throw(Error, `Entity with id: -1 does not exist!`);
            expect(() => repo.getId(3)).to.throw(Error, `Entity with id: 3 does not exist!`);
        });
    });

    describe('update tests', () => {
        it('update should work properly', () => {
            repo.add(entity);
            repo.add(entity2);
            repo.add(entity3);

            let editedRepo = { name: 'Kolio', age: 10, birthday: new Date(1999, 0, 7) };
            repo.update(1, editedRepo);
            expect(repo.getId(0)).to.deep.equal(entity);
            expect(repo.getId(1)).to.deep.equal(editedRepo);
            expect(repo.getId(2)).to.deep.equal(entity3);
        });

        it('should trow an errors', () => {
            let uncorrect1 = { names: 'Kolio Kolev', age: 10, birthday: new Date(1998, 0, 7) };
            let uncorrect2 = { name: 'Kolio Kolev', age: '10', birthday: new Date(1998, 0, 7) };

            repo.add(entity);
            repo.add(entity2);
            repo.add(entity3);
            expect(() => repo.update(5, uncorrect1)).to.throw(Error, `Entity with id: 5 does not exist!`);
            expect(() => repo.update(1, uncorrect1)).to.throw(Error, `Property name is missing from the entity!`);
            expect(() => repo.update(0, uncorrect2)).to.throw(Error, `Property age is not of correct type!`);
        });
    });

    describe('delete method tests', () => {
        it('delete method should work properly', () => {
            repo.add(entity);
            repo.add(entity2);
            repo.add(entity3);

            repo.del(1);
            expect(repo.count).to.be.equal(2);
            expect(repo.getId(0)).to.deep.equal(entity);
            expect(repo.getId(2)).to.deep.equal(entity3);
        });

        it('should throw an error', () => {
            repo.add(entity);
            repo.add(entity2);
            repo.add(entity3);

            expect(() => repo.del(3)).to.throw(Error, `Entity with id: 3 does not exist!`);
            expect(() => repo.del(5)).to.throw(Error, `Entity with id: 5 does not exist!`);
        });
    });
});