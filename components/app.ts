import { PageComponent } from './page/index.js'
console.log('##############')
class App {
  private readonly page: PageComponent
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)
  }
}

console.log(document.querySelector('.section'))
// eslint-disable-next-line no-new
new App(document.querySelector('.section') as HTMLElement)
