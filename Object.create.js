const personPrototypes = {

  greeting: function() {

    return `Hello there ${this.firstName} ${this.lastName}`;

  }

  getsMarried: function(newLastName) {
    this.lastName = newLastName; // updating the last name object
    }
  }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {

  firstName: {value: 'Brad'},
  lastName: {value: 'Smith'},
  age: {value: 22}
});
