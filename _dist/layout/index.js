export class BaseComponent {
    constructor(htmlCode) {
        const template = document.createElement('template');
        template.innerHTML = htmlCode;
        this.element = template.content.firstElementChild;
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
