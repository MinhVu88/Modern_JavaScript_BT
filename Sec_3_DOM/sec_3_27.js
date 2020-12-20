// REPLACE AN ELEMENT
const newHeading = document.createElement('h2'); // create an element

newHeading.id = 'task-title'; // add an id to newHeading

newHeading.appendChild(document.createTextNode('New Task List')); // create & add a new text node to newHeading

// get the replaced heading
const replacedHeading = document.getElementById('task-title');

// the parent element is needed so replaceChild() can be called on it
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, replacedHeading); // replace the old heading with the new one

console.log(newHeading);

// REMOVE ELEMENTS
const lis = document.querySelectorAll('li');

const ul = document.querySelector('ul');

lis[0].remove(); // remove a list item

ul.removeChild(lis[3]); // remove a child element

// CLASSES & ATTRIBUTES
// classes
const firstLi = document.querySelector('li:first-child');

const link = firstLi.children[0];

console.log(link.className);

console.log(link.classList); // classList returns a DOMTokenList 

console.log(link.classList[0]);

link.classList.add('test');

link.classList.remove('test');

// attributes
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://en.wikipedia.org/wiki/Nirvana_(band)');

console.log(link.hasAttribute('href'));

console.log(link.hasAttribute('title'));

link.setAttribute('title', 'Grunge');

console.log(link.hasAttribute('title'));

link.removeAttribute('title');

console.log(link);