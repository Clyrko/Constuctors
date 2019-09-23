class Person {

  constructor(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

  }

  greeting() {

    return `Hello there ${this.firstName} ${this.lastName}`;

  }
}

// Customer is an extention of Person

class Customer extends Person {

  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // calls the parent class constructor

    this.phone = phone;
    this.membership = membership;

  }

  static getMembershipCost() {

    return 500;

  }
}

const john = new Customer('John', 'Smith', '614-333-3333', 'standard');

console.log(john.greeting()); // able to use anything in the class we extended

console.log(Customer.getMembershipCost()); // only works one way
