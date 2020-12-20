/*
// EVENT BLUBBLING
document.querySelector('.card-title').addEventListener('click', function() {console.log('card title')});

document.querySelector('.card-content').addEventListener('click', function() {console.log('card content')});

document.querySelector('.card').addEventListener('click', function() {console.log('card')});

document.querySelector('.col').addEventListener('click', function() {console.log('col')});
*/

// EVENT DELEGATION (put an event listener on some element's parent & define a condition there to find a target)
// without event delegation
/*
const deleteItem = document.querySelector('.delete-item');

deleteItem.addEventListener('click', removeItem);

function removeItem() {console.log('delete item');}
*/

// with event delegation
document.body.addEventListener('click', removeItem);

function removeItem(e) {
    /*
    // #1: target the 'i' element (child), which is in the 'a' element (parent)
    if (e.target.className === 'fa fa-remove') {console.log('delete item');}
    */

    /*
    // #2: target the 'a' element, which is the 'i' element's parent
    // this approach does not work if a new class is added to an 'a' tag 
    // Ex: 'delete-item secondary-content something-else'
    if (e.target.parentElement.className === 'delete-item secondary-content') {console.log('delete item');}
    */

    /*
    // #3: target the 'a' element, using classList, instead of className, along with the contains() method (recommended)
    if (e.target.parentElement.classList.contains('delete-item')) {console.log('delete item');}
    */

    // #4: add the functionality to actually remove a list item visually (not on the server side)
    // -> target the 'li' element, which is the 'a' element's parent
    if (e.target.parentElement.classList.contains('delete-item')) {e.target.parentElement.parentElement.remove();}
};