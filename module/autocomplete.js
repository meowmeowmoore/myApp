export class Autocomplete {

    constructor(view, api) {
        this.view = view;
        this.api = api;

        this.view.input.addEventListener('keyup', this.debounce(this.searchRepositories.bind(this), 400));

    }

    searchRepositories() {
        if (this.view.input.value) {
            this.api.loadRepositories(this.view.input.value)
                .then(response => this.updateRepositories(response))
        }
    }

    updateRepositories(response) {
        if(response.ok) {
            response.json()
                .then(res => console.log(res))
        };
    }

    debounce(fn, debounceTime) {
        let timeout;

        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(this, args), debounceTime);
        }
    };
}

// export default Autocomplete;