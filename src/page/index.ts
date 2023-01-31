import { BaseComponent } from '../layout/index.js'
export class PageComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super('<p>Wellcome page!</p>')
  }
}
