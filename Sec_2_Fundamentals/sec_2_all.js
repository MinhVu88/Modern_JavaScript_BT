// 5 - LOG TO CONSOLE
console.log('Hello World');

console.log(123);

console.log(true);

var greeting0 = 'Hi there!';

console.log(greeting0);

console.log([1, 2, 3, 4, 5, 6, 7]); // log an array to the console

console.log({a:1, b:2, c:3}); // log object literals to the console

console.table({a:1, b:2, c:3}); // log object literals in a table form to the console

console.error('something is wrong'); // log error messages to the console

console.warn('some warning');

console.clear();

// the duration that something takes to run in the browser
console.time('season1');
	console.log('pilot');
	console.log('cat is in the bag');
	console.log('and the bag is in the river');
	console.log('cancer man');
	console.log('gray matter');
	console.log('crazy handful of nothing');
	console.log('A No-Rough-Stuff-Type Deal');
console.timeEnd('season1');

console.clear();

// 6 - VARIABLES (var, let & const)
// var
var name0 = 'John Doe';

console.log(name0);

// initialize var
var greeting1;

console.log(greeting1);

greeting1 = 'Hi there!';

console.log(greeting1);

// let
let name1;

console.log(name1);

name1 = 'Jane Doe';

console.log(name1);

name1 = 'Stevie Vaughan';

console.log(name1);

// const
const name2 = 'Nikola Tesla';

console.log(name2);

//name2 = 'Thomas Edison'; // const can't be reassigned another value

console.log(name2);

//const name3; // const must be initialized

const person0 = {
		name: 'Liam',
		age: 27
} // an object literal

console.log(person0);

person0.name = 'Gary';

person0.age = 30;

console.log(person0);

const numbers0 = [1, 2, 3, 4, 5, 6];

console.log(numbers0);

numbers0.push(7);

console.log(numbers0);

console.clear();

// 7 - DATA TYPES
// the 6 primitive types
const vocalist = 'Maynard Keenan'; // string

console.log(typeof vocalist);

const age0 = 55; // number

console.log(typeof age0);

const isTalented = true; // boolean

console.log(typeof isTalented);

const isIrrelevant = null; // null

console.log(typeof isIrrelevant);

let fourthToolAlbum;

console.log(typeof fourthToolAlbum);

const thirdEye = Symbol();

console.log(typeof thirdEye);

// reference types -> objects
const instruments = ['guitar', 'piano', 'violin', 'drum', 'bass']; // array

console.log(typeof instruments);

const guitarist = {
	name: 'Adam Jones',
	age: 54
} // object literal

console.log(typeof guitarist);

const birthday0 = new Date(); // date

console.log(birthday0);

console.log(typeof birthday0);

console.clear();

// 8 - TYPE CONVERSION
// Number -> String
let value0 = 369;

console.log(value0 + ' -> type: ' + typeof value0 + ' & length: ' + value0.length);

value0 = String(value0);

console.log(value0 + ' -> type: ' + typeof value0 + ' & length: ' + value0.length);

let value1 = 4 + 3;

console.log(value1 + ' -> type: ' + typeof value1 + ' & length: ' + value1.length);

value1 = String(value1);

console.log(value1 + ' -> type: ' + typeof value1 + ' & length: ' + value1.length);

// Boolean -> String
let bool0 = false;

console.log(bool0 + ' -> type: ' + typeof bool0 + ' & length: ' + bool0.length);

bool0 = String(bool0);

console.log(bool0 + ' -> type: ' + typeof bool0 + ' & length: ' + bool0.length);

// Date (object) -> String
let date = new Date();

console.log(date + ' -> type: ' + typeof date + ' & length: ' + date.length);

date = String(date);

console.log(date + ' -> type: ' + typeof date + ' & length: ' + date.length);

// array (object) -> String
let values0 = [1,2,3,4,5];

console.log(values0 + ' -> type: ' + typeof values0 + ' & length: ' + values0.length);

values0 = String(values0);

console.log(values0 + ' -> type: ' + typeof values0 + ' & length: ' + values0.length);

// the toString() method: turn any data type to String
let value2 = 51;

console.log(value2 + ' -> type: ' + typeof value2 + ' & length: ' + value2.length);

value2 = (value2).toString();

console.log(value2 + ' -> type: ' + typeof value2 + ' & length: ' + value2.length);

// String -> Number
let value3 = '23';

console.log(value3 + ' -> type: ' + typeof value3 + ' & length: ' + value3.length);

value3 = Number(value3);

console.log(value3.toFixed(1) + ' -> type: ' + typeof value3 + ' & length: ' + value3.length); // toFixed(): the number of values behind the decimal point

// Boolean -> Number
let bool1 = false;

console.log(bool1 + ' -> type: ' + typeof bool1 + ' & length: ' + bool1.length);

bool1 = Number(bool1);

console.log(bool1 + ' -> type: ' + typeof bool1 + ' & length: ' + bool1.length);

// null -> Number
let nullVal = null;

console.log(nullVal + ' -> type: ' + typeof nullVal);

nullVal = Number(nullVal);

console.log(nullVal + ' -> type: ' + typeof nullVal + ' & length: ' + nullVal.length);

// NaN (not a number)
let nan = 'not a number';

console.log(nan + ' -> type: ' + typeof nan + ' & length: ' + nan.length);

nan = Number(nan);

console.log(nan + ' -> type: ' + typeof nan + ' & length: ' + nan.length);

// array (object) -> Number
let values1 = [6,7,8,9,10];

console.log(values1 + ' -> type: ' + typeof values1 + ' & length: ' + values1.length);

values1 = Number(values1);

console.log(values1 + ' -> type: ' + typeof values1 + ' & length: ' + values1.length);

// the parseInt() method: turn any data type to Number (integer)
let value4 = '23';

console.log(value4 + ' -> type: ' + typeof value4 + ' & length: ' + value4.length);

value4 = parseInt(value4);

console.log(value4 + ' -> type: ' + typeof value4 + ' & length: ' + value4.length);

// the parseFloat() method: turn any data type to Number (float)
let value5 = '23.74';

console.log(value5 + ' -> type: ' + typeof value5 + ' & length: ' + value5.length);

value5 = parseFloat(value5);

console.log(value5.toFixed(1) + ' -> type: ' + typeof value5 + ' & length: ' + value5.length);

// TYPE COERCION: String + Int -> js itself turns String to Int or vice versa automatically & produces result accordingly
const value6 = 29;

const value7 = 12;

const sum0 = value6 + value7;

console.log(value6 + ' + ' + value7 + ' = ' + sum0 + ' & type of sum: ' + typeof sum0);

const value8 = String(value7);

const sum1 = value6 + value8;

console.log(value6 + ' + ' + value8 + ' = ' + sum1 + ' & type of sum: ' + typeof sum1);

console.clear();

// 9 - NUMBERS & THE MATH OBJECT
const num1 = 69;

const num2 = 21;

console.log(num1  + ' + ' + num2 + ' = ' + (num1 + num2));

console.log(num1  + ' - ' + num2 + ' = ' + (num1 - num2));

console.log(num1  + ' * ' + num2 + ' = ' + (num1 * num2));

console.log(num1  + ' / ' + num2 + ' = ' + (num1 / num2));

console.log(num1  + ' % ' + num2 + ' = ' + (num1 % num2));

console.log('Math.PI = ' + Math.PI + ' & Math.E = ' + Math.E);

console.log('2.5 rounded to ' + Math.round(2.5) + ' & 2.4 rounded to ' + Math.round(2.4));

console.log('2.5 rounded down to ' + Math.floor(2.5) + ' & 2.4 rounded up to ' + Math.ceil(2.4));

console.log('square root of 9 = ' + Math.sqrt(9));

console.log('the absolute version of -3 = ' + Math.abs(-3));

console.log('Math.pow(3, 2) = ' + Math.pow(3, 2));

console.log('the min value in (7, 88, -23, 69, 369): ' + Math.min(7, 88, -23, 69, 369) + ' & max: ' + Math.max(7, 88, -23, 69, 369));

console.log('a random decimal: ' + Math.random());

console.log('a random whole number (int) between 1 & 10: ' + Math.floor(Math.random() * 10 + 1));

console.clear();

// 10 - STRING METHODS & CONCATENATION
const firstName0 = 'Maynard';

const lastName0 = 'Keenan';

console.log('the vocalist: ' + firstName0 + ' ' + lastName0); // concatenation

let greeting2 = 'Hi, my name\'s ';

greeting2 += firstName0 + ' ' + lastName0; // appending strings

console.log(greeting2);

let escaping0 = "this's 1 way to escape any single quotes in a string by wrapping the whole string in a double quote";

console.log(escaping0);

let escape1 = 'this\'s another way using a backslash in place of a single quote without wrapping the whole string in double quote';

console.log(escape1);

const fullName0 = firstName0 + ' James ' + lastName0;

console.log('the length of ' + fullName0 + ': ' + fullName0.length); // length is a variable's property/data, not its function/method, hence no parentheses after it

const firstName1 = 'Adam';

const lastName1 = 'Jones'

const fullName1 = firstName1.concat(' ', lastName1); // concat()

console.log('the guitarist: ' + fullName1);

console.log('upper-case: ' + fullName0.toUpperCase() + ' & back to lower-case: ' + fullName0.toLowerCase());

console.log('the initial of Maynard: ' + firstName0[0]); // access a certain element in the string by specifying its index

console.log("the index of the 1st 'a' in Maynard: " + firstName0.indexOf('a'));

console.log("the index of the last 'a' in Maynard: " + firstName0.lastIndexOf('a'));

console.log("the index #2 in Maynard: " + firstName0.charAt(2));

console.log('the last character in Maynard: ' + firstName0.charAt(firstName0.length - 1));

console.log('the 1st 3 characters in Maynard: ' + firstName0.substring(0, 3));

console.log('the last 3 characters in Maynard: ' + firstName0.slice(-3));

const tool = 'Maynard is the vocalist & Adam is the guitarist';

let toolArray = tool.split(' '); // split() turns a string into an array based on the pattern specified in the parentheses

console.log(toolArray);

const aboutTool = 'music,prog metal,spirituality,odd time signatures,metaphysics';

console.log(aboutTool.split(','));

console.log(greeting2.replace('Hi', 'Hello there')); // replace() replaces a specific sub-string with another string

console.log("does Maynard contain the sub-string 'na'? -> " + firstName0.includes('na')); // includes() returns a boolean value, used to test if there's something particular in a string

console.log("does Keenan contain the sub-string 'ay'? - > " + lastName0.includes('ay'));

console.clear();

// 11 - TEMPLATE LITERALS/STRINGS
const name3 = 'Justin Chancellor';

const age1 = 48;

const job = 'musician';

const city = 'London';

// without template strings (es5)
let html0 = '<ul>' + 
			'<li>Name: ' + name3 + '</li>' + 
			'<li>Age: ' + age1 + '</li>' +
			'<li>job: ' + job + '</li>' +
			'<li>city: ' + city + '</li>' +
			'</ul>';

document.body.innerHTML = html0;

// with template strings (es6)

function hello() {return 'Hi there!';}
/*
html0 = `
	<ul>
		<li>Name: ${name3}</li>
		<li>Age: ${age1}</li>
		<li>Job: ${job}</li>
		<li>City: ${city}</li>
		<li>${3 + 4}</li>
		<li>${hello()}</li>
		<li>${age1 > 30 ? 'Over 30' : 'Under 30'}</li>
	</ul>
`;

document.body.innerHTML = html0;
*/

console.clear();

// 12 - ARRAYS & ARRAY METHODS
const numbers1 = [1,2,3,4,5];

const numbers2 = new Array(6,7,8,9,10);

const fruit = ['orange', 'apple', 'mango', 'durian', 'banana'];

const mixed = [true, new Date(), null, undefined, {a:1, b:1}, 'variety', 23];

console.log('the mixed array\'s length: ' + mixed.length);

// isArray() returns true if an array is in the round brackets & false if no array is found
console.log('is fruit an array? -> ' + Array.isArray(fruit)); 

console.log('the 3rd & 4th elements in numbers2: ' + numbers2[2] + ' & ' + numbers2[3]);

console.log(fruit);

fruit[2] = 'watermelon'; // change an element's value in numbers1

console.log(fruit);

// indexOf() shows the index of an array's element
console.log("the index of element 'undefined' in mixed: " + mixed.indexOf(undefined)); 

console.log(numbers1);

numbers1.push(5.5); // push() appends an element to an array

console.log(numbers1);

console.log(numbers2);

numbers2.unshift(5.5); // unshift() adds an element to the front of an array

console.log(numbers2);

numbers1.pop(); // pop() removes the last element in an array

console.log(numbers1);

numbers2.shift(); // shift() removes the 1st element in an array

console.log(numbers2);

console.log('concatenate arrays: ' + numbers1.concat(numbers2));

console.log('splice() takes out & displays 1 or more elements in an array: ' + 
			mixed.splice(1, 1) + ' | ' + fruit.splice(1, 3) + ' | ' + numbers2.splice(2, 3));

console.log('reverse an array: ' + numbers1.reverse());

const favBrands = ['Tool', 'Radiohead', 'Soundgarden', 'Deftones', 'Alice in Chains', 'Nirvana'];

const numbers3 = [51,23,88,69,47,14];

console.log(favBrands);

console.log(numbers3);

console.log('sort an array alphabetical or in an ascending order: ' + favBrands.sort()  + ' | ' + numbers3.sort());

const numbers4 = [32,96,41,74,15];

console.log(numbers4);

console.log("use the 'compare function' to sort an array in an ascending order: " + numbers4.sort(function(x, y) {return x - y;}));

console.log("use the 'compare function' to sort an array in a descending order: " + numbers4.sort(function(x, y) {return y - x;}));

const numbers5 = [56,84,21,64,7,39,48,11,72];

function under50(number) {return number < 50;} // return the 1st element in an array whose value is under 50

function over50(number) {return number > 50;} // return the 1st element in an array whose value is under 50

console.log("use find(), which takes in another testing function to find an array's element," +
			" based on the testing function's condition -> Under 50: " + 
			numbers5.find(under50) + ' | Over 50: ' + numbers5.find(over50));

console.clear();

// 13 - OBJECT LITERALS
const person1 = {
		firstName: 'Danny',
		
		lastName: 'Carey',
		
		age: 59,
		
		hobbies: ['drumming', 'occult practices', 'metaphysics', 'sacred geometry'] /*array*/,
		
		address: {
			city: 'Lawrence',
			state: 'Kansas'
		} /*a nested object*/,
		
		getBirthYear: function() {return 2019 - this.age;} // a function
}

console.log(person1);

console.log(person1.firstName + ' ' + person1.lastName + ', ' + person1.age + ' years old');

console.log(person1['firstName'] + ' ' + person1['lastName'] + ', ' + person1['age'] + ' years old');

console.log(person1.hobbies);

console.log(person1.hobbies[2]);

console.log(person1.address);

console.log(person1.address.city);

console.log(person1.address['state']);

console.log(person1.getBirthYear());

// an array of objects
const radiohead = [
	{name: 'Thom Yorke', age: 45},
	
	{name: 'Jonny Greenwood', age: 46},
	
	{name: 'colin Greenwood', age: 41},
	
	{name: 'Ed Obrien', age: 43},
	
	{name: 'Philip Selway', age: 44}
];

for(let i = 0; i < radiohead.length; i++) {console.log(radiohead[i].name);}

console.clear();

// 14 - DATE & TIME
const today = new Date();

console.log('Today: ' + today + ' | ' + typeof today);

let birthday1 = new Date('09-29-1988 17:30:00');

console.log('date format 1 (mm-dd-yyyy): ' + birthday1);

birthday1 = new Date('September 29 1988');

console.log('date format 2 (month date year): ' + birthday1);

birthday1 = new Date('09/29/1988');

console.log('date format 3 (mm/dd/yyyy): ' + birthday1);

// month is zero-based in js, just like zero-based indices in arrays
console.log('The current month (zero-based): ' + today.getMonth() + ' + 1'); 

console.log('The current date: ' + today.getDate());

console.log('The current day of the week (Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6): ' + today.getDay());

console.log('The full year: ' + today.getFullYear());

console.log('Time: ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds());

console.log('The current timestamp: ' + today.getTime());

birthday1.setMonth(6);

birthday1.setDate(2);

birthday1.setFullYear(2019);

birthday1.setHours(9);

birthday1.setMinutes(30);

birthday1.setSeconds(25);

console.log('Birthday: ' + birthday1);

console.clear();

// 15 - IF STATEMENTS & COMPARISON OPERATORS
const id0 = 23;

// == (values only, not types)
if (id0 == 23) {
	console.log('23 == 23 -> Correct');
} else {
	console.log('Incorrect');
}

if (id0 != 23) {
	console.log('Correct');
} else {
	console.log('23 != 23 -> Incorrect');
}

const id1 = '51';

if (id1 == 51) {
	console.log("'51' == 51 -> Correct");
} else {
	console.log('Incorrect');
}

if (id1 != 51) {
	console.log('Correct');
} else {
	console.log("'51' != 51 -> Incorrect");
}

// === (both values & types)
const id2 = 7;

if (id2 === 7) {
	console.log('7 === 7 -> Correct');
} else {
	console.log('Incorrect');
}

const id3 = '7';

if (id3 === 7) {
	console.log('Correct');
} else {
	console.log("'7' === 7 -> Incorrect");
}

if (id3 !== 7) {
	console.log("'7' !== 7 -> Correct");
} else {
	console.log('Incorrect');
}

// test to see if a variable is undefined
let id4;

if (typeof id4 !== 'undefined') {
	console.log(`The id is ${id4}`);
} else {
	console.log('Non-existent id');
}

// greater than or less than or equal to
if (id3 > 7) {
	console.log('Correct');
} else {
	console.log('Incorrect');
}

if (id3 >= 7) {
	console.log('Correct');
} else {
	console.log('Incorrect');
}

const color0 = 'black';

if (color0 === 'red') {
	console.log('red');
} else if(color0 === 'yellow') {
	console.log('yellow');
} else {
	console.log("It's neither red nor yellow");
}

// logical operators
const name4 = 'Luke';

const age2 = 15;

// AND && (true && true -> true | false && false -> false | true && false -> false)
if (age2 >= 0 && age2 <= 12) {
	console.log(`${name4} is a child`);
} else if(age2 >= 13 && age2 <= 19) {
	console.log(`${name4} is a teenager`);
} else {
	console.log(`${name4} is an adult`);
}

// OR || (true || true -> true | false || false -> false | true || false -> true)
const name5 = 'Kate';

const age3 = 73;

if (age3 < 10 || age3 > 80) {
	console.log(`${name5} can't lift weight anymore`);
} else {
	console.log(`It's ok, let ${name5} try`);
}

// ternary operator (if/else)
console.log(age3 >= 70 ? 'CORRECT' : 'INCORRECT');

console.clear();

// 16 - SWITCH
switch (new Date().getDay()) {
	case 0:
		day = 'Sunday';
		break;
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
		break;
	default:
		day = 'Groundhog Day';
		break;
}

console.log(`Today is ${day}`);

console.clear();

// 17 - FUNCTION DECLARATIONS & EXPRESSIONS
// DECLARATIONS
function greet0() {console.log('Hi there!');} // declare a function

greet0(); // call a function

function greet1() {return 'How are you today?';} // the function returns some value

console.log(greet1());

// declare a function with its parameters 
function greet2(firstName2, lastName2) {return 'Hello, ' + firstName2 + ' ' + lastName2;}

console.log(greet2('Nikola', 'Tesla')); // call greet2() & pass in the appropriate arguments

// default parameters (before es6)
function greet3(firstName3, lastName3) {
	if (typeof firstName3 == 'undefined') {firstName3 = 'Richard';}

	if (typeof lastName3 == 'undefined') {lastName3 = 'Feynman';}

	return 'Hey ' + firstName3 + ' ' + lastName3;
}

console.log(greet3());

console.log(greet3('Julius', 'Oppenheimer')); // overwrite the default params with user-defined arguments

// default parameters (es6 onwards)
function greet4(firstName4 = 'Michael', lastName4 = 'Faraday') {return 'Eyyo ' + firstName4 + ' ' + lastName4}

console.log(greet4());

console.log(greet4('Niels', 'Bohr'));

// EXPRESSIONS
const square0 = function(x) {return x * x;}; // a named variable is assigned an anonymous function

console.log(square0(9));

// default parameters
const square1 = function(x = 7) {return x * x;};

console.log(square1());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS (IIFEs) - declared & run at the same time 
(function() {console.log('IIFE ran');})();

// with parameter(s)
(function(name6) {console.log('Hello ' + name6);})('Tim Berners-Lee');

// PROPERTY METHODS (when a function is put inside an object, it's called a method)
const todo = {
	add: function() {console.log('Getting to know JavaScript fundamentals');},

	edit: function(section) {console.log(`Moving on to section ${section}: DOM manipulation`);}
}

todo.add();

todo.edit(3);

// another way to define a function for an object
todo.delete = function() {console.log('Deleting todo....')}

todo.delete();

console.clear();

// 18 - GENERAL LOOPS
// for loop
for (let i = 0; i < 10; i++) {
	if (i === 3) {
		console.log(i + ' is my fav number');

		continue;
	}

	if (i === 7) {
		console.log(i + ' -> Stop the for loop');

		break;
	}
	
	console.log(i);
}

// while loop
let val0 = 0;

while (val0 <= 5) {
	console.log(val0);

	val0++;
}

// do-while loop
let val1 = 27;

do {
	console.log('val1: ' + val1);

	val1++;
} while (val1 < 10);

// loop thru arrays
const cars0 = ['Ford Motor', 'Volkswagen', 'Chevrolet', 'Bentley', 'Fiat Automobiles'];

for (let i = 0; i < cars0.length; i++) {console.log('f: ' + cars0[i]);} // a for loop

cars0.forEach(function(car, index, array) {
	
	console.log(`${index}: ${car}`);

	console.log(array);
}); // a foreach loop (recommended)

/**
 * The map() method creates a new array with the results of calling a function for every array element

 * It calls the provided function once for each element in an array, in order

 * It neither executes the function for array elements without values nor changes the original array
 */
const users0 = [
	{id: 1, name: 'Maynard'},
	{id: 2, name: 'Adam'},
	{id: 3, name: 'Justin'},
	{id: 4, name: 'Danny'}
]; // an array of objects, each of which contains a key-value pair (id & name)

// ids_0 is an array that contains the ids specified in users0
const ids_0 = users0.map(function(user) {return user.id;}); 

console.log(ids_0);

// for-in loop (usually used with objects)
const user0 = {
	firstName5: 'Luke',

	lastName5: 'Kemp',

	age4: 25
}

for(let x in user0) {console.log(`${x}: ${user0[x]}`);} // for-in loops thru the object's key-value pairs

console.clear();

// 19 - THE WINDOW OBJECTS, METHODS & PROPERTIES
// THE WINDOW OBJECTS (including location, history & navigator objects)
/*
window.console.log("No need to type 'window' as we're at the top of the Window object");

// alert
window.alert('Hello World');

// prompt
const input = prompt();

alert(input);

// confirm
if (confirm('Are you sure?')) {
	console.log('Yes');
} else {
	console.log('No');
}
*/

// outer height & width
console.log('The outer height: ' + window.outerHeight + ' & outer width: ' + window.outerWidth);

// inner height & width
console.log('The outer height: ' + window.innerHeight + ' & outer width: ' + window.innerWidth);

console.log('Scroll point(s): ' + window.scrollX + ' & ' + window.scrollY);

// LOCATION OBJECT
console.log(window.location);

console.log('hostname: ' + window.location.hostname);

console.log('port: ' + window.location.port);

console.log('href: ' + window.location.href);

console.log('The search parameter: ' + window.location.search);

/*
// redirect
window.location.href = 'https://en.wikipedia.org/wiki/Cicada_3301';

// reload the page
window.location.reload();
*/

// HISTORY OBJECT
//window.history.go(-1);

console.log("The browsing history's length: " + window.history.length);

// NAVIGATOR OBJECT (associated with the browser itself, not the window or the environment)
console.log(window.navigator);

console.log('Navigator appName: ' + window.navigator.appName);

console.log('Navigator appVersion: ' + window.navigator.appVersion);

console.log('Navigator userAgent: ' + window.navigator.userAgent);

console.log('Navigator platform: ' + window.navigator.platform);

console.log('Navigator vendor: ' + window.navigator.vendor);

console.log('Navigator language: ' + window.navigator.language);

console.clear();

// 20 - BLOCK SCOPE WITH LET & CONST
// global scope
var a = 1;

let b = 2;

const c = 3;

console.log('Global scope: ' + a + ', ' + b + ', ' + c);

// function scope: var
function test() {
	var a = 4;

	let b = 5;

	const c = 6;

	console.log('Function scope: ' + a + ', ' + b + ', ' + c);
}

test();

// block scope (anything that's wrapped in curly braces): let & const
if (true) {
	var a = 7;

	let b = 8;

	const c = 9;

	console.log('If/block scope: ' + a + ', ' + b + ', ' + c);
}

console.log('Global scope: ' + a + ', ' + b + ', ' + c);

for (var a = 0; a < 5; a++) {console.log(`Loop: ${a}`);}

console.log('Global scope: ' + a + ', ' + b + ', ' + c);