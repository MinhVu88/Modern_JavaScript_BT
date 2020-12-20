// 18 - GENERAL LOOPS
// * for loop
for (let i = 0; i < 10; i++) {
	if (i === 3) {
		console.log(i + ' is my fav number');

		continue;
	}

	if (i === 7) {
		console.log(i + ' -> Stop the for loop');

		break;
	}
	
	console.log(i);
}

// * while loop
let val0 = 0;

while (val0 <= 5) {
	console.log(val0);

	val0++;
}

// * do-while loop
let val1 = 27;

do {
	console.log('val1: ' + val1);

	val1++;
} while (val1 < 10);

// loop thru arrays
const cars = ['Ford Motor', 'Volkswagen', 'Chevrolet', 'Bentley', 'Fiat Automobiles'];

for (let i = 0; i < cars.length; i++) {console.log('f: ' + cars[i]);} // a for loop

cars.forEach(function(car, index, array) {
	
	console.log(`${index}: ${car}`);

	console.log(array);
}); // * a foreach loop (recommended)

/**
 * The map() method creates a new array with the results of calling a function for every array element

 * It calls the provided function once for each element in an array, in order

 * It neither executes the function for array elements without values nor changes the original array
 */
const users0 = [
	{id: 1, name: 'Maynard'},
	{id: 2, name: 'Adam'},
	{id: 3, name: 'Justin'},
	{id: 4, name: 'Danny'}
]; // an array of objects, each of which contains a key-value pair (id & name)

// ids_0 is an array that contains the ids specified in users0
const ids_0 = users0.map(function(user) {return user.id;}); 

console.log(ids_0);

// * for-in loop (usually used with objects)
const user1 = {
	firstName: 'Luke',

	lastName: 'Kemp',

	age: 25
}

for(let x in user1) {console.log(`${x}: ${user1[x]}`);} // for-in loops thru the object's key-value pairs