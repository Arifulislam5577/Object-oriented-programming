class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(
      `${this.firstName} ${this.lastName} is ${
        new Date().getFullYear() - this.birthYear
      } old`
    );
  }
}



const Jack = new Person("Jack", "Davis", 1998);

Jack.calcAge();

