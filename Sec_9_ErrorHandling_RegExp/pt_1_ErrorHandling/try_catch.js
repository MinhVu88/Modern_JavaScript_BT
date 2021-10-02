// GLOBAL/CORE ERRORS
try {
	// ReferenceError
	myFunction();
} catch (error) {
	console.log("\nerror ->", error, "\n\n");
	console.log("\nerror.message ->", error.message, "\n\n");
	console.log("\nerror.name ->", error.name, "\n\n");
	console.log("\nerror instanceof ReferenceError ->", error instanceof ReferenceError, "\n\n");
} finally {
	console.log('\nthe last block "finally" runs, regardless of the result\n\n');
}

console.log("---------------------------------------------------------------");

try {
	// TypeError
	null.myFunction();
} catch (error) {
	console.log("\nerror ->", error, "\n\n");
}

console.log("---------------------------------------------------------------");

try {
	// SytaxError
	eval("eyyo wassup");
} catch (error) {
	console.log("\nerror ->", error, "\n\n");
}

console.log("---------------------------------------------------------------");

try {
	// URIError
	decodeURIComponent("%");
} catch (error) {
	console.log("\nerror ->", error, "\n\n");
}

console.log("---------------------------------------------------------------");

// CUSTOM ERRORS
const user = { email: "jdoe@anon.com" };

try {
	if (!user.name) {
		// throw "no username found";
		throw new SyntaxError("no username found");
	}
} catch (error) {
	// console.log("\nerror ->", error, "\n\n");
	console.log(`\nUserError (custom error type) -> ${error.message}\n\n`);
}

console.log("\nthe program continues...");
