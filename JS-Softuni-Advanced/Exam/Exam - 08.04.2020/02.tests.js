let { Repository } = require("./solution.js");
const { expect } = require('chai');
const { beforeEach } = require('mocha');


describe("Tests …", function () {
    let repo;
    // beforeEach(function (){
    //     let props = {
    //         name: "string",
    //         age: "number",
    //         birthday: "object"
    //     };
    //     repo = new Repository(props);
    // });
    describe("validate method test", function () {
        it("Should throw an error for unexisting property", function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);

            let testObj = {
                skill: "string",
                age: "number",
                birthday: "object"
            }
            expect(() => repo._validate(testObj)).to.throw(Error, `Property name is missing from the entity!`)
        });

        it('Should throw an error for validating property type', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let testObj = {
                name: 1,
                age: "number",
                birthday: "object"
            }
            expect(() => repo._validate(testObj)).to.throw(Error, `Property name is not of correct type!`)
        });

    });

    describe('add method test', function () {
        it('Should return a proper result', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let testObj = {
                name: 'Tsvetomir',
                age: 20,
                birthday: new Date(1998, 0, 7)
            }
            entity2 = { name: "stamat2", age: 5, birthday: new Date(1998, 0, 7) };
            entity3 = { name: "stamat3", age: 5, birthday: new Date(1998, 0, 7) };

            expect(repo.add(testObj)).to.deep.equal(0);
            expect(repo.add(entity2)).to.deep.equal(1);
            expect(repo.add(entity3)).to.deep.equal(2);
        });


        it('should throw an error inovked by the _validate method', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let testObj = {
                name: 'Tsvetomir',
                age: '20',
                birthday: new Date(1998, 0, 7)
            }
            expect(() => repo.add(testObj)).to.throw(Error, `Property age is not of correct type!`)
        });


        it('should throw an error inovked by the _validate method', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let testObj = {
                name: 'Tsvetomir',
                skill: 20,
                birthday: new Date(1998, 0, 7)
            }
            expect(() => repo.add(testObj)).to.throw(Error, `Property age is missing from the entity!`)
        });
    });

    describe('getId method test', function () {
        it('invalid id input should throw an error!', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);

            expect(() => repo.getId(4)).to.throw(Error, `Entity with id: 4 does not exist!`);
        });

        it('Properly executed method', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let testObj = {
                name: 'Tsvetomir',
                age: 20,
                birthday: new Date(1998, 0, 7)
            }

            entity2 = { name: "stamat2", age: 5, birthday: new Date(1998, 0, 7) };
            entity3 = { name: "stamat3", age: 5, birthday: new Date(1998, 0, 7) };
            repo.add(testObj);
            repo.add(entity2);
            repo.add(entity3);
            expect(repo.getId(0)).to.deep.equal(testObj);
            expect(repo.getId(1)).to.deep.equal(entity2);
            expect(repo.getId(2)).to.deep.equal(entity3);
        });
    });

    describe('update method test', function () {
        it('Properly executed update method', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let testObj = {
                name: 'Tsvetomir',
                age: 20,
                birthday: new Date(1998, 0, 7)
            }
            let ok = { name: "pesho", age: 5, birthday: new Date(1998, 0, 7) };

            entity2 = { name: "stamat2", age: 5, birthday: new Date(1998, 0, 7) };
            entity3 = { name: "stamat3", age: 5, birthday: new Date(1998, 0, 7) };

            repo.add(entity3);
            repo.add(entity2);
            repo.add(testObj);
            repo.update(1, ok);
            expect(repo.getId(0)).to.deep.equal(entity3);
            expect(repo.getId(1)).to.deep.equal(ok);
            expect(repo.getId(2)).to.deep.equal(testObj);

        });

        it('should throw an error for unexisting property', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let entity =
            {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repo.update(1, entity)).to.throw(Error, `Entity with id: 1 does not exist!`)
        });

        it('should throw an error invoked by the _validate method', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let entity =
            {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: 'Pesho',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }

            let test = {
                name: 'Kolio',
                age: '20',
                birthday: new Date(1999, 0, 7)
            }
            repo.add(entity)
            repo.add(entity2)

            expect(() => repo.update(1, test)).to.throw(Error, `Property age is not of correct type!`);
        });


        it('should throw an error invoked by the _validate method 2', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let entity =
            {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: 'Pesho',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }

            let test = {
                skill: 'Kolio',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }
            repo.add(entity)
            repo.add(entity2)

            expect(() => repo.update(1, test)).to.throw(Error, `Property name is missing from the entity!`);
        });
    });

    describe('delete method test', function () {
        it('should throw an error for invalid id', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let entity =
            {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity);
            expect(() => repo.del(2)).to.throw(Error, `Entity with id: 2 does not exist!`);
        });

        it('Delete method works fine', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let entity =
            {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: 'Pesho',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }

            let test = {
                name: 'Kolio',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }

            repo.add(entity);
            repo.add(entity2);
            repo.add(test);

            repo.del(1);
            expect(repo.data.size).to.be.equal(2);
            expect(repo.getId(0)).to.deep.equal(entity);
            expect(repo.getId(2)).to.deep.equal(test);

        });
    });

    describe('accessor method test', function () {
        it('should be properly executed with added instances of the class', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);
            let entity =
            {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: 'Pesho',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }
            repo.add(entity);
            repo.add(entity2);
            expect(repo.count).to.deep.equal(2);
        });


        it('should be properly executed with added instances of the class 2', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);


            let entity2 = {
                name: 'Pesho',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }

            repo.add(entity2);
            expect(repo.count).to.deep.equal(1);
        });

        it('should be properly executed with added instances of the class 3', function () {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            repo = new Repository(props);


            let entity2 = {
                name: 'Pesho',
                age: 20,
                birthday: new Date(1999, 0, 7)
            }

            expect(repo.count).to.deep.equal(0);
        });
    });
});
