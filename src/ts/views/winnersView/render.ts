import { generateHeaderMarkup, generateWinnersList } from './generateWinnersMarkup';
import { generatePaginationMarkup } from '../paginationView';
import { WINNERS_TOTAL_CARS_ON_ONE_PAGE } from '../../config';
import { generateWinnersMarkup, winnersWrapper } from '.';
import { ReadOnlyState } from '../../types';
import { clearParent, update } from '..';

/**
 * @param state {ReadOnlyState}
 * @param isUpdate {boolean}
 * @description Render winners markup
 */
export default function render(state: ReadOnlyState, isUpdate = true) {
  const winnersMarkup = generateWinnersMarkup(
    state.winners,
    state.totalWinners,
    state.winnersPage,
    state.winnersNumOfPages,
    state.winnersSortType,
    state.winnersSortOrder,
  );
  const winnersListMarkup = generateWinnersList(state.winners);
  const winnersListElem = document.querySelector(
    '.winners-list',
  ) as HTMLUListElement;

  const paginationMarkup = generatePaginationMarkup(
    state.totalWinners,
    state.winnersPage,
    state.winnersNumOfPages,
    WINNERS_TOTAL_CARS_ON_ONE_PAGE,
  );
  const winnersPaginationElem = winnersWrapper.querySelector(
    '.pagination',
  ) as HTMLElement;

  const headerMarkup = generateHeaderMarkup(
    state.totalWinners,
    state.winnersPage,
  );
  const headerElem = winnersWrapper.querySelector('.header') as HTMLElement;

  if (winnersWrapper.innerHTML !== '' && isUpdate) {
    update(paginationMarkup, winnersPaginationElem);
    update(winnersListMarkup, winnersListElem);
    update(headerMarkup, headerElem);
    return;
  }

  clearParent(winnersWrapper);
  winnersWrapper.insertAdjacentHTML('beforeend', winnersMarkup);
}
