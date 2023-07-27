export default function getTrackWidth() {
  const track = document.querySelector('.car__track') as HTMLElement;
  return Number(getComputedStyle(track).width.slice(0, -2)) - 10;
}
