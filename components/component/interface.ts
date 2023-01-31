export interface Component {
  attachTo: (parent: HTMLElement, position?: InsertPosition) => void
}
