// Strings

const name1 = 'Jeff';
const name2 = new String('Jeff');

name2.foo = 'bar';

console.log(typeof name1); // string
console.log(typeof name2); // object

if(name1 === 'Jeff'){
  console.log('Yes');
} else {
  console.log('No');
}

// Number

const num1 = 5;
const num2 = new Number(5);

// Boolean

const boo1 = true;
const boo2 = new Boolean(true);

// Functions

const getSum1 = function (x, y){
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum1(1,1));

// Objects

const john = {
  name: 'John'
};

const john2 = new Object({name: 'John'});

// Arrays

const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// Regular Expressions

const re1 = /\w+/;
const re2 = new RegExp('\w+');
