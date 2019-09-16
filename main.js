// Person constructor

function Person (name, dob) { //Contructors start with capitals

  this.name = name;// refers to the current instinct of the object
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

this.alert(1); // this in the global scope pertains to the global scope

const brad = new Person( 'Brad', 20);
const john = new Person('Frank', 32);

const brad = new Person( 'Brad', '9-20-1989');
