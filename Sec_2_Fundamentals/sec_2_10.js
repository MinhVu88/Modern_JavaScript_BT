// 10 - STRING METHODS & CONCATENATION
const firstName0 = 'Maynard';

const lastName0 = 'Keenan';

console.log('the vocalist: ' + firstName0 + ' ' + lastName0); // concatenation

let greeting = 'Hi, my name\'s ';

greeting += firstName0 + ' ' + lastName0; // appending strings

console.log(greeting);

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

console.log(greeting.replace('Hi', 'Hello there')); // replace() replaces a specific sub-string with another string

console.log("does Maynard contain the sub-string 'na'? -> " + firstName0.includes('na')); // includes() returns a boolean value, used to test if there's something particular in a string

console.log("does Keenan contain the sub-string 'ay'? - > " + lastName0.includes('ay'));