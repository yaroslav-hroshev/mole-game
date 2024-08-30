export default class Container extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', (event: any) => {
      console.log(event.currentTarget);
    });
    this.changeColors();
  }

  createHTML() {}

  render() {}

  changeColors() {
    const children: HTMLCollection = this.children;
    let counter: number = 0;

    let timerId = setTimeout(function tick(): void {
      const randomElementIndex: number = Math.trunc((Math.random() * 100) / 6.2);
      const animateDivElement: HTMLElement | null = children[randomElementIndex].querySelector('div');
      const prevAnimateDivElement: HTMLElement | null = document.body.querySelector('.animate');
      if (prevAnimateDivElement !== null) {
        prevAnimateDivElement.classList.remove('animate');
      }

      if (animateDivElement !== null) {
        animateDivElement.classList.add('animate');
      }

      if (counter < children.length) {
        timerId = setTimeout(tick, 4000);
        counter += 1;
        console.log(counter);
      }
    }, 6000);
  }
}

customElements.define('container-element', Container);
