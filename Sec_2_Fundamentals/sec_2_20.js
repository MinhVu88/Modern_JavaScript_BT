// 20 - BLOCK SCOPE WITH LET & CONST
// * global scope
var a = 1;

let b = 2;

const c = 3;

console.log('Global scope: ' + a + ', ' + b + ', ' + c);

// * function scope: var
function test() {
	var a = 4;

	let b = 5;

	const c = 6;

	console.log('Function scope: ' + a + ', ' + b + ', ' + c);
}

test();

// * block scope (anything that's wrapped in curly braces): let & const
if (true) {
	var a = 7;

	let b = 8;

	const c = 9;

	console.log('If/block scope: ' + a + ', ' + b + ', ' + c);
}

console.log('Global scope: ' + a + ', ' + b + ', ' + c);

for (var a = 0; a < 5; a++) {console.log(`Loop: ${a}`);}

console.log('Global scope: ' + a + ', ' + b + ', ' + c);