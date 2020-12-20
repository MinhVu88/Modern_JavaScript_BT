const output = document.querySelector('#output');

function displayOuput(value) {
    const ul = document.createElement('ul');

    if (value.id) {
        ul.innerHTML += `<li>ID: ${value.id} | Name: ${value.name} | Username: ${value.username} | Email: ${value.email}</li>`;   
    } else {
        ul.innerHTML = `<li>${value}</li>`
    }

    output.appendChild(ul);
};

function sync_func() {return 'some sync function'};

console.log(sync_func());

async function async_func_0() {return 'some async function'};

console.log(async_func_0());

async_func_0().then(response => console.log(response));

async function async_func_1() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('another async function'), 3000);
    });

    return await promise;
};

async_func_1().then(response => console.log(response));

async function async_func_2() {
    const promise = new Promise((resolve, reject) => setTimeout(() => resolve('another async function'), 3000));
    
    const error = true;

    if (error) {
        await Promise.reject(new Error('something went wrong'));
    } else {
        return await promise;
    }
};

async_func_2().then(response => console.log(response)).catch(error => console.log(error));

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;
};

getUsers().then(data => data.forEach(user => displayOuput(user))).catch(error => displayOuput(error));