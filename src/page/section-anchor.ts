import { BaseComponent } from '../layout/index.js'

export class LinkComponent extends BaseComponent<HTMLAnchorElement> {
  constructor(name: string, date: string) {
    super(`
    <span class="section__component">
      <a class="section__component-anchore"></a>
    </span>`)
    const anchoreElement: HTMLAnchorElement = this.element.querySelector(
      '.section__component-anchore',
    ) as HTMLAnchorElement
    anchoreElement.href = `./src/components/${name}/index.html`
    anchoreElement.textContent = `${name} ${date}`
  }
}
