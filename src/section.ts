import { Component } from './layout/index.js'
import { PageComponent } from './page/section.js'
class App {
  private readonly page: Component
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)
  }
}

// eslint-disable-next-line no-new
new App(document.querySelector('.section') as HTMLElement)
