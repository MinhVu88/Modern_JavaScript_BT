// create an element
const li = document.createElement('li');

// add a class to li
li.className = 'collection-item';

// add an id to li (optional)
li.id = 'new-item';

// add an attribute to li
li.setAttribute('title', 'New Item');

// create a text node & append to li
const textNode = document.createTextNode('Brand New Item');

li.appendChild(textNode); // appendChild() means putting something inside something else

// create a link element for li
const link = document.createElement('a');

// add a class to the link
link.className = 'delete-item secondary-content';

// add an html icon to the link
link.innerHTML = '<i class="fa fa-remove"></i>';

// append the link to li
li.appendChild(link);

// append li as a child node to the ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);