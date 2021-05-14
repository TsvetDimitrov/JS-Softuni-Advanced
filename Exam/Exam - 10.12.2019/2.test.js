const { expect } = require('chai');
const { beforeEach } = require('mocha');
const ChristmasMovies = require('./2. Christmas movies')

describe('test', function () {
    let christmas;
    beforeEach(function () {
        christmas = new ChristmasMovies();
    })
    // describe('test without params', function () {
    //     it('test with no params', function () {
    //         expect(christmas.movieCollection).to.deep.equal([]);
    //         expect(christmas.watched).to.deep.equal({});
    //         expect(christmas.actors).to.deep.equal([]);
    //     })
    //});
    describe('first group buyMovie', function () {
        it('correct testing', function () {
            
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern', 'Macaulay Culkin'])).to.be.equal(`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`);

        });

        it('test should be execute an error', function () {
            christmas.buyMovie('Home Alone', ['Mccool']);
            expect(() => christmas.buyMovie('Home Alone', ['Mccool'])).to.throw(Error, `You already own Home Alone in your collection!`);
        });

    });

    describe('second group discardMovie', function () {
        it('not exisiting movie in the collection', function () {
            expect(() => christmas.discardMovie('test')).to.throw(Error, `test is not at your collection!`);
        });

        it('existing movie and executing command properly', function () {
            christmas.buyMovie('Home Alone', ['Mccool']);
            christmas.watchMovie('Home Alone');
            expect(christmas.discardMovie('Home Alone')).to.be.equal(`You just threw away Home Alone!`);
        });

        it('existing movie and but not watched throws an error', function () {
            christmas.buyMovie('Home Alone', ['Mccool']);
            expect(() => christmas.discardMovie('Home Alone')).to.throw(Error, `Home Alone is not watched!`);
        });
    });

    describe('third group watchMovie', function(){
        it('invalid movie entered throws and error', function(){
            expect(() => christmas.watchMovie('Home Alone')).to.throw(Error, 'No such movie in your collection!');
        });

        it('Watching movie couple times and testing for the right input', function(){
            christmas.buyMovie('Home Alone', ['Mccool']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            expect(christmas.watched['Home Alone']).to.deep.equal(3);
        });
    });

    describe('fourth group favoriteMovie', function(){
        it('Should throw an error, because we didn\'t entered anything', function(){
            expect(() => christmas.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        }); 

        it('Should return a proper result', function(){
            christmas.buyMovie('Home Alone', ['Mccool']);
            christmas.buyMovie('Prof Gadget', ['Kolio']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Prof Gadget');
            christmas.watchMovie('Prof Gadget');
            christmas.watchMovie('Prof Gadget');
            christmas.watchMovie('Prof Gadget');
            expect(christmas.favouriteMovie()).to.be.equal('Your favourite movie is Prof Gadget and you have watched it 4 times!')
        });
    });

    describe('fifth group mostStarredActor', function(){
        it('Should throw an error, because we didn\'t entered anything.', function(){
            expect(() => christmas.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
        it('Should be executed properly', function(){
            christmas.buyMovie('Home Alone', ['Mccool']);
            christmas.buyMovie('Home Alone 2', ['Mccool']);
            christmas.buyMovie('Home Alone 3', ['Mccool']);
            christmas.buyMovie('Prof Gadget', ['Kolio']);
            christmas.watchMovie('Home Alone 2');
            
            expect(christmas.mostStarredActor()).to.be.equal(`The most starred actor is Mccool and starred in 3 movies!`)
        });
    });
});
