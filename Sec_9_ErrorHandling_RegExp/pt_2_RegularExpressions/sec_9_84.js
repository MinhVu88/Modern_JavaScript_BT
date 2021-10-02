let regExp;
let str;
let result;

console.log("\n\t\t\t[ LITERAL CHARACTERS ]\n\n");

regExp = /hello/;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /hello/i;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

console.log("\n\t\t\t[ META-CHARACTER SYMBOLS ]\n\n");

// ^ -> the string must start with a certain character
regExp = /^h/;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /^h/i;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Eyyo Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "hey Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// $ -> the string must end with a certain character
regExp = /d$/i;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

regExp = /ftworld$/i;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

regExp = / world$/i;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// ^ $ -> the string must start with & end with a certain character
regExp = /^hello$/i;
str = "Hello World";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Hello";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// . -> the string can match any ONE character in place of the dot "."
regExp = /h.llo/i;
str = "H@llo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Heello";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// * -> the string can match any character, 0 or more times
regExp = /h*llo/i;
str = "Heello";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Hllo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// ? -> a part of a string can match an optional character
regExp = /gre?a?y/i;
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Grey";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Gry";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Griy";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// \ -> escape character
regExp = /gre?a?y\?/i;
str = "Gray?";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Grar?";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

function testRegExp(regExp, str) {
	if (regExp.test(str)) {
		console.log(`\n-> ${str} matches ${regExp.source}\n\n`);
	} else {
		console.log(`\n-> ${str} does NOT match ${regExp.source}\n\n`);
	}
}
