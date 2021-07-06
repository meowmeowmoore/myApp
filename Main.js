class View {
    constructor() {
        this.app = document.getElementById('app');

        this.searchLine = this.createElement('div', 'search-line')
        this.input = this.createElement('input', 'input-for-search');
        this.searchLine.append(this.input);

        this.main = this.createElement('div', 'wrapper-repositories');
        this.listOfRepositories = this.createElement('ul', 'list-repositories');
        this.main.append(this.listOfRepositories);

        this.app.append(this.searchLine);
        this.app.append(this.main);

    }

    createElement (elementTag, elementClass) {
        let element = document.createElement(elementTag);
        if(elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }

    // createRepository (repository) {
    //     let elementRepository = this.createElement('li', 'element-repository');
    //
    //     this.listOfRepositories.append(elementRepository)
    //
    // } При событии добавления выбранного репозитория
    //
}

class Search {
    constructor(view) {
        this.view = view;

        this.view.input.addEventListener('keyup', this.searchRepositories.bind(this))


    }

    async searchRepositories() {
        return await fetch(
            `https://api.github.com/search/repositories?q=${this.view.input.value}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {}
            }).then(res => { console.log(res);
                res.items.forEach(repository => console.log(repository)/*this.view.createRepository(repository)*/)
            })

    }
}

new Search(new View());
