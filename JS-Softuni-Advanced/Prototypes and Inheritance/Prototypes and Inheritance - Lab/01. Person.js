// Write a JS program which takes first & last names as parameters and returns an object with firstName, 
// lastName and fullName ( "{firstName} {lastName}" ) properties which should be all accessible, 
// we discovered that "accessible" also means "mutable". This means that:
// •	If firstName or lastName have changed, then fullName should also be changed.
// •	If fullName is changed, then firstName and lastName should also be changed.
// •	If fullName is invalid, you should not change the other properties. A valid full name is in the format

// "{firstName} {lastName}"


class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }


    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }


    set fullName(value){
        const tokens = value.split(" ");
        this.firstName = tokens[0];
        this.lastName = tokens[1];
    }
}

const myPerson = new Person('Merry', 'Sue');
console.log(myPerson.fullName);



myPerson.fullName = 'Merry Johnson';
console.log(myPerson.fullName);