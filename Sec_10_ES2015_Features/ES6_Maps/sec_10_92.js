// maps are new object structure that holds key-value pairs of any data type (including objects)
const map1 = new Map();

// set keys
const key1 = 'some str';
const key2 = {};
const key3 = function() {};

// set values by keys
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// get values by keys
console.log('\nmap1.get(key1) ->',map1.get(key1));
console.log('\nmap1.get(key2) ->',map1.get(key2));
console.log('\nmap1.get(key3) ->',map1.get(key3));

// count key-value pairs of a map
console.log('\nmap1.size ->',map1.size);

// loop thru maps
// for...of
console.log('\nUse the for...of loop to get keys & values'); 
for(let[key, value] of map1) {
  console.log(`\tkey -> ${key}: value -> ${value}`);
}

// loop thru keys only
console.log('\nUse the for...of loop to get keys only'); 
for(let key of map1.keys()) {
  console.log(`\tkey -> ${key}`);
}

// loop thru values only
console.log('\nUse the for...of loop to get values only'); 
for(let value of map1.values()) {
  console.log(`\tvalue -> ${value}`);
}

// forEach
// loop thru keys only
console.log('\nUse the forEach loop to get keys & values'); 
map1.forEach((value, key) => console.log(`\tkey -> ${key}: value -> ${value}`))

// maps -> arrays
// create an array that consists of a map's key-value pairs
const mapKeysValuesArray = Array.from(map1);
console.log('\nmapKeysValuesArray ->',mapKeysValuesArray);

// create an array that consists of a map's keys only
const mapKeysOnlyArray = Array.from(map1.keys());
console.log('\nmapKeysOnlyArray ->',mapKeysOnlyArray);

// create an array that consists of a map's values only
const mapValuesOnlyArray = Array.from(map1.values());
console.log('\nmapValuesOnlyArray ->',mapValuesOnlyArray);