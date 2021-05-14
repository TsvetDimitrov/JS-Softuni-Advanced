const { expect } = require('chai');
const { beforeEach } = require('mocha');
const HolidayPackage = require('./02.HolidayPackage');


describe('test', function () {
    let holiday;
    // beforeEach(function () {
    //     holiday = new HolidayPackage('Dobrich', 'Winter');
    // });
    describe('constructor tests', function () {
        it('test with no params', function () {
            holiday = new HolidayPackage('Dobrich', 'Winter');
            expect(holiday.vacationers).to.deep.equal([]);
            expect(holiday.insuranceIncluded).to.be.equal(false);
            // expect(holiday.season).to.be.equal('Winter');
            // expect(holiday.destination).to.be.equal('Dobrich');
        })
    });

    describe('Add Vacationers method test', function () {
        it('invalid input test', function () {
            holiday = new HolidayPackage('Dobrich', 'Winter');
            expect(() => holiday.addVacationer(' ')).to.throw(Error, "Vacationer name must be a non-empty string");
            expect(() => holiday.addVacationer(5)).to.throw(Error, "Vacationer name must be a non-empty string");
        });

        it('Single or more that 2 names test', function () {
            holiday = new HolidayPackage('Dobrich', 'Winter');
            expect(() => holiday.addVacationer('Ivan')).to.throw(Error, "Name must consist of first name and last name");
            expect(() => holiday.addVacationer("Gerasim Penchev Dimitrov")).to.throw(Error, "Name must consist of first name and last name");
        });
    })

    describe('Show Vacationers method test', function () {
        it('No vacationers entered', function () {
            holiday = new HolidayPackage('Dobrich', 'Winter');
            expect(holiday.showVacationers()).to.be.equal("No vacationers are added yet");
        });

        it('Properly executed method', function () {
            holiday = new HolidayPackage('Dobrich', 'Winter');
            holiday.addVacationer('Ivan Petrov');
            holiday.addVacationer('Boko Borissov');
            expect(holiday.showVacationers()).to.be.equal(`Vacationers:\nIvan Petrov\nBoko Borissov`);
        });
    });

    describe('Insurance accessor test', function () {
        it('set method test', function () {
            holiday = new HolidayPackage('Dobrich', 'Winter');

            expect(() => holiday.insuranceIncluded = 'true').to.throw(Error, "Insurance status must be a boolean");
        });
    });

    describe('Generate holiday package test', function () {
        it('Invoking the method without adding vacationers', function () {
            holiday = new HolidayPackage('Dobrich', 'Winter');
            expect(() => holiday.generateHolidayPackage()).to.throw(Error, "There must be at least 1 vacationer added");
        });

        it('Properly executed Method test1', function (){
            holiday = new HolidayPackage('Dobrich', 'Winter');
            holiday.addVacationer('Evtimi Evtimov');
            holiday.addVacationer('Evlogi Evlogov');
            //price = 800;
            holiday.insuranceIncluded = true;
            //price = 900;
            //price = 1100 (because of the winter season)
            expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Dobrich\nVacationers:\nEvtimi Evtimov\nEvlogi Evlogov\nPrice: 1100`);
        });

        it('Properly executed method test2', function(){
            holiday = new HolidayPackage('Dobrich', 'Winter');
            holiday.addVacationer('Tsvetomir Dimitrov');
            holiday.addVacationer('Anatoli Dimov');

            expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Dobrich\nVacationers:\nTsvetomir Dimitrov\nAnatoli Dimov\nPrice: 1000`);
        });
        

        it('Properly executed method test3', function(){
            holiday = new HolidayPackage('Dobrich', 'Spring');
            holiday.addVacationer('Tsvetomir Dimitrov');
            holiday.addVacationer('Anatoli Dimov');

            holiday.insuranceIncluded = true;
            expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Dobrich\nVacationers:\nTsvetomir Dimitrov\nAnatoli Dimov\nPrice: 900`);
        });

        it('Properly executed method with 1 vacationer added test4', function(){
            holiday = new HolidayPackage('Dobrich', 'Summer');
            holiday.addVacationer('Tsvetomir Dimitrov');

            holiday.insuranceIncluded = true;
            expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Dobrich\nVacationers:\nTsvetomir Dimitrov\nPrice: 700`);
        });
    });
});