// sets can store unique values of any type
const set1 = new Set();

// add values to set1
set1.add(100);
set1.add('some str');
set1.add({name: 'Maynard Keenan'});
set1.add(true);

// duplicate values aren't added to a set
// so there is only 1 occurrence of 100 in set1
set1.add(100); 

console.log('\nset1 ->',set1);

// another way of addding values to a set
const set2 = new Set([27, 'Adam Jones', false, {greet() {console.log('Hi there')}}]);
console.log('\nset2 ->',set2);

// count values of a set
console.log('\nset1.size ->',set1.size);

// check for values
console.log('\nset1.has(100) ->',set1.has(100));
console.log('set1.has(50 + 50) ->',set1.has(50 + 50));

// false because objects are reference types
// meaning 2 exactly looking objects are 2 distinctly separate things
// that's why {name: 'Maynard Keenan'} =/= {name: 'Maynard Keenan'}
console.log("set1.has({name: 'Maynard Keenan'}) ->",set1.has({name: 'Maynard Keenan'}));

// delete values from set
set1.delete(100);
console.log('\nset1 ->',set1);

// loop thru set
console.log('\nUse the for...of loop to get values (Note: set2.keys() === set2.values())'); 
for(let item of set2) {
  console.log('\t->',item);
}

console.log('\nset2.entries()');
for(let item of set2.entries()) {
  console.log('\t->',item);
}

console.log('\nUse the forEach loop to get values'); 
set2.forEach(value => console.log('\t->',value))

// sets -> arrays
const setToArray = Array.from(set2);
console.log('\nsetToArray ->',setToArray);