import { AjaxResponse, CarsData, ViewTypes } from '../types';
import updateGarageNumOfPages from './updateGarageNumOfPages';
import { trueState } from './state';

export default function updateGarageState(
  [data, totalNumOfCars]: AjaxResponse<CarsData>,
  newPage: number,
  changeView: boolean,
) {
  const oldNumOfCars = trueState.totalCars;
  const newNumOfCars = Number(totalNumOfCars);

  trueState.garageCars = data;
  trueState.garagePage = newPage;
  trueState.totalCars = newNumOfCars;

  if (changeView) trueState.currentView = ViewTypes.GARAGE;

  if (oldNumOfCars !== newNumOfCars) updateGarageNumOfPages();
}
