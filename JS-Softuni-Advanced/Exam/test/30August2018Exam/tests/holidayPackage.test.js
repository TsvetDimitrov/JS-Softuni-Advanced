const HolidayPackage = require('../HolidayPackage');
const { expect } = require('chai');



describe('HolidayPackage tests', () => {
    let holiday = '';

    vacationer1 = '';
    vacationer2 = '';
    vacationer3 = '';
    beforeEach(() => {
        holiday = new HolidayPackage('Bulgaria', 'Summer');

        vacationer1 = 'Kolio Kolio';
        vacationer2 = 'Pecata Pecov';
        vacationer3 = 'Strahil Stahov';
    });


    describe('showVacationers method tests', () => {
        it('properly executed method', () => {
            holiday.addVacationer(vacationer1);
            holiday.addVacationer(vacationer2);

            expect(holiday.showVacationers()).to.be.equal(`Vacationers:\nKolio Kolio\nPecata Pecov`);
        });

        it('no vacationers added should return message', () => {
            expect(holiday.showVacationers()).to.be.equal(`No vacationers are added yet`);
        });
    });


    describe('addVacationer method tests', () => {
        it('tests with non string and emtpy string values', () => {
            expect(() => holiday.addVacationer(' ')).to.throw(Error, "Vacationer name must be a non-empty string");
            expect(() => holiday.addVacationer(2)).to.throw(Error, "Vacationer name must be a non-empty string");
        });

        it('Entered name but still not valid', () => {
            expect(() => holiday.addVacationer('Kolio')).to.throw(Error, "Name must consist of first name and last name");
            expect(() => holiday.addVacationer('Kolio Kol Kons')).to.throw(Error, "Name must consist of first name and last name");
        });
    });

    // describe('Insurance accessor test', () => {
    //     it('setter test', () => {
    //         expect(() => holiday.insuranceIncluded = 'asd').to.throw(Error, "Insurance status must be a boolean");
    //     });
    // });

    describe('generateHolidayPackage method tests', () => {
        it('properly executed method without insurance in expensive season', () => {
            holiday.addVacationer(vacationer1);
            holiday.addVacationer(vacationer2);
            holiday.addVacationer(vacationer3);

            expect(holiday.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Bulgaria\nVacationers:\n${vacationer1}\n${vacationer2}\n${vacationer3}\nPrice: 1400`);
        });

        it(`properly executed method with insurance in non expensive season`, () => {
            let holidayTest = new HolidayPackage('Bulgaria', 'Autumn');
            holidayTest.addVacationer(vacationer1);
            holidayTest.addVacationer(vacationer2);

            holidayTest.insuranceIncluded = true;
            expect(holidayTest.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Bulgaria\nVacationers:\n${vacationer1}\n${vacationer2}\nPrice: 900`);
        });


        it(`properly executed method with insurance in expensive season`, () => {
            let holidayTest = new HolidayPackage('Bulgaria', 'Winter');
            holidayTest.addVacationer(vacationer1);
            holidayTest.addVacationer(vacationer2);

            holidayTest.insuranceIncluded = true;
            expect(holidayTest.generateHolidayPackage()).to.be.equal(`Holiday Package Generated\nDestination: Bulgaria\nVacationers:\n${vacationer1}\n${vacationer2}\nPrice: 1100`);
        });
        it(`should throw an error for no vacationers`, () => {
            expect(() => holiday.generateHolidayPackage()).to.throw("There must be at least 1 vacationer added");
        });
    });
});