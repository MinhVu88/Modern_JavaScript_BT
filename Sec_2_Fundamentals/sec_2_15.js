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

const color = 'black';

if (color === 'red') {
	console.log('red');
} else if(color === 'yellow') {
	console.log('yellow');
} else {
	console.log("It's neither red nor yellow");
}

// logical operators
const name0 = 'Luke';

const age0 = 15;

// AND && (true && true -> true | false && false -> false | true && false -> false)
if (age0 >= 0 && age0 <= 12) {
	console.log(`${name0} is a child`);
} else if(age0 >= 13 && age0 <= 19) {
	console.log(`${name0} is a teenager`);
} else {
	console.log(`${name0} is an adult`);
}

// OR || (true || true -> true | false || false -> false | true || false -> true)
const name1 = 'Kate';

const age1 = 73;

if (age1 < 10 || age1 > 80) {
	console.log(`${name1} can't lift weight anymore`);
} else {
	console.log(`It's ok, let ${name1} try`);
}

// ternary operator (if/else)
console.log(age1 >= 70 ? 'CORRECT' : 'INCORRECT');