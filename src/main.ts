import './style.css';
import './custom-styles.css';
import './utils/cursor.ts';
import render from './utils/render.ts';
import Square from './components/Square/Square.ts';
import Container from './components/Container/Container.ts';

const squaresArray: Array<HTMLElement> = render(16, Square);
const gridContainer: HTMLElement = new Container();
squaresArray.forEach((elem: HTMLElement): void => gridContainer.append(elem));

document.querySelector<HTMLDivElement>('#app')!.append(gridContainer);

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)