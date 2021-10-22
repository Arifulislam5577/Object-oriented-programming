const Person = function (firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.laslastName = lastName;
  this.birthYear = birthYear;
};

// Protptype

/*

---- Prototype is a Constructor Functions property
---- Person.prototype is not the prototype of person.it is prototype of Person Object.


*/

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

//Overwrite Contructor Methods
Person.prototype =  {
  toString: function () {
    console.log(`My Name is ${this.firstName} ${this.laslastName}`)
  }
}
const Arif = new Person("Ariful", "Islam", 2000);

Arif.toString();


