import { WINNERS_TOTAL_CARS_ON_ONE_PAGE } from '../config';
import { calculateNumOfPages } from '../helpers';
import { trueState } from './state';

export default function updateWinnersNumOfPages() {
  trueState.winnersNumOfPages = calculateNumOfPages(
    trueState.totalWinners,
    WINNERS_TOTAL_CARS_ON_ONE_PAGE,
  );
}
