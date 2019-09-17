// Person constructor

function Person(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

}

// Greeting

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor

function customer(firstName, lastName, phoneNumber, membership) {

  Person.call(this, firstName, lastName); // function to call another function in the same context

  this.phoneNumber = phoneNumber;
  this.membership = membership;

}

// Inherit the Person prototype methods

Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()

Customer.prototype.constructor = Customer;

// Create customer

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);
