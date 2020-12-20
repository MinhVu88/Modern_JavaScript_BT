const joke_btn = document.querySelector('.get-jokes');

const joke_input = document.querySelector('input[type="number"]');

const jokes_list = document.querySelector('.jokes');

joke_btn.addEventListener('click', getJokes);

function getJokes(e) {
    const api_url = 'http://api.icndb.com/jokes/random/';

    const numberOfJokes = joke_input.value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${api_url}${numberOfJokes}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(typeof this.responseText,' -> ',this.responseText);

            const response = JSON.parse(this.responseText);

            console.log(typeof response,' | Array?',Array.isArray(response),' | ',response);

            console.log(typeof response.type,' | Array?',Array.isArray(response.type),' | ',response.type);

            console.log(typeof response.value,' | Array?',Array.isArray(response.value),' | ',response.value);

            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function(joke) {output += `<li>${joke.joke}</li>`;});
            } else {
                output += `<li>Something's wrong</li>`;
            }

            jokes_list.innerHTML = output;
        }
    };

    xhr.send();

    e.preventDefault();
};