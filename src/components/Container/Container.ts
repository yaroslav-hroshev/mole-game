export default class Container extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', (event: any) => {
      console.log(event.target);
      if (event.target.getAttribute('data-mole')) {
        
      }
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
      const animateDivElement: HTMLElement | null = children[randomElementIndex].querySelector('.square');
      const prevAnimateDivElement: HTMLElement | null = document.body.querySelector('.animate');
      if (prevAnimateDivElement !== null) {
        prevAnimateDivElement.classList.remove('animate');
      }

      if (animateDivElement !== null) {
        animateDivElement.classList.add('animate');
      }

      // Reset counter and timer after all elements have been animated
      if (counter < children.length) {
        timerId = setTimeout(tick, 4000);
        counter += 1;
      } else {
        clearTimeout(timerId);
        counter = 0;
        console.log('All elements have been animated');
        if ( animateDivElement !== null) {
          animateDivElement.classList.remove('animate');
        }
      }
    }, 4000);
  }
}

customElements.define('container-element', Container);
