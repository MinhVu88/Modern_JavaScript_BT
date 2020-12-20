// 5 - LOG TO CONSOLE
console.log('Hello World');

console.log(123);

console.log(true);

var greeting = 'Hi there!';

console.log(greeting);

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