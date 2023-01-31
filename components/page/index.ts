import { BaseComponent } from './../component/index.js'
export class PageComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super('<p>Wellcome page!</p>')
  }
}
