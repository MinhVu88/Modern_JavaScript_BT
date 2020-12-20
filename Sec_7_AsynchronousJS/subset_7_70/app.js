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

let api_url = 'https://jsonplaceholder.typicode.com/users';

const http = new EasyHttp();

// HTTP GET request
http.get(api_url).then(data => {
    data.forEach(user => displayOuput(user));

    console.log(data);
}).catch(error => displayOuput(error));

// HTTP POST request
const user = {
    name: 'Adam Thomas Jones',
    username: 'Bastardometer',
    email: 'bastardometer@tool.com'
};

http.post(api_url, user).then(data => {
    displayOuput(data);

    console.log(data);
}).catch(error => displayOuput(error));

// HTTP PUT request
const updated_id = 7;

api_url = `https://jsonplaceholder.typicode.com/users/${updated_id}`;

http.put(api_url, user).then(data => {
    displayOuput(data);

    console.log(data);
}).catch(error => displayOuput(error));

// HTTP DELETE request
const removed_id = 8;

api_url = `https://jsonplaceholder.typicode.com/users/${removed_id}`;

http.delete(api_url).then(data => {
    displayOuput(data);

    console.log(data);
}).catch(error => displayOuput(error));