const Person = function (firstName, lastName, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
};

Person.prototype.calcAge = function () {
  console.log(
    `My Name is ${this.firstName} ${this.lastName} and I am ${
      new Date().getFullYear() - this.birthday
    } years old`
  );
};
