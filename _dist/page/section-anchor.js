import { BaseComponent } from '../layout/index.js';
export class LinkComponent extends BaseComponent {
    constructor(name, date) {
        super(`
    <span class="section__component">
      <a class="section__component-anchore"></a>
    </span>`);
        const anchoreElement = this.element.querySelector('.section__component-anchore');
        anchoreElement.href = `./src/components/${name}/index.html`;
        anchoreElement.textContent = `${name} ${date}`;
    }
}
