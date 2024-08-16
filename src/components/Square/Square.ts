export default class Square extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(this.createHTML());
  }

  createHTML(): HTMLDivElement {
    const hatch: HTMLDivElement = document.createElement('div');
    hatch.classList.add('hatch');
    const mole: HTMLImageElement = document.createElement('img');
    mole.setAttribute('src', '/public/mole-image.jpg');
    hatch.append(mole);
    return hatch;
  }

  render() {}
}

customElements.define('square-element', Square);
