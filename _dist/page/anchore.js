import { BaseComponent } from '../layout/index.js';
export class LinkComponent extends BaseComponent {
    constructor(name, date) {
        super(`
    <span class="header__component">
      <a class="header__component-anchore"></a>
    </span>`);
        const anchoreElement = this.element.querySelector('.header__component-anchore');
        anchoreElement.href = `./components/${name}/index.html`;
        anchoreElement.textContent = `${name} ${date}`;
    }
}
