class Person{
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    fullName() {
        console.log(`Mr. ${this.firstName} ${this.lastName}`)
    }
    calcAge() {
        console.log(`Mr. ${this.firstName} ${this.lastName}, You are ${new Date().getFullYear()- this.birthYear} years old.`);
    }
}



// CLASSES

/*
---- 01. classes are not hoisted.
---- 02. classes are first class citizes.
---- 03. classes are executed in strict mode.
---- 04. 
*/




const Arif = new Person('Ariful', 'Islam', 1999);

Arif.fullName();
Arif.calcAge();