// ITERATOR
console.log("\n\t\t\t[ ITERATOR ]\n\n");

function nameIterator(names) {
	let nextIndex = 0;

	return {
		next: function () {
			return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
		}
	};
}

const namesArray = ["Maynard Keenan", "Adam Jones", "Dan Carey", "Justin Chancellor"];

const result = nameIterator(namesArray);

console.log(result.next());
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next());
console.log(result.next().value);

console.log("\n\t\t\t---------------------------------------------------------------\n\n");

console.log("\n\t\t\t[ GENERATOR ]\n\n");

function* sayNames() {
	yield "Layne Staley";
	yield "Jerry Cantrell";
	yield "Chris Cornell";
	yield "Scott Weiland";
	yield "Kurt Cobain";
	yield "Ed Vedder";
	yield "Thom York";
	yield "Keith Whitley";
	yield "Edward Norton";
	yield "Sam Rockwell";
}

const name = sayNames();

console.log(name.next());
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

console.log("\n\t\t\t---------------------------------------------------------------\n\n");

function* createIds() {
	let index = 0;

	while (true) {
		yield index++;
	}
}

const generator = createIds();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
