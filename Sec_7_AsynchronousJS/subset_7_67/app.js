const btn1 = document.querySelector('#button1'),
      btn2 = document.querySelector('#button2'),
      btn3 = document.querySelector('#button3'),
      output = document.querySelector('#output');

btn1.addEventListener('click', getText);

function getText() {
    fetch('test.txt').then(function(response) {
        if(!response.ok) {
            throw new Error(response.error);
        } else {
            console.log(response);

            // TypeError: Failed to execute 'text' on 'Response': body stream is locked (caused by the code below)
            // https://stackoverflow.com/questions/53511974/javascript-fetch-failed-to-execute-json-on-response-body-stream-is-locked
            // console.log(response.text());

            return response.text(); // a Promise object is returned
        }
    }).then(function(data) {
            console.log(typeof data,' | Array?',Array.isArray(data),' | ',data);

            output.innerHTML = `<h4>${data}</h4>`;
      }).catch(function(error) {console.log(error);})
};

btn2.addEventListener('click', getJSON);

function getJSON() {
    fetch('posts.json').then(function(response) {
        if(!response.ok) {
            throw new Error(response.error);
        } else {
            console.log(response);

            return response.json();
        }
    }).then(function(data) {
            console.log(typeof data,' | Array?',Array.isArray(data),' | ',data);

            const ul = document.createElement('ul');

            data.forEach(function(post) {ul.innerHTML += `<li>Title: ${post.title} | Content: ${post.body}</li>`});

            output.appendChild(ul);
      }).catch(function(error) {console.log(error);})
};

btn3.addEventListener('click', getAPI);

function getAPI() {
    fetch('https://api.github.com/users').then(function(response) {
        if(!response.ok) {
            throw new Error(response.error);
        } else {
            console.log(response);

            return response.json();
        }
    }).then(function(data) {
            console.log(typeof data,' | Array?',Array.isArray(data),' | ',data);

            const ul = document.createElement('ul');

            data.forEach(function(user) {ul.innerHTML += `<li>Login: ${user.login} | ID: ${user.id}</li>`});

            output.appendChild(ul);
      }).catch(function(error) {console.log(error);})
};