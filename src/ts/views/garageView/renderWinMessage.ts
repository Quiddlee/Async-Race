/**
 * @param e {MouseEvent}
 * @description Close the win message on blackout click
 */
function handleCloseWinMessage(e: MouseEvent) {
  const target = e.target as HTMLDivElement;

  if (!target.classList.contains('blackout')) return;

  const blackout = document.querySelector('.blackout') as HTMLElement;
  const winTitle = document.querySelector('.win') as HTMLElement;

  winTitle
    .querySelectorAll<HTMLSpanElement>('.win__title')
    .forEach((title, i) => {
      title.style.opacity = '1';
      title.style.animation = `win-fade-out .5s cubic-bezier(1, -2, .3, 1) forwards ${
        i * 0.1
      }s`;
    });

  blackout.style.animation = 'blackout-fade-in .6s ease reverse both';

  winTitle.onanimationend = () => {
    winTitle.remove();
    blackout.remove();
    document.body.style.overflow = '';
  };

  document.body.removeEventListener('click', handleCloseWinMessage);
}

/**
 * @param winnersCarName {string}
 * @description Render the win message with specified winner's car name
 */
export default function renderWinMessage(winnersCarName: string) {
  const markup = `
    <div class='blackout'></div>
    <h2 class='win'>
      <span class='win__title win__title--1 title title--car py-1-2 px-2'>${winnersCarName}</span>
      <br>
      <span class='win__title win__title--2 title title--car py-1-2 px-2'>Is The</span>
      <br>
      <span class='win__title win__title--3 title title--car py-1-2 px-2'>Winner! 🏆</span>
    </h2>
  `;

  document.body.style.overflow = 'hidden';
  document.body.insertAdjacentHTML('afterbegin', markup);
  document.body.addEventListener('click', handleCloseWinMessage);
}
