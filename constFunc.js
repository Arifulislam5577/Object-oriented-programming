const Person = function (firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.laslastName = lastName;
  this.birthYear = birthYear;
};

// Constructor Functions and the new Operator

/*

---- New {} is created
---- Function called, this === {}
---- {} linked to prototype
---- function automatically return {}

*/

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Arif = new Person("Ariful", "Islam", 2000);
console.log(Arif);
Arif.calcAge();
