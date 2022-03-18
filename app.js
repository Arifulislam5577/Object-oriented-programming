// const User = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// User.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// const arif = new User("arif", 2000);

// const Car = function (made, speed) {
//   this.made = made;
//   this.speed = speed;
// };

// /*Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'made' and a 'speed' property. The 'speed' property is the current speed of the car in km/h

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀 */

// Car.prototype.accelerate = function () {
//   this.speed = this.speed += 10;
//   console.log(`${this.made} is going ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed -= 5;
//   console.log(`${this.made} is going ${this.speed} km/h`);
// };

// const BMW = new Car("BMW", 120);
// const Mercedes = new Car("Mercedes", 95);

// // class

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   birthYear() {
//     console.log(new Date().getFullYear() - this.age);
//   }
// }

// const jonas = new Student("jonas", 31);

// jonas.birthYear();

// // Object.create();

// const UserProto = {
//   birthYear() {
//     console.log(new Date().getFullYear() - this.age);
//   },
// };

// const steven = Object.create(UserProto);

// steven.name = "steven";
// steven.age = 30;

// // Coding Challenge No 2

class Car {
  constructor(made, speed) {
    this.made = made;
    this.speed = speed;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.made} is going ${this.speed}`);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.made} is going ${this.speed}`);
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    return `${this.speed * speed} mi/h`;
  }
}

const ford = new Car("Ford", 95);

ford.accelerate();
ford.break();

console.log(ford.speedUS);
ford.speedUS = 100;

console.log(ford);
