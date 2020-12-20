class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    };

    showProfile(user) {
        console.log(user);

        this.profile.innerHTML = `<div class='card card-body mb-3'>
                                    <div class='row'>
                                        <div class='col-md-3'>
                                            <img class='img-fluid mb-2' src='${user.avatar_url}'/>
                                            <a href='${user.html_url}' class='btn btn-primary btn-block mb-4' target='_blank'>View Profile</a>
                                        </div>
                                        <div class='col-md-9'>
                                            <span class='badge badge-primary'>Public Repos: ${user.public_repos}</span>
                                            <span class='badge badge-secondary'>Public Gists: ${user.public_gists}</span>
                                            <span class='badge badge-success'>Followers: ${user.followers}</span>
                                            <span class='badge badge-info'>Following: ${user.following}</span>                                       
                                            <br><br>
                                            <ul class='list-group'>
                                                <li class='list-group-item'>Company: ${user.company}</li>
                                                <li class='list-group-item'>Website/Blog: ${user.blog}</li>
                                                <li class='list-group-item'>Location: ${user.location}</li>
                                                <li class='list-group-item'>Member Since: ${user.created_at}</li>
                                            </ul>
                                        </div>
                                    </div>
                                  </div>
                                  <h3 class='page-heading mb-3'>Latest Repos</h3>
                                  <div id='repos'></div>`;
    };

    showAlert(msg, css_class) {
        // METHOD #1: show the alert for the unvailable user & the current valid user
        // whenever an user's not found, an alert appears below the vanbar & won't go away
        // so the number of users not found is equal to the number of the alerts stacking on top of each other
        // to solve this problem, clear the current alert before showing a new one
        // this.clearAlert();

        // const div = document.createElement('div');

        // div.className = css_class;

        // div.appendChild(document.createTextNode(msg));

        // const search_container = document.querySelector('.search-container');

        // const search = document.querySelector('.search');

        // search_container.insertBefore(div, search);

        // setTimeout(() => {this.clearAlert();}, 3000);

        // METHOD #2: replace the current valid user with the alert, which will disappear after a few seconds
        // this way, there's no need to create clearAlert(), so code would be much simpler & less verbose
        this.profile.innerHTML = `<div class='${css_class} text-center'>${msg}</div>`;

        setTimeout(() => {document.querySelector('.alert').remove();}, 3000);
    };

    clearAlert() {
        const current_alert = document.querySelector('.alert');

        if(current_alert) current_alert.remove();
    };

    clearProfile() {this.profile.innerHTML = '';};

    showRepos(repos) {
        // the repos id is defined at the end of this.profile.innerHTML in showProfile()
        const repos_list = document.querySelector('#repos'); 

        let output = '';

        repos.forEach(repo => {
            output += `<div class='card card-body mb-2'>
                        <div class='row'>
                            <div class='col-md-6'>
                                <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
                            </div>
                            <div class='col-md-6'>
                                <span class='badge badge-primary'>Stars: ${repo.stargazers_count}</span>
                                <span class='badge badge-secondary'>Watchers: ${repo.watchers_count}</span>
                                <span class='badge badge-success'>Forks: ${repo.forks_count}</span>
                            </div>
                        </div>
                       </div>`;
        });

        repos_list.innerHTML = output;
    };
};