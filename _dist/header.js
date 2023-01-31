import { LinkComponent } from './page/anchore.js';
import { HeaderComponent } from './page/header.js';
class App {
    constructor(appRoot) {
        this.page = new HeaderComponent();
        this.page.attachTo(appRoot);
        linklist.forEach((componentName, i) => {
            const link = new LinkComponent(componentName, workDate[i]);
            link.attachTo(appRoot, 'afterbegin');
        });
    }
}
const linklist = ['custom-scrollbar', 'glowing-text', 'clip-path-circle', 'hover-effect-card'];
const workDate = ['2022.11.16', '2022.11.23', '22.11.23', '2023.01.14'];
new App(document.querySelector('.header'));
