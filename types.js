// variable declarations

var name = 'arvind'; // when we declare var we can access it from any where, it can be reassigned
const name1 = 'arvind 2'; // can't be reassigned
let name2 = 'arvind 2'// block scope, can be reassigned


const userName = 'ARVIND_1234';

function printer() {
  let age = 29;
  console.log(userName, age);
}

printer();

/**
 * js defines seven build-in types
 * null
 * undefined
 * boolean
 * number
 * string
 * object
 * symbol - added in ES6
 */

// typeof -> return the type of variable or value
console.log(typeof 54 === 'number'); // number
console.log(typeof 'hello' === 'string'); // string
console.log(typeof { name: 'arvind' } === 'object'); // object
console.log(typeof true === 'boolean'); // boolean
console.log(typeof Symbol() === 'symbol');

let age = 29;
if (typeof age === 'number') {
  console.log('age is number');
}

console.log(!isNaN(age));

let active = true;

if (active) {
  console.log('user is active');
};

let undefinedValue;

console.log(undefinedValue);

/**
 * variable declare
 * 1. var -> old 
 * 2. let -> can be changed or reassigned
 * 3. const -> can't be change once assigned
 */

var a; // without assignment it's undefined
console.log('printing type of var a', typeof a); // undefined
console.log('printing type of var b', typeof b); // undefined

var nullValue = null; // falsy value
console.log('printing type of var nullValue', typeof nullValue); // object
console.log(nullValue); // null
console.log(!nullValue); // true