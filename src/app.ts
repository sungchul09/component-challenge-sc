import { PageComponent } from './page/index.js'
class App {
  private readonly page: PageComponent
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)
  }
}

// eslint-disable-next-line no-new
new App(document.querySelector('.section') as HTMLElement)
