// 25 - traversing the DOM
const ul = document.querySelector('ul.collection');

const firstLi = document.querySelector('li.collection-item:first-child');

console.log(firstLi);

console.log(ul);

// get the CHILD nodes of the ul (all different types of nodes)
console.log(ul.childNodes); // return a node list

console.log(ul.childNodes[0]); // a text node

console.log(ul.childNodes[0].nodeName);

console.log(ul.childNodes[3].nodeName);

/** The node type numbering:
 * 1 - Element(s)
 * 2 - Attribute(s): deprecated
 * 3 - Text node(s): line breaks between lis
 * 8 - Comment(s) 
 * 9 - Document itself
 * 10 - Doctype
 */

console.log('Text node numbering: ' + ul.childNodes[0].nodeType);

console.log('Element node numbering: ' + ul.childNodes[1].nodeType);

console.log('Comment node numbering: ' + ul.childNodes[3].nodeType);

// get the CHILDREN nodes of the ul (just elements)
console.log(ul.children); // return an html collection

console.log(ul.children[0]);

console.log(ul.children[1]);

ul.children[1].textContent = 'Something peculiar';

// get children of children
console.log(ul.children[2].children);

console.log(ul.children[2].children[0]);

ul.children[3].children[0].id = 'test-link'; // add an id to the link

console.log(ul.children[3].children[0]);

console.log(ul.firstChild); // get the 1st node, regardless of type

console.log(ul.firstElementChild); // get the 1st element

console.log(ul.lastChild); // get the last node, regardless of type

console.log(ul.lastElementChild); // get the last element

console.log('The number of child elements within the ul: ' + ul.childElementCount);

// get the PARENT node
console.log(firstLi.parentNode); // in this case, the ul

console.log(firstLi.parentElement); // similar to parentNode

console.log(firstLi.parentElement.parentElement); // get parent of parent (in this case, the div)

console.log(firstLi.nextSibling); // get the 2nd sibling/node, regardless of type

console.log(firstLi.nextElementSibling); // get the 2nd element-type sibling/node

console.log(firstLi.nextElementSibling.nextElementSibling); // get the 3rd element-type sibling/node

console.log(firstLi.previousSibling); // get the previous sibling/node, regardless of type

// get the previous element-type sibling/node, which is null as this's the 1st element-type node in the list
console.log(firstLi.previousElementSibling);

// back to the 2nd element-type sibling/node from the 3rd
console.log(firstLi.nextElementSibling.nextElementSibling.previousElementSibling);