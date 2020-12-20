class Github {
    constructor() {
        this.client_id = '40e25f18acc22971ea3f';
        this.client_secret = '0bd7221a33f3ec6a9d826c15a9465beb3fdc2c4c';
        this.repos = 5;
        this.repos_sort = 'created: asc'; // sort repos in ascending order -> fetch the 1st 5 latest repos
    };

    async getUser(user) {
        const profile_response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repo_response = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile_data = await profile_response.json();

        const repo_data = await repo_response.json();

        return {
            profile: profile_data,
            repos: repo_data 
        };
    }
};