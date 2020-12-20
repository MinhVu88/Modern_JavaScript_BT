// 12 - ARRAYS & ARRAY METHODS
const numbers1 = [1,2,3,4,5];

const numbers2 = new Array(6,7,8,9,10);

const fruit = ['orange', 'apple', 'mango', 'durian', 'banana'];

const mixed = [true, new Date(), null, undefined, {a:1, b:1}, 'variety', 23];

console.log('the mixed array\'s length: ' + mixed.length);

// isArray() returns true if an array is in the round brackets & false if no array is found
console.log('is fruit an array? -> ' + Array.isArray(fruit)); 

console.log('the 3rd & 4th elements in numbers2: ' + numbers2[2] + ' & ' + numbers2[3]);

console.log(fruit);

fruit[2] = 'watermelon'; // change an element's value in numbers1

console.log(fruit);

// indexOf() shows the index of an array's element
console.log("the index of element 'undefined' in mixed: " + mixed.indexOf(undefined)); 

console.log(numbers1);

numbers1.push(5.5); // push() appends an element to an array

console.log(numbers1);

console.log(numbers2);

numbers2.unshift(5.5); // unshift() adds an element to the front of an array

console.log(numbers2);

numbers1.pop(); // pop() removes the last element in an array

console.log(numbers1);

numbers2.shift(); // shift() removes the 1st element in an array

console.log(numbers2);

console.log('concatenate arrays: ' + numbers1.concat(numbers2));

console.log('splice() takes out & displays 1 or more elements in an array: ' + 
			mixed.splice(1, 1) + ' | ' + fruit.splice(1, 3) + ' | ' + numbers2.splice(2, 3));

console.log('reverse an array: ' + numbers1.reverse());

const favBrands = ['Tool', 'Radiohead', 'Soundgarden', 'Deftones', 'Alice in Chains', 'Nirvana'];

const numbers3 = [51,23,88,69,47,14];

console.log(favBrands);

console.log(numbers3);

console.log('sort an array alphabetical or in an ascending order: ' + favBrands.sort()  + ' | ' + numbers3.sort());

const numbers4 = [32,96,41,74,15];

console.log(numbers4);

console.log("use the 'compare function' to sort an array in an ascending order: " + numbers4.sort(function(x, y) {return x - y;}));

console.log("use the 'compare function' to sort an array in a descending order: " + numbers4.sort(function(x, y) {return y - x;}));

const numbers5 = [56,84,21,64,7,39,48,11,72];

function under50(number) {return number < 50;} // return the 1st element in an array whose value is under 50

function over50(number) {return number > 50;} // return the 1st element in an array whose value is under 50

console.log("use find(), which takes in another testing function to find an array's element," +
			" based on the testing function's condition -> Under 50: " + 
			numbers5.find(under50) + ' | Over 50: ' + numbers5.find(over50));