let regExp;

// a regular expression literal
// i -> the "i" flag makes letter case insensitive
// g -> another flag that stands for "global search"
regExp = /hello/i;

console.log("\nregExp ->", regExp, "\n\n");
console.log("\nregExp.source ->", regExp.source, "\n\n");

console.log("---------------------------------------------------------------");

// FUNCTIONS TO EVALUATE EXPRESSIONS
// 1) exec() -> this returns results in an array if there's a match, otherwise null's returned
let result = regExp.exec("regExp hello world");
console.log("\nregExp.exec('regExp hello world') ->", result, "\n\n");

result = regExp.exec("regExp hell world");
console.log("\nregExp.exec('regExp hell world') ->", result, "\n\n");

result = regExp.exec("regExp hellowtftwankers world");
console.log("\nregExp.exec('regExp hellowtftwankers world') ->", result, "\n\n");
console.log(result[0], "|", result.index, "|", result.input, "\n\n");

console.log("---------------------------------------------------------------");

// 2) test() -> returns true if there's a match, false otherwise
result = regExp.test("Hello");
console.log("\nregExp.test('Hello') ->", result, "\n\n");

console.log("---------------------------------------------------------------");

// 3) match() -> this works the opposite of how exec() works
// someRegExp.exec(someString) =/= someString.match(someRegExp)
let str = "Hello There";
result = str.match(regExp);
console.log("\n'Hello There'.match(regExp) ->", result, "\n\n");
str = "Hell There";
result = str.match(regExp);
console.log("\n'Hell There'.match(regExp) ->", result, "\n\n");

console.log("---------------------------------------------------------------");

// 4) search() -> this returns the index of the 1st match, -1 is returned if no match's found
str = "Eyyo, Hello There";
result = str.search(regExp);
console.log("\n'Eyyo, Hello There'.search(regExp) ->", result, "\n\n");
str = "Yoyoyo, Hell There";
result = str.search(regExp);
console.log("\n'Yoyoyo, Hell There'.search(regExp) ->", result, "\n\n");

console.log("---------------------------------------------------------------");

// 5) replace() -> this returns a new string with some or all matches of a pattern
str = "Hello There";
const newStr = str.replace(regExp, "Hi");
console.log("\n'Hello There'.replace(regExp, 'Hi') ->", newStr);
