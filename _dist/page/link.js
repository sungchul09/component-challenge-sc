import { BaseComponent } from '../layout/index.js';
export class LinkComponent extends BaseComponent {
    constructor(name, date) {
        super(`
    <span class="header__work-list">
      <a class="header__work-list--link"></a>
    </span>`);
        const anchoreElement = this.element.querySelector('.header__work-list--link');
        anchoreElement.href = `./components/${name}/index.html`;
        anchoreElement.textContent = `${name} ${date}`;
    }
}
