import { PageComponent } from './page/index.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}
new App(document.querySelector('.section'));
