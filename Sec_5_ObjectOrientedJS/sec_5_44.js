// built-in constructors
// strings
const name0 = 'Jeff Skilling';

const name1 = new String(name0);

console.log('name0: ' + name0);

name1.age = 40;

console.log(name1)

if (name0 === name1) {
    console.log('Both are primitive type string');
} else {
    console.log('name0: ' + typeof name0 + ' & name1: ' + typeof name1);
}

// numbers
const num0 = 7;

const num1 = new Number(num0);

if (num0 === num1) {
    console.log('Both are primitive type number');
} else {
    console.log('num0: ' + typeof num0 + ' & num1: ' + typeof num1);
}

// boolean
const bool0 = true;

const bool1 = new Boolean(bool0);

if (bool0 === bool1) {
    console.log('Both are primitive type boolean');
} else {
    console.log('bool0: ' + typeof bool0 + ' & bool1: ' + typeof bool1);
}

// function
const sum1 = function(x, y) {return x + y;}

const sum2 = new Function('x', 'y', 'return x + y');

console.log(sum2(3, 4));

// object
const user0 = {name: 'John Doe'};

const user1 = new Object({name: 'Jane Doe'});

console.log(typeof user0 + ' & ' + typeof user1);

// arrays
const numbers0 = [1,2,3,4,5];

const numbers1 = new Array(5,6,7,8,9);

if (typeof numbers0 === typeof numbers1) {
    console.log('Both numbers0 & numbers1 are arrays');
} else {
    console.log(typeof numbers0 + ' & ' + typeof numbers1);
}

// regular expressions
const regX0 = /\w+/;

const regX1 = new RegExp('\\w+');

if (typeof regX0 === typeof regX1) {
    console.log(regX0 + ' === ' + regX1);
} else {
    console.log(regX0 + ' =/= ' + regX1);
}