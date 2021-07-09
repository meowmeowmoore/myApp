export class Autocomplete {

    constructor(view, api) {
        this.view = view;
        this.api = api;

        this.view.input.addEventListener('keyup', this.debounce(this.searchRepositories.bind(this), 400));

    }

    searchRepositories() {
        let inputValue = this.view.input.value;

        if (inputValue !== '') {
            this.api.loadRepositories(inputValue)
                .then(response => this.updateSearchRepositories(response, inputValue))
        } else {
            this.view.clearSuggestRepositories();
        }
    }

    updateSearchRepositories(response, inputValue) {
        if (response.ok) {
            response.json()
                .then(resultOfSearch => {
                    let arrRepositories = resultOfSearch.items;
                    this.autocompleteRepositories(arrRepositories, inputValue);
                })
        }
    }

    autocompleteRepositories(arr, inputValue, counter = 0) {
        this.view.clearSuggestRepositories();

        arr.forEach(repository => {
            if (repository.name.search(inputValue) !== -1) {
                let owner = repository.owner;
                let star = repository.stargazers_count;
                this.view.createAutocomplete(repository.name, counter++, owner, star);
            }
        })
    }

    debounce(fn, debounceTime) {
        let timeout;

        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(this, args), debounceTime);
        }
    };
}
