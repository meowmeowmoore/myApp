class View {
    constructor() {
        this.app = document.getElementById('app');

        //Строка поиска
        this.searchLine = this.createElement('div', 'search-line')
        this.input = this.createElement('input', 'input-for-search');
        this.searchLine.append(this.input);

        //Автоподбор у строки поиска (автокомплит, автозаполнение)
        this.autocompleteWrap = this.createElement('div', "autocomplete-wrap");


        //Список добавленных репозиториев
        this.addRepositoriesList = this.createElement('div', 'wrapper-list-repositories');
        this.listOfRepositories = this.createElement('ul', 'list-repositories');
        this.addRepositoriesList.append(this.listOfRepositories);

        this.app.append(this.searchLine);
        this.app.append(this.autocompleteWrap);
        this.app.append(this.addRepositoriesList);

    }

    createElement(elementTag, elementClass) {
        let element = document.createElement(elementTag);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }
}

const REPOSITORY_PER_PAGE = 5;

class Search {
    constructor(view) {
        this.view = view;

        this.view.input.addEventListener('keyup', this.debounce(this.searchRepositories.bind(this), 500));

    }

    async searchRepositories() {
        return await fetch(
            `https://api.github.com/search/repositories?q=${this.view.input.value}&per_page=${REPOSITORY_PER_PAGE}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(res => {
                let arrayRepositoryName = [];
                res.items.forEach(repository => {
                    arrayRepositoryName.push(repository.name);
                    // repository.this.view.createElement("div", "autocomplete-wrap");
                }/*this.view.createRepository(repository)*/)
                console.log(arrayRepositoryName)
            })

    }

    //Вынести в отдельный класс??
    autocomplete(input, arr) {
        input.addEventListener('input', () => {
            let value = input.value;
            arr.forEach((arrItem, index) => {

            })
        })

    }

    //

    debounce(fn, debounceTime) {
        let timeout;

        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(this, args), debounceTime);
        }
    };
}

new Search(new View());
