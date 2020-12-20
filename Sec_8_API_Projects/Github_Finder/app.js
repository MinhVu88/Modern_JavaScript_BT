// UI vars
const search_input = document.querySelector('#search-user');

// instantiate classes
const github = new Github();

const ui = new UI();

// event handlers
search_input.addEventListener('keyup', e => {
    const user_input = e.target.value;

    if (user_input === '') {
        ui.clearProfile();  // clear profile (ui.js)
    } else {
        console.log(user_input);

        github.getUser(user_input).then(data => {
            console.log(data);

            if (data.profile.message === 'Not Found') {
                ui.showAlert('User Not Found', 'alert alert-danger'); // show alert (ui.js)
            } else {
                // show profile & repos (ui.js)
                ui.showProfile(data.profile); 

                ui.showRepos(data.repos);
            }
        });
    }
});