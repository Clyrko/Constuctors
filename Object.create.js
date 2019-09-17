const personPrototypes = {

  greeting: function() {

    return `Hello there ${this.firstName} ${this.lastName}`;

  }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
