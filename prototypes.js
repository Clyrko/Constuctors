// Object.prototype
// Person.prototype

// Person contructor

function Person (firstName, lastName, dob) {

  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// Calculate ageDate

Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person ('John', 'Smith', 9-18-1998);
const mary = new Person ('Mary', 'Jones', March 20 1908);
