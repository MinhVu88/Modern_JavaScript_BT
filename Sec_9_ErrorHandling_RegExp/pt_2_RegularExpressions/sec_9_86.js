let regExp;
let str;
let result;

console.log("\n\t\t\t[ SHORTHAND CHARACTER CLASSES ]\n\n");

// 1) WORD CHARACTERS
regExp = /\w/; // a word character -> any letter, number or underscore _
str = "3x3x3x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /\w+/; // 1 or more word characters
str = "3x3x3x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "!";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = ";";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "()";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = " ";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "_";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /\W/; // a non-word character -> not a letter, a number or an underscore _
str = "x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "7";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "_";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "!";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = ";";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "()";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = " ";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// 2) DIGIT CHARACTERS
regExp = /\d/; // a digit character -> match any digit
str = "8";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "76543";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /\d+/; // match any digit, 1 or more times
str = "76543";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /\D/; // a non-digit character -> match any non-digit
str = "7";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "T";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// 3) WHITE-SPACE CHARACTERS
regExp = /\s/; // a white-space character -> match any white-space
str = " ";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "notawhitespace";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /\S/; // a non-white-space character -> match any non-white-space
str = " ";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "notawhitespace";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// 4) WORD BOUNDARY
regExp = /Hell\b/i;
str = "Hello, welcome to Hell";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

// 5) ASSERTIONS
regExp = /x(?=y)/; // match x, only if it's followed by y
str = "x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gtefxjkio";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gtefxyjkio";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /x(?!y)/; // match x, only if it's NOT followed by y
str = "x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gtefxjkio";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gtefxyjkio";
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
