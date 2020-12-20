// local storage data will stay until user manually clears it out in his/her settings or programs
// session storage data will go away once user's browser is closed or sessions end
// set local storage item(s)
//localStorage.setItem('name', 'Jeffrey Skilling');
//localStorage.setItem('age', '30');

// set session storage item(s)
//sessionStorage.setItem('name', 'Ken Lay');

// remove item(s) from local storage
//localStorage.removeItem('name');

// get item(s) from local storage
//console.log('Name & age from local storage: ' + localStorage.getItem('name') + ' & ' + localStorage.getItem('age'));

// clear local storage
//localStorage.clear();

/*
- At 1st, check if there's a key called tasks332 in local storage that contains some value
     
- If there isn't, then an empty array is assigned to tasks & subsequently user input/task from the dom can be 'pushed' to it

- Then the array is converted into a JSON string (JSON.stringify(tasks)), so it can be stored in local storage

- Thus the key 'tasks332' is created in local storage & can be consequently accessed outside of addEventListener()

- On the other hand, if the key already exists in local storage & contains some value (a JSON string), 
   then the value is converted to an array using JSON.parse() & the array is then assigned to tasks

- If tasks were provided by user then, they'd be added to that array, converted to JSON string format & stored in 'tasks332'

- Either way, tasks must be an array, so push() can be used on it
*/
document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.querySelector('#task').value;

    let tasks;

    if (localStorage.getItem('tasks332') === null) {
        tasks = [];

        console.log('1.',typeof tasks,'| Array? ->',Array.isArray(tasks));
    } else {
        console.log('2.',typeof localStorage.getItem('tasks332'),
                    '| Array? ->',Array.isArray(localStorage.getItem('tasks332')));

        tasks = JSON.parse(localStorage.getItem('tasks332'));
    }

    console.log('3.',typeof tasks,'| Array? ->',Array.isArray(tasks));

    tasks.push(task);

    console.log('4.',typeof JSON.stringify(tasks),
                '| Array? ->',Array.isArray(JSON.stringify(tasks)));

    localStorage.setItem('tasks332', JSON.stringify(tasks));

    alert('Task saved');

    e.preventDefault();
});

// JSON.parse() only works if tasks332 already exists in local storage
const tasks = JSON.parse(localStorage.getItem('tasks332'));

console.log('5.',typeof tasks,'| Array? ->',Array.isArray(tasks));

tasks.forEach(function(task) {console.log(task);});