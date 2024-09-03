export default class Square extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(this.createHTML());
    this.addEventListener('click', (event: any) => {
      console.log(event.currentTarget);
    });
  }

  createHTML(): HTMLDivElement {
    const square: HTMLDivElement = document.createElement('div');
    square.classList.add('square');
    const firstHatch: HTMLDivElement = document.createElement('div');
    const secondHatch: HTMLDivElement = document.createElement('div');
    firstHatch.classList.add('hatch');
    secondHatch.classList.add('hatch');
    const mole: HTMLImageElement = document.createElement('img');
    mole.setAttribute('src', '/public/mole.svg');
    square.append(secondHatch, firstHatch, mole);
    return square;
  }

  render() {}
}

customElements.define('square-element', Square);
