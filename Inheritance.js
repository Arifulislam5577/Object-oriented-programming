// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, study) {
//   Person.call(this, firstName, birthYear);
//   this.study = study;
// };

// const Arif = new Student("Arif", 2000, "CSE");

// Student.prototype.Intro = function () {
//   console.log(`My Name is ${this.firstName} and I am study at ${this.study}`);
// };

// Arif.Intro();

///==============Hm Nayeam Vai Lecture================

const Shape = function () {};

Shape.prototype.common = function () {
  console.log("I AM FROM COMMON METHOD");
};

const Student = function (name) {
  this.name = name;
};

Student.prototype = Object.create(Shape.prototype);

const s1 = new Student("Arif");

s1.common();
