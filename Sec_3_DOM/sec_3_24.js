// 24 - DOM selectors for MULTIPLE elements (that return either an html collection or a node list)
// I - document.getElementsByClassName() (this returns an html collection, to which array methods can be applied WITH conversion)
// Get all the elements whose classes are named 'collection-item' on a GLOBAL scope
const items0 = document.getElementsByClassName('collection-item');

console.log(items0);

console.log('The items0 html collection\'s length: ' + items0.length);

console.log(items0[2]); // access 1 of the elements

items0[0].style.color = 'red';

items0[3].textContent = 'Something else';

// get elements on an INTERNAL scope (only within this particular ul)
const items1 = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(items1);

// II/ document.getElementsByTagName()
const lis0 = document.getElementsByTagName('li');

console.log(lis0);

console.log(lis0[4]);

lis0[4].style.color = 'white';

lis0[4].style.backgroundColor = 'red';

lis0[4].textContent = 'Another thing';

// convert an html collection to an array
let lis1 = document.getElementsByTagName('li');

lis1 = Array.from(lis1);

console.log(lis1.reverse());

lis1.forEach(function(li, index) {
    console.log(li.className);

    li.textContent = `${index}: Item`;
});

// II/ document.querySelectorAll() (this returns a node list, to which array methods can be applied WITHOUT conversion)
const items2 = document.querySelectorAll('ul.collection li.collection-item');

items2.forEach(function(item, index) {item.textContent = `${index + 1}: Item`});

console.log(items2);

// odd- or even-ordinal elements
const li_odd = document.querySelectorAll('li:nth-child(odd)');

const li_even = document.querySelectorAll('li:nth-child(even)');

// style all odd-ordinal elements using a foreach loop
li_odd.forEach(function(li) {li.style.background = 'red'});

// style all even-ordinal elements using a for loop
for (let li = 0; li < li_even.length; li++) {li_even[li].style.background = 'yellow';}