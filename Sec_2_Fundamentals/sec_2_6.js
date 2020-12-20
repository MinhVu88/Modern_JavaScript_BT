// 6 - VARIABLES (var, let & const)
// var
var name0 = 'John Doe';

console.log(name0);

// initialize var
var greeting;

console.log(greeting);

greeting = 'Hi there!';

console.log(greeting);

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

const person = {
		name: 'Liam',
		age: 27
} // an object literal

console.log(person);

person.name = 'Gary';

person.age = 30;

console.log(person);

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

numbers.push(7);

console.log(numbers);