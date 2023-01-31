import { BaseComponent } from '../layout/index.js'

export class LinkComponent extends BaseComponent<HTMLAnchorElement> {
  constructor(name: string, date: string) {
    super(`
    <span class="header__component">
      <a class="header__component-anchore"></a>
    </span>`)
    const anchoreElement: HTMLAnchorElement = this.element.querySelector(
      '.header__component-anchore',
    ) as HTMLAnchorElement
    anchoreElement.href = `./components/${name}/index.html`
    anchoreElement.textContent = `${name} ${date}`
  }
}
