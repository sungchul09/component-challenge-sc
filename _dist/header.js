import { HeaderComponent } from './page/header.js';
class App {
    constructor(appRoot) {
        this.page = new HeaderComponent();
        this.page.attachTo(appRoot);
    }
}
new App(document.querySelector('.header'));
