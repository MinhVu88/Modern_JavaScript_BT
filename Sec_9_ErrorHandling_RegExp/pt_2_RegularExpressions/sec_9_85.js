let regExp;
let str;
let result;

console.log("\n\t\t\t[ BRAKCETS [] -> CHARACTER SETS ]\n\n");

regExp = /gr[ae]y/i; // must be either "a" or "e"
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Grey";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Groy";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Gry";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /[GF]ray/; // must be either "G" or "F"
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Fray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Xray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /[^GF]ray/i; // must be neither "G" nor "F"
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Fray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Xray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /^[GF]ray/; // must begin with "G" or "F"
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Fray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Xray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /[A-Z]ray/; // match any uppercase letter
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /[a-z]ray/; // match any lowercase letter
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /[A-Za-z]ray/; // match any letter, regardless of case
str = "Gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "gray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Fray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "fray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Xray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "xray";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /number_[0-9]/; // match any digit
str = "number_7";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "number_13";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "number_-1";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

console.log("\n\t\t\t[ BRACES {} -> QUANTIFIERS ]\n\n");

regExp = /Hel{2}o/i; // must occur exactly {n} times
str = "Hello";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Helo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Helllo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /Hel{2,4}o/i; // must occur exactly in the range specified within {}
str = "Hello";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Helllo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Hellllo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Helllllo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Helo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /Hel{2,}o/i; // must occur at least {n} times
str = "Helo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Hello";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "Helllo";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

console.log("\n\t\t\t[ PARENTHESES () -> GROUPING ]\n\n");

regExp = /([0-9]x){3}/i;
str = "3x3x3x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "3x3x3x3x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

console.log("---------------------------------------------------------------");

regExp = /^([0-9]x){3}$/i;
str = "3x3x3x";
result = regExp.exec(str);
console.log(`\n${regExp} | ${str} ->`, result);
testRegExp(regExp, str);

str = "3x3x3x3x";
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
