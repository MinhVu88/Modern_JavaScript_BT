// define the UI variables
const taskForm = document.querySelector('#task-form');

const taskList_ul = document.querySelector('.collection');

const clearBtn = document.querySelector('.clear-tasks');

const filter = document.querySelector('#filter');

const taskInput = document.querySelector('#task');

// call the loadAllEventListeners() method
loadEventListeners();

function loadEventListeners() {
    // add a task event
    taskForm.addEventListener('submit', addTask);

    // remove a task event
    taskList_ul.addEventListener('click', removeTask);

    // clear all task events
    clearBtn.addEventListener('click', clearTasks);

    // filter task events
    filter.addEventListener('keyup', filterTasks);

    // load document event
    document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage);
};

function getTasksFromLocalStorage() {
    let tasks;

    if(localStorage.getItem('tasks436') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks436'));
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
    
        li.className = 'collection-item';

        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');

        link.className = 'delete-item secondary-content';

        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);

        taskList_ul.appendChild(li);
    });
};

// add a task
function addTask(e) {
    if(taskInput.value === '') alert('Add a task') // if the new task field is empty, alert user to add a task

    // create a li element
    const li = document.createElement('li');
    
    li.className = 'collection-item';

    // create a textNode (a new task) & append it to an li element -> an li tag's firstChild = a textNode
    li.appendChild(document.createTextNode(taskInput.value));

    // create a link element (for deleting a list item)
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    // create an x icon for each li element
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link); // append a link to a li -> an li tag's lastChild = an a tag

    if(li.hasChildNodes()) console.log('li.childNodes:',li.childNodes,'| li.children:',li.children,'| li.childElementCount:',li.childElementCount);

    taskList_ul.appendChild(li); // append li elements to the ul tag

    // store user input in the new task field in local storage
    // this function must be called before the code that clears the new task field (taskInput.value = '';)
    // if it's called after that code, the empty string that's assigned to taskInput.value would be added to local storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = ''; // clear the new task field after the task submission

    e.preventDefault();
};

function storeTaskInLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks436') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks436'));
    }

    tasks.push(task);

    localStorage.setItem('tasks436', JSON.stringify(tasks));
};

// remove a task using event delegation
/*
- 1st, if user clicks the i tag (the x icon), then target the a tag, which's the i tag's parent & 
  check if the value of the a tag's class attribute is 'delete-item'

- If correct, then the confirm() function is called to check if user wants to remove the task whose x icon is clicked

- If yes, then the li tag, which's the a tag's parent, is targetted & removed

- That way, the whole list item is deleted, not just the i tag or the a tag
*/
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('The i tag:',e.target,'| The a tag (parent of i):',e.target.parentElement);

        if(confirm('Are you sure?')) {
            console.log('The li tag (parent of a):',e.target.parentElement.parentElement);

            e.target.parentElement.parentElement.remove(); // remove task from the dom
            
            removeTaskFromLocalStorage(e.target.parentElement.parentElement); // remove task from local storage
        }       
    }

    e.preventDefault();
};

/*
- To remove a task from local storage, 1st check if the key 'tasks436' exists there

- Whether it does or doesn't, the 'tasks' var must be an array, so forEach() can be called on it

- ForEach() takes a callback that has 2 params, task & index, which represent a task & its index in local storage
  
- Inside the callback, task is compared against removedTask that's passed to removeTaskFromLocalStorage() as an arg from removeTask()

- These 2 are checked against each other based on the string values they both hold

- If they share the same string value, then the task in local storage is the one that should be removed 

- Then the array method splice() is called on the 'tasks' array to delete that specific task

-> More about splice(): 
    
    + https://www.youtube.com/watch?v=2EPhFxwKoio 
    
    + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    
    + https://www.edureka.co/blog/javascript-array-splice-method/
*/
function removeTaskFromLocalStorage(removedTask) {
    console.log('The removed li tag:',removedTask);

    let tasks;

    if(localStorage.getItem('tasks436') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks436'));
    }

    tasks.forEach(function(task, index) {
        if(removedTask.textContent === task) tasks.splice(index, 1);
    });

    localStorage.setItem('tasks436', JSON.stringify(tasks));
};

// clear tasks
function clearTasks() {
    // clear tasks from the dom
    // method #1 (slower)
    // taskList.innerHTML = '';

    // method #2 (faster -> recommended): https://jsperf.com/innerhtml-vs-removechild/47
    while(taskList_ul.firstChild) {
        taskList_ul.removeChild(taskList_ul.firstChild);
    }

    // clear tasks from local storage
    clearTasksFromLocalStorage();
};

function clearTasksFromLocalStorage() {
    localStorage.clear();
};

// filter tasks
/*
- The keyup event means whenever user releases a key on the keyboard while typing,
  an event occurs & what has been written so far in the filter field is assigned to user_search

- Then forEach() iterates thru the added tasks (the li tags) & for each task (li_tag),
  its firstChild, whose nodeType is TEXT_NODE, is assigned to task

- task is then converted to lowercase & checked against user_search letter by letter by using indexOf(user_search)

- If indexOf(user_search) returns -1, there's no match between task & user_search & nothing's shown on the task list

- If indexOf(user_search) returns 0 or above, then there's at least 1 match between task & user_search &
  the matched task or tasks are shown on the task list  
*/
function filterTasks(e) {
    const user_search = e.target.value.toLowerCase();

    console.log(`\nuser search: ${user_search}`);

    // querySelectorAll() returns a node list, so forEach() can be used on it
    document.querySelectorAll('.collection-item').forEach(li_tag => {
        if(li_tag.hasChildNodes()) {
            const task = li_tag.firstChild.textContent;

            switch (li_tag.firstChild.nodeType) {
                case li_tag.firstChild.ELEMENT_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.ELEMENT_NODE', li_tag.firstChild.ELEMENT_NODE);
                break;
                case li_tag.firstChild.TEXT_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.TEXT_NODE', li_tag.firstChild.TEXT_NODE);
                break;
                case li_tag.firstChild.CDATA_SECTION_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.CDATA_SECTION_NODE', li_tag.firstChild.CDATA_SECTION_NODE);
                break;
                case li_tag.firstChild.PROCESSING_INSTRUCTION_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.PROCESSING_INSTRUCTION_NODE', li_tag.firstChild.PROCESSING_INSTRUCTION_NODE);
                break;
                case li_tag.firstChild.COMMENT_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.COMMENT_NODE', li_tag.firstChild.COMMENT_NODE);
                break;
                case li_tag.firstChild.DOCUMENT_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.DOCUMENT_NODE', li_tag.firstChild.DOCUMENT_NODE);
                break;
                case li_tag.firstChild.DOCUMENT_TYPE_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.DOCUMENT_TYPE_NODE', li_tag.firstChild.DOCUMENT_TYPE_NODE);
                break;
                case li_tag.firstChild.DOCUMENT_FRAGMENT_NODE:
                    console.log('\ntask.firstChild.nodeType === task.firstChild.DOCUMENT_FRAGMENT_NODE', li_tag.firstChild.DOCUMENT_FRAGMENT_NODE);
                break;
                default:
                    console.log(null);
                break;
            };
            
            switch (li_tag.lastChild.nodeType) {
                case li_tag.lastChild.ELEMENT_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.ELEMENT_NODE', li_tag.lastChild.ELEMENT_NODE);
                break;
                case li_tag.lastChild.TEXT_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.TEXT_NODE', li_tag.lastChild.TEXT_NODE);
                break;
                case li_tag.lastChild.CDATA_SECTION_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.CDATA_SECTION_NODE', li_tag.lastChild.CDATA_SECTION_NODE);
                break;
                case li_tag.lastChild.PROCESSING_INSTRUCTION_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.PROCESSING_INSTRUCTION_NODE', li_tag.lastChild.PROCESSING_INSTRUCTION_NODE);
                break;
                case li_tag.lastChild.COMMENT_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.COMMENT_NODE', li_tag.lastChild.COMMENT_NODE);
                break;
                case li_tag.lastChild.DOCUMENT_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.DOCUMENT_NODE', li_tag.lastChild.DOCUMENT_NODE);
                break;
                case li_tag.lastChild.DOCUMENT_TYPE_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.DOCUMENT_TYPE_NODE', li_tag.lastChild.DOCUMENT_TYPE_NODE);
                break;
                case li_tag.lastChild.DOCUMENT_FRAGMENT_NODE:
                    console.log('\ntask.lastChild.nodeType === task.lastChild.DOCUMENT_FRAGMENT_NODE', li_tag.lastChild.DOCUMENT_FRAGMENT_NODE);
                break;
                default:
                    console.log(null);
                break;
            };

            console.log('\ntask.firstChild:',li_tag.firstChild,'\ntask.firstChild.textContent:',task,
                        '\ntask.firstChild.nodeType:',li_tag.firstChild.nodeType,'\ntask.firstChild.nodeValue:',li_tag.firstChild.nodeValue,
                        '\ntask.firstChild.parentElement:',li_tag.firstChild.parentElement,'\ntask.firstChild.parentNode:',li_tag.firstChild.parentNode,
                        '\ntask.firstChild.nextSibling:',li_tag.firstChild.nextSibling,'\ntask.firstChild.previousSibling:',li_tag.firstChild.previousSibling,
                        '\ntask.firstChild.childNodes:',li_tag.firstChild.childNodes,'\n\ntask.lastChild:',li_tag.lastChild,
                        '\ntask.lastChild.textContent:',li_tag.lastChild.textContent,'\ntask.lastChild.nodeType:',li_tag.lastChild.nodeType,
                        '\ntask.lastChild.nodeValue:',li_tag.lastChild.nodeValue,'\ntask.lastChild.parentElement:',li_tag.lastChild.parentElement,
                        '\ntask.lastChild.parentNode:',li_tag.lastChild.parentNode,'\ntask.lastChild.nextSibling:',li_tag.lastChild.nextSibling,
                        '\ntask.lastChild.previousSibling:',li_tag.lastChild.previousSibling,'\ntask.lastChild.childNodes:',li_tag.lastChild.childNodes,
                        '\n\ntask.nodeName:',li_tag.nodeName,'\ntask.parentElement:',li_tag.parentElement,
                        '\ntask.parentNode:',li_tag.parentNode,'\ntask.nextSibling:',li_tag.nextSibling,
                        '\ntask.previousSibling:',li_tag.previousSibling,'\ntask.childNodes:',li_tag.childNodes);

            if(task.toLowerCase().indexOf(user_search) === -1) {
                console.log('\ntask.toLowerCase().indexOf(user_search) ->',task.toLowerCase().indexOf(user_search));

                li_tag.style.display = 'none';
            }else {
                console.log('\ntask.toLowerCase().indexOf(user_search) ->',task.toLowerCase().indexOf(user_search));

                li_tag.style.display = 'block';
            }
        }
    });
};