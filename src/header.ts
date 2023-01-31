import { Component } from './layout/index.js'
import { HeaderComponent } from './page/header.js'
class App {
  private readonly page: Component
  constructor(appRoot: HTMLElement) {
    this.page = new HeaderComponent()
    this.page.attachTo(appRoot)
  }
}

// eslint-disable-next-line no-new
new App(document.querySelector('.header') as HTMLElement)
