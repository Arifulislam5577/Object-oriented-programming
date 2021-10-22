const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  props(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const Arif = Object.create(PersonProto);

Arif.props("Arif", 2002);

Arif.calcAge();

console.log(Arif.__proto__ === PersonProto);
