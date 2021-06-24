const ChristmasMovies = require("../02. Christmas Movies_Resources");

const { expect } = require('chai');


describe('Chrismas Movies Tests', () => {
    let christmas = '';
    let movieName1 = '';
    let movieName2 = '';
    let movieName3 = '';

    let movieActors1 = '';
    let movieActors2 = '';
    let movieActors3 = '';
    beforeEach(() => {
        christmas = new ChristmasMovies();

        movieName1 = 'Home Alone';
        movieName2 = 'Home Alone2';
        movieName3 = 'Last Christmas';

        movieActors1 = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
        movieActors2 = ['Macaulay Culkin'];
        movieActors3 = ['Emilia Clarke', 'Henry Golding'];

    });
    describe('buyMovie method tests', () => {
        it('Properly exeucted way', () => {
            expect(christmas.buyMovie(movieName1, movieActors1)).to.be.equal(`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`);
            expect(christmas.buyMovie(movieName2, movieActors2)).to.be.equal(`You just got Home Alone2 to your collection in which Macaulay Culkin are taking part!`);
            expect(christmas.buyMovie(movieName3, movieActors3)).to.be.equal(`You just got Last Christmas to your collection in which Emilia Clarke, Henry Golding are taking part!`);
        });

        it('Should throw an error', () => {
            christmas.buyMovie(movieName1, movieActors1);
            expect(() => christmas.buyMovie(movieName1, movieActors2)).to.throw(Error, `You already own ${movieName1} in your collection!`)
        });
    });

    describe('Discard method tests', () => {
        it('Properly executed way', () => {
            christmas.buyMovie(movieName1, movieActors1);
            christmas.buyMovie(movieName2, movieActors2);
            christmas.watchMovie(movieName1);
            christmas.watchMovie(movieName2);

            expect(christmas.discardMovie(movieName1)).to.be.equal(`You just threw away ${movieName1}!`);
            expect(christmas.discardMovie(movieName2)).to.be.equal(`You just threw away ${movieName2}!`);
        });

        it('Should throw errors for non existing movie', () => {
            expect(() => christmas.discardMovie(movieName1)).to.throw(Error, `${movieName1} is not at your collection!`)
        });

        it('Should throw an error for not wached movie', () => {
            christmas.buyMovie(movieName1, movieActors1);
            christmas.buyMovie(movieName2, movieActors2);

            expect(() => christmas.discardMovie(movieName1)).to.throw(Error, `${movieName1} is not watched!`)
            expect(() => christmas.discardMovie(movieName2)).to.throw(Error, `${movieName2} is not watched!`)
        });
    });

    describe('watchMovie method tests', () => {
        it('properly executed method', () => {
            christmas.buyMovie(movieName1);
            christmas.watchMovie(movieName1);
            christmas.watchMovie(movieName1);
            christmas.watchMovie(movieName1);

            expect(christmas.watched[movieName1]).to.deep.equal(3);
        });

        it('Should throw an error', () => {
            expect(() => christmas.watchMovie(movieName1)).to.throw(Error, 'No such movie in your collection!');
        });
    });

    describe('favouriteMovie method tests', () => {

        it('Properly executed method', () => {
            christmas.buyMovie(movieName1);
            christmas.buyMovie(movieName2);
            christmas.watchMovie(movieName1);
            christmas.watchMovie(movieName1);
            christmas.watchMovie(movieName1);
            christmas.watchMovie(movieName2);

            expect(christmas.favouriteMovie()).to.be.equal(`Your favourite movie is ${movieName1} and you have watched it 3 times!`);
        });

        it('Should throw an error for not wached movie', () => {
            christmas.buyMovie(movieName1);
            expect(() => christmas.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });

    describe('mostStarredActor method tests', () => {
        it('properly executed method', () => {
            christmas.buyMovie(movieName1, movieActors1);
            christmas.buyMovie(movieName2, movieActors2);
            christmas.buyMovie(movieName3, movieActors3);

            christmas.watchMovie(movieName1);
            christmas.watchMovie(movieName2);
            christmas.watchMovie(movieName3);
            
            expect(christmas.mostStarredActor()).to.be.equal(`The most starred actor is Macaulay Culkin and starred in 2 movies!`);
        });


        it('Should throw an error', () => {


            expect(() => christmas.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });
});