import { SortOrder, SortTypes, WinnersTableData } from '../../types';
import { WINNERS_TOTAL_CARS_ON_ONE_PAGE } from '../../config';
import { generatePaginationMarkup } from '../paginationView';
import { addZero } from '../../helpers';
import { generateCarIcon } from '..';

export function generateHeaderMarkup(
  totalWinners: number,
  currentPage: number,
) {
  return `
    <header class='header'>
      <h2 class='title'>Winners 🏆 (${addZero(totalWinners)})</h2>
      <p class='paragraph'>Page ${addZero(currentPage)}</p>
    </header>
  `;
}

/**
 * @param winners {WinnersTableData[]}
 * @returns {string}
 * @description Generates markup for the winners list
 */
export function generateWinnersList(winners: WinnersTableData[]) {
  return `
    <ul class='winners-list'>
      ${winners
        .map(
          (winner, i) => `
          <li class='winners-list__item py-1-2 px-3-2' style='animation-delay: ${
            i * 0.07
          }s'>
            <span class='winners-list__num'>${addZero(i + 1)}</span>
            <span class='winners-list__car'>${generateCarIcon(
              winner.color,
            )}</span>
            <span class='winners-list__name'>${winner.name}</span>
            <span class='winners-list__wins'>${addZero(winner.wins)}</span>
            <span class='winners-list__time'>${addZero(winner.time)}s</span>
          </li>
        `,
        )
        .join('')}
    </ul>
  `;
}

/**
 * @param winners {WinnersTableData[]}
 * @param totalWinners {number}
 * @param currentPage {number}
 * @param winnersNumOfPages {number}
 * @param sortType {SortTypes}
 * @param sortOrder {SortOrder}
 * @description Generates markup for the winners page
 */
export default function generateWinnersMarkup(
  winners: WinnersTableData[],
  totalWinners: number,
  currentPage: number,
  winnersNumOfPages: number,
  sortType: SortTypes,
  sortOrder: SortOrder,
) {
  const pagination = generatePaginationMarkup(
    totalWinners,
    currentPage,
    winnersNumOfPages,
    WINNERS_TOTAL_CARS_ON_ONE_PAGE,
  );

  return `
    ${generateHeaderMarkup(totalWinners, currentPage)}

    <div class='winners-table p-4-8'>
      <div class='table-data py-1-2 px-3-2'>
        <span>#️⃣ Number</span>
        <span>🏎️ Car</span>
        <span>🏁 Name</span>
        <span class='table-data__wins' data-type='wins'>🥇 Wins ${
          sortType === SortTypes.WINS
            ? sortOrder === SortOrder.ASC
              ? '⬆️'
              : '⬇️'
            : ''
        }</span>
        <span class='table-data__best-time' data-type='time'>⌛ Best Time (sec) ${
          sortType === SortTypes.BEST_TIME
            ? sortOrder === SortOrder.ASC
              ? '⬆️'
              : '⬇️'
            : ''
        }</span>
      </div>
      ${generateWinnersList(winners)}
    </div>

    ${pagination}
  `;
}
