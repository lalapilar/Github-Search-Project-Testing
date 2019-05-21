///////git hub js library//////


class Github {
    constructor() {
            // api key
            //// https://github.com/settings/applications/new
        this.client_id = '5581660c7b8f551611d1';
        this.client_secret = '5d08ed9b68e7eee13775652c8ec07c97e6c0fc69';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(` https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret} `);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

            //es6 ito
        return {
            profile, 
            repos
        };
    }
}