class Vacationer {
    constructor(fullName, creditCard = [1111, "", 111]) {
        this.fullName = fullName

        this.idNumber = this.generateIDNumber();


        if (Object.values(creditCard).length < 3) {
            throw new Error("Missing credit card information");
        }

        if (typeof creditCard[0] != 'number' || typeof creditCard[2] != 'number') {
            throw new Error("Missing credit card information");
        }


        this.creditCard = { cardNumber: creditCard[0], expirationDate: creditCard[1], securityNumber: creditCard[2] };
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {

        if (value.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }

        let regex = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/g;
        if (!regex.test(value.join(' '))) {
            throw new Error("Invalid full name");
        }

        return this._fullName = { firstName: value[0], middleName: value[1], lastName: value[2] };
    }

    generateIDNumber() {
        let generatedId = 231 * Number(this.fullName.firstName.charCodeAt(0)) + 139 * Number(this.fullName.middleName.length);

        if (this.fullName.lastName.endsWith('a') || this.fullName.lastName.endsWith('e') || this.fullName.lastName.endsWith('o')
            || this.fullName.lastName.endsWith('i') || this.fullName.lastName.endsWith('u')) {
            generatedId += '8';
        } else {
            generatedId += '7';
        }

        return generatedId;
    }

    addCreditCardInfo(input) {
        if (input.length < 3) {
            throw new Error("Missing credit card information");
        }

        if (typeof input[0] != 'number' || typeof input[2] != 'number') {
            throw new Error("Missing credit card information");
        }

        this.creditCard = { cardNumber: input[0], expirationDate: input[1], securityNumber: input[2] };
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error(`Destination already exists in wishlist`);
        }

        this.wishList.push(destination);

        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        let result = [`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`,
        `ID Number: ${this.idNumber}`, `Wishlist:`];

        if (this.wishList.length == 0) {
            result.push('empty');
        } else {
            result.push(`${this.wishList.join(', ')}`);
        }
        result.push(`Credit Card:`);
        result.push(`Card Number: ${this.creditCard.cardNumber}`);
        result.push(`Expiration Date: ${this.creditCard.expirationDate}`);
        result.push(`Security Number: ${this.creditCard.securityNumber}`);

        return result.join('\n');
    }
}



// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
