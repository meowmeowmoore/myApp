let ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">\n' +
    '<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>\n' +
    '</svg>'

export class View {
    constructor(api, style) {
        this.api = api;
        this.style = style;

        this.app = document.getElementById('app');

        //Строка поиска
        this.searchLine = this.createElement('div', 'search-line')
        this.input = this.createElement('input', 'input-for-search');
        this.searchLine.append(this.input);

        //Автоподбор у строки поиска (автокомплит)
        this.autocompleteWrap = this.createElement('div', "autocomplete-wrap");
        this.autocompleteList = this.createElement('ul', 'autocomplete-list');
        this.autocompleteWrap.append(this.autocompleteList);
        this.searchLine.append(this.autocompleteWrap);

        //Список добавленных репозиториев
        this.listAdded = this.createElement('div', 'list-added');

        this.app.append(this.searchLine);
        this.app.append(this.listAdded);

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
            console.log(counter)
            let repository = this.createElement("li", "autocomplete-repository");
            repository.innerHTML = repositoryName;
            repository.addEventListener('click', () => this.createListOfRepository(repository, owner, star))
            this.autocompleteList.append(repository);
        }
    }

    createListOfRepository(repository, owner, star) {
        let wrapperRep = this.createElement('div', 'wrapper-list-repository');
        let repositoryInfo = this.createElement('div', 'repository-info');
        this.style.decoration(wrapperRep);
        repositoryInfo.innerHTML = `<p class="element">Name: ${repository.innerHTML}</p>
                                    <p class="element">Owner: ${owner.login}</p>
                                    <p class="element"> Stars: ${star}</p>`;
        wrapperRep.append(repositoryInfo);
        this.createDeleteButton(wrapperRep);
        this.listAdded.append(wrapperRep);

    }

    createDeleteButton(repositoryInfo) {
        let button = this.createElement('div', 'autocomplete-repository-button');
        button.innerHTML = ICON;
        button.addEventListener('click', () => this.deleteElementFromList(repositoryInfo));
        repositoryInfo.append(button);
    }

    deleteElementFromList(wrapperRep) {
        wrapperRep.remove();
    }

    clearSuggestRepositories() {
        this.autocompleteList.querySelectorAll('.autocomplete-repository')
            .forEach(el => el.remove())
    }
}

