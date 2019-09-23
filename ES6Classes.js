class Person {

  constructor(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {

    const diff = Date.now() = this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abd(ageDate.getUTCFullYear() - 1970);
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1989');

console.log(mary);
