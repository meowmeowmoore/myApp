export class View {
    constructor(api) {
        this.api = api;

        this.app = document.getElementById('app');

        //Строка поиска
        this.searchLine = this.createElement('div', 'search-line')
        this.input = this.createElement('input', 'input-for-search');
        this.searchLine.append(this.input);

        //Автоподбор у строки поиска (автокомплит, автозаполнение)
        this.autocompleteWrap = this.createElement('div', "autocomplete-wrap");
        this.listOfSuggestion = this.createElement('ul', 'list-of-repositories')
        this.autocompleteWrap.append(this.listOfSuggestion);
        this.searchLine.append(this.autocompleteWrap)

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
}

