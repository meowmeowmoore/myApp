export class Autocomplete {

    constructor(view, api) {
        this.view = view;
        this.api = api;

        this.view.input.addEventListener('keyup', this.debounce(this.searchRepositories.bind(this), 400));

    }

    searchRepositories() {
        let inputValue = this.view.input.value;
        if (this.view.input.value) {
            this.api.loadRepositories(this.view.input.value)
                .then(response => this.updateSearchRepositories(response, inputValue))
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
        if (inputValue === '') {
            this.view.clearSuggestRepositories();
        } else {
            arr.forEach(repository => {
                if (repository.name.search(inputValue) !== -1) {

                    this.view.createAutocomplete(repository.name, counter++);
                }
            })
        }
    }

    debounce(fn, debounceTime) {
        let timeout;

        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(this, args), debounceTime);
        }
    };
}
