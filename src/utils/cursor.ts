import { LS_TRANSFORM } from '../constants/constants';
import { getTransformValues, TransformValues, setTransformValue } from './cursorHelper';

// site wide cursor
const siteWideCursor: HTMLDivElement | null = document.querySelector('.site-wide.custom-cursor');

document.addEventListener('mouseenter', (): void => {
  if (siteWideCursor) {
    siteWideCursor.style.display = 'block';
  }
});

document.addEventListener('mouseleave', (): void => {
  if (siteWideCursor) {
    siteWideCursor.style.display = 'none';
  }
});

document.addEventListener('mousedown', (): void => {
  if (siteWideCursor && siteWideCursor.querySelector('.background-image')) {
    setTransformValue(siteWideCursor, LS_TRANSFORM, 45);
  } else if (siteWideCursor) {
    siteWideCursor.classList.add('active');
  }
});

document.addEventListener('mouseup', (): void => {
  if (siteWideCursor && siteWideCursor.querySelector('.background-image')) {
    setTransformValue(siteWideCursor, LS_TRANSFORM, 0);
  } else if (siteWideCursor) {
    siteWideCursor.classList.remove('active');
  }
});

document.addEventListener('mousemove', TrackCursorMouse);

function TrackCursorMouse(event: MouseEvent): void {
  if (siteWideCursor) {
    const { clientX, clientY }: { clientX: number; clientY: number } = event;
    const x: number = siteWideCursor.clientWidth;
    const y: number = siteWideCursor.clientHeight;

    const valuesFromLS: TransformValues | null = window.localStorage.getItem(LS_TRANSFORM)
      ? (JSON.parse(window.localStorage.getItem(LS_TRANSFORM) as string) as TransformValues)
      : null;
    console.log(valuesFromLS);
    let transform;
    if (valuesFromLS) {
      transform = `translate(${clientX - x / 2}px, ${clientY - y / 2}px) rotate(${valuesFromLS.rotation}deg)`;
    } else {
      transform = `translate(${clientX - x / 2}px, ${clientY - y / 2}px) rotate(0deg)`;
    }
    siteWideCursor.style.transform = transform;
    // const transformValues: TransformValues | null = getTransformValues(siteWideCursor);
    // window.localStorage.setItem(`${LS_TRANSFORM}`, JSON.stringify(transformValues));
    if (
      event.target !== null &&
      event.target instanceof Element &&
      event.target.closest('container-element')
    ) {
      siteWideCursor.querySelector('.pointer')?.classList.add('background-image');
    }
  }
}
