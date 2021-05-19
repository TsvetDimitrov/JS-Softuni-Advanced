class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar( carModel, carNumber ){
        if(this.capacity === 0){
            throw new Error("Not enough parking space.");
        }

        let obj = {carModel, carNumber, payed: false};
        this.vehicles.push(obj);
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar( carNumber ) {
        let car = this.vehicles.find((c) => c.carNumber == carNumber)
        if(car === undefined){
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if(!car.payed){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        let index = 0;

        for(let i = 0; i < this.vehicles.length; i++){
            if(this.vehicles[i].carNumber === carNumber){
                index = i;
                break;
            }
        }
        this.capacity++;
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay( carNumber ) {
        let car = this.vehicles.find((c) => c.carNumber == carNumber);
        if(car === undefined){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if(car.payed == true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        let result = [`The Parking Lot has ${ this.capacity } empty spots left.`, ];
        if(!carNumber){
            
            this.vehicles.sort((a, b)=> a.carModel.localeCompare(b.carModel)).forEach((c) => {
                result.push(`${c.carModel} == ${c.carNumber} - ${c.payed == true ? `Has payed` : `Not payed`}`);
            });
        }else{
            let car = this.vehicles.find((c)=> c.carNumber == carNumber);
            return `${car.carModel} == ${car.carNumber} - ${car.payed == true ? `Has payed` : `Not payed`}`;
        }


        return result.join('\n');
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
