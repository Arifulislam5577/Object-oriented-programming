const Car = function (made, speed) {
  this.made = made;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.made} is going ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.made} is going ${this.speed}`);
};

const EV = function (made, speed, charge) {
  Car.call(this, made, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.charge -= 1;
  this.speed += 20;
  console.log(
    `${this.made} is going ${this.speed} km/h and charge is ${this.charge}`
  );
};
const tesla = new EV("Tesla", 120, 20);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
