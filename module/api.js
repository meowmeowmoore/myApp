const URL = 'https://api.github.com/';

export class API {
    constructor() {
    }

    async loadRepositories(searchValue) {
        return await fetch(`${URL}search/repositories?q=${searchValue}`);
    }

}
