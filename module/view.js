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
        this.listOfSuggestion = thwis.createElement('ul', 'list-of-repositories');
        this.autocompleteWrap.append(this.listOfSuggestion);
        this.searchLine.append(this.autocompleteWrap);

        //Список добавленных репозиториев
        this.listOfRepositories = this.createElement('div', 'wrapper-list-repositories');

        //Кнопка удаления
        this.wrapperButtonDelete = this.createElement('div', 'wrapper-button-delete');

        this.listOfRepositories.append(this.wrapperButtonDelete);


        this.app.append(this.searchLine);
        this.app.append(this.listOfRepositories);

    }

    createElement(elementTag, elementClass) {
        let element = document.createElement(elementTag);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }

    createAutocomplete(repositoryName, counter, owner, star) {

        if (counter < 5) {
            let repository = this.createElement("li", "repository-name");
            repository.innerHTML = repositoryName;
            repository.addEventListener('click', () => this.createListOfRepository(repository, owner, star))
            this.listOfSuggestion.append(repository);
        }
    }

    createListOfRepository(repository, owner, star) {
        let wrapperRep = this.createElement('div', 'wrapper-list-repository');
        wrapperRep.innerHTML = `<p class="element">Name: ${repository.innerHTML}</p>
                                <p class="element">Owner: ${owner.login}</p>
                                <p class="element"> Stars: ${star}</p>`
        this.listOfRepositories.append(wrapperRep);

    }

    clearSuggestRepositories() {
        this.listOfSuggestion.querySelectorAll('.repository-name')
            .forEach(el => el.remove())
    }
}

