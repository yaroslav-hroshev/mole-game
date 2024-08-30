// site wide cursor
const siteWideCursor: HTMLDivElement | null = document.querySelector('.site-wide.custom-cursor');

document.addEventListener('mouseenter', (): void => {
  if (siteWideCursor) {
    siteWideCursor.style.display = 'block';
  }
})

document.addEventListener('mouseleave', (): void => {
  if (siteWideCursor) {
    siteWideCursor.style.display = 'none';
  }
})

document.addEventListener('mousedown', (): void => {
  if (siteWideCursor) {
    siteWideCursor.classList.add('active');
  }
})
document.addEventListener('mouseup', (): void => {
  if (siteWideCursor) {
    siteWideCursor.classList.remove('active');
  }
})

document.addEventListener('mousemove', TrackCursorMouse);

function TrackCursorMouse(event: MouseEvent): void {
  if (siteWideCursor) {
    const { clientX, clientY }: {clientX: number; clientY: number} = event;
    const x: number = siteWideCursor.clientWidth;
    const y: number = siteWideCursor.clientHeight;
    siteWideCursor.style.transform = `translate(${clientX - x/2}px, ${clientY - y/2}px)`;
  }
}