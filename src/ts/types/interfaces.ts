import { SortOrder, SortTypes, ViewTypes } from './enums';
import { CarsData, WinnersTableData } from './types';

export interface State {
  garageCars: CarsData;
  winners: WinnersTableData[];
  selectedCarId: number;
  garagePage: number;
  totalCars: number;
  garageNumOfPages: number;
  winnersPage: number;
  totalWinners: number;
  winnersNumOfPages: number;
  winnersSortOrder: SortOrder;
  currentView: ViewTypes;
  winnersSortType: SortTypes;
}
