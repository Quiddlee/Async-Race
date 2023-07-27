import {
  DEFAULT_GARAGE_NUM_OF_PAGES,
  DEFAULT_GARAGE_PAGE,
  DEFAULT_SELECTED_CAR_ID,
  DEFAULT_TOTAL_NUM_OF_CARS,
  DEFAULT_TOTAL_WINNER,
  DEFAULT_WINNERS_NUM_OF_PAGES,
  DEFAULT_WINNERS_PAGE,
} from '../config';

import { ReadOnlyState, SortOrder, SortTypes, State, ViewTypes } from '../types';

/**
 * @description The state is mutable only
 * inside the model only 1 source of truth
 */
export const trueState: State = {
  garageCars: [],
  winners: [],
  selectedCarId: DEFAULT_SELECTED_CAR_ID,
  garagePage: DEFAULT_GARAGE_PAGE,
  totalCars: DEFAULT_TOTAL_NUM_OF_CARS,
  garageNumOfPages: DEFAULT_GARAGE_NUM_OF_PAGES,

  totalWinners: DEFAULT_TOTAL_WINNER,
  winnersPage: DEFAULT_WINNERS_PAGE,
  winnersNumOfPages: DEFAULT_WINNERS_NUM_OF_PAGES,
  winnersSortOrder: SortOrder.DESC,
  winnersSortType: SortTypes.ID,

  currentView: ViewTypes.GARAGE,
};

/**
 * @description Read only state for export. So the
 * state is immutable outside the model
 */
export const state: ReadOnlyState = trueState;
