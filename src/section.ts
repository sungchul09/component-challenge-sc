import { LinkComponent } from './page/section-anchor.js'
import { Component } from './layout/index.js'
import { SectionComponent } from './page/section.js'
class App {
  private readonly page: Component
  constructor(appRoot: HTMLElement) {
    this.page = new SectionComponent()
    this.page.attachTo(appRoot)

    linklist.forEach((componentName, i) => {
      const link = new LinkComponent(componentName, workDate[i] as string)
      link.attachTo(appRoot, 'afterbegin')
    })
  }
}

const linklist = ['custom-scrollbar', 'glowing-text', 'clip-path-circle', 'hover-effect-card']
const workDate = ['2022.11.16', '2022.11.23', '22.11.23', '2023.01.14']

// eslint-disable-next-line no-new
new App(document.querySelector('.section') as HTMLElement)
