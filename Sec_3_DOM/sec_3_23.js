// 23 - DOM Selectors for SINGLE elements (methods that return the 1st element that 
//      matches a specified CSS selector(s) from the dom)
// I - document.getElementById()
console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').id);

console.log(document.getElementById('task-title').className);


const taskTitle = document.getElementById('task-title');

// change styling
taskTitle.style.background = '#333';

taskTitle.style.color = '#fff';

taskTitle.style.padding = '5px';

//taskTitle.style.display = 'none';

// change content
taskTitle.textContent = 'Task List';

taskTitle.innerText = 'My Tasks';

taskTitle.innerHTML = '<span style="color: red">List Of Tasks</span>';


// II - document.querySelector() (recommended)
console.log(document.querySelector('#task-title')); // get sth from the dom by its id

console.log(document.querySelector('.card-title')); // get sth from the dom by its class

console.log(document.querySelector('h5')); // use the selector/element itself

document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'green'; // use nested elements

// target the last item/li in an ul by using css pseudo classes
document.querySelector('li:last-child').style.color = 'purple'; 

// target a specific item/li by its ordinal position in an ul, also using css pseudo classes
document.querySelector('li:nth-child(3)').style.color = 'yellow'; 

document.querySelector('li:nth-child(4)').textContent = 'Item';

document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // target an odd-ordinal item/li

document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // target an even-ordinal item/li