import {
  AjaxResponse,
  SortOrder,
  SortTypes,
  ViewTypes,
  WinnerData,
} from '../types';

import updateWinnersNumOfPages from './updateWinnersNumOfPages';
import { trueState } from './state';
import { getCar } from './index';

export default async function updateWinnersState(
  [winnersData, totalNumOfWinners]: AjaxResponse<WinnerData[]>,
  newPage: number,
  changeView: boolean,
  newSortOrder: SortOrder = trueState.winnersSortOrder,
  newSortType: SortTypes = trueState.winnersSortType,
) {
  const oldNumOfWinners = trueState.totalCars;
  const newNumOfWinners = Number(totalNumOfWinners);

  const tableWinnersData = await Promise.all(
    winnersData.map(async ({ id, wins, time }) => {
      const { name, color } = await getCar(id);
      return { name, color, id, wins, time };
    }),
  );

  trueState.winners = tableWinnersData;
  trueState.winnersPage = newPage;
  trueState.totalWinners = newNumOfWinners;
  trueState.winnersSortOrder = newSortOrder;
  trueState.winnersSortType = newSortType;

  if (changeView) trueState.currentView = ViewTypes.WINNERS;

  if (oldNumOfWinners !== newNumOfWinners) updateWinnersNumOfPages();
}
