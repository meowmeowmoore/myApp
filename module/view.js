export class View {
    constructor(api) {
        this.api = api;

        this.app = document.getElementById('app');

        //Строка поиска
        this.searchLine = this.createElement('div', 'search-line')
        this.input = this.createElement('input', 'input-for-search');
        this.searchLine.append(this.input);

        //Автоподбор у строки поиска (автокомплит)
        this.autocompleteWrap = this.createElement('div', "autocomplete-wrap");
        this.listOfSuggestion = this.createElement('ul', 'list-of-repositories');
        this.autocompleteWrap.append(this.listOfSuggestion);
        this.searchLine.append(this.autocompleteWrap);

        //Список добавленных репозиториев
        this.addRepositoriesList = this.createElement('div', 'wrapper-list-repositories');
        this.listOfRepositories = this.createElement('ul', 'list-repositories');
        this.addRepositoriesList.append(this.listOfRepositories);

        this.app.append(this.searchLine);
        this.app.append(this.addRepositoriesList);

    }

    createElement(elementTag, elementClass) {
        let element = document.createElement(elementTag);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }

    createAutocomplete(repositoryName, counter) {

        if (counter < 5) {
            console.log(counter);
            let repository = this.createElement("li", "repository-name");
            repository.innerHTML = repositoryName;
            repository.addEventListener('click', () => console.log(repository))
            this.listOfSuggestion.append(repository);
        }
    }

    clearSuggestRepositories() {
        this.listOfSuggestion.innerHTML = '';
    }
}

