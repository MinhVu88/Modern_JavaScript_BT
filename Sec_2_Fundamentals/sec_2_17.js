// 17 - FUNCTION DECLARATIONS & EXPRESSIONS
// * DECLARATIONS
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

// * EXPRESSIONS
const square0 = function(x) {return x * x;}; // a named variable is assigned an anonymous function

console.log(square0(9));

// default parameters
const square1 = function(x = 7) {return x * x;};

console.log(square1());

// * IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS (IIFEs) - declared & run at the same time 
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