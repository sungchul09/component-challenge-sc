import { Component } from './interface.js'

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T
  constructor(htmlCode: string) {
    const template = document.createElement('template')
    template.innerHTML = htmlCode
    this.element = template.content.firstElementChild as T
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'): void {
    parent.insertAdjacentElement(position, this.element)
  }
}
