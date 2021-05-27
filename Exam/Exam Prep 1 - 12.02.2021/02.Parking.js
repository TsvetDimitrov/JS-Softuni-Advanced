class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }



    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error("Not enough parking space.");
        }
        this.vehicles.push({ carModel, carNumber, payed: false })
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        const carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);
        if (carIndex < 0) {
            throw new Error(`The car, you're looking for, is not found.`);
        }

        if (!this.vehicles[carIndex].payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.splice(carIndex, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber);

        if(!car){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if(car.payed){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if(!carNumber){
            return [`The Parking Lot has ${this.capacity} empty spots left.`, 
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
        .map(car => `${car.carModel} == ${car.carNumber} - ${car.payed ? `Has payed` : `Not payed`}`).join("\n") ].join('\n');
        }
        let car = this.vehicles.find(car => car.carNumber == carNumber);
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? `Has payed` : `Not payed`}`;
    }
}


//I am solving one problem couple times in the time before the exam. 
//Another test solution.

class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber){
        if(this.capacity === 0){
            throw new Error("Not enough parking space.");
        }
        let car = {carModel, carNumber, payed: false};
        this.capacity--;
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber){
        let car = this.vehicles.find((c) => c.carNumber === carNumber);
        if(car === undefined){
            throw new Error("The car, you're looking for, is not found.")
        }

        if(car.payed === false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        this.capacity++;
        let i = this.vehicles.indexOf(car);
        this.vehicles.splice(i, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber){
        let car = this.vehicles.find((c) => c.carNumber === carNumber);
        if(car === undefined){
            throw new Error(`${carNumber} is not in the parking lot.`);
        } 
        if(car.payed === true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if(carNumber){
            let car = this.vehicles.find((c) => c.carNumber === carNumber);

            return `${car.carModel} == ${car.carNumber} - ${car.payed === true? 'Has payed' : 'Not payed'}`;
        }
        let result = [`The Parking Lot has ${ this.capacity } empty spots left.`];
        this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel)).forEach((c) =>{
                result.push(`${c.carModel} == ${c.carNumber} - ${c.payed === true? 'Has payed' : 'Not payed'}`)
        });

        return result.join('\n');
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
