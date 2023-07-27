import { Handler, ReadOnlyState, ViewTypes } from '../types';
import { appElem } from './appView';

/**
 * @param handler {Handler<number>}
 * @param state {ReadOnlyState}
 * @param type {ViewTypes}
 * @description Adds pagination handlers
 */
export function addPaginationHandlers(
  handler: Handler<number>,
  state: ReadOnlyState,
  type: ViewTypes,
) {
  appElem.addEventListener('click', (e) => {
    const paginationButton = (e.target as HTMLElement).closest(
      '.btn',
    ) as HTMLButtonElement;

    if (!paginationButton) return;

    if (type !== state.currentView) return;

    if (paginationButton.dataset.type === 'prev') {
      if (type === ViewTypes.GARAGE) {
        handler(state.garagePage - 1);
      } else {
        handler(state.winnersPage - 1);
      }
    }

    if (paginationButton.dataset.type === 'next') {
      if (type === ViewTypes.GARAGE) {
        handler(state.garagePage + 1);
      } else {
        handler(state.winnersPage + 1);
      }
    }
  });
}

/**
 * @param numOfItems {number}
 * @param currentPage {number}
 * @param numOfPages {number}
 * @param totalCarsOnOnePage {number}
 * @description Generates pagination markup
 */
export function generatePaginationMarkup(
  numOfItems: number,
  currentPage: number,
  numOfPages: number,
  totalCarsOnOnePage: number,
) {
  const isCarsLessThenTotalOnOnePage = numOfItems <= totalCarsOnOnePage;
  const isBtnPrevDisabled = isCarsLessThenTotalOnOnePage || currentPage === 1;
  const isBtnNextDisabled =
    isCarsLessThenTotalOnOnePage || currentPage >= numOfPages;

  return `
    <section class='pagination px-3-2 py-3-2'>
      <button data-type='prev' class='btn btn--secondary ${
        isBtnPrevDisabled ? 'btn--disabled' : ''
      }'>←</button>

      <button data-type='next' class='btn btn--secondary ${
        isBtnNextDisabled ? 'btn--disabled' : ''
      }'>→</button>
    </section>
  `;
}
