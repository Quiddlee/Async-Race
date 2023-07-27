import { trueState } from './state';
import { GARAGE_TOTAL_CARS_ON_ONE_PAGE } from '../config';
import { calculateNumOfPages } from '../helpers';

export default function updateGarageNumOfPages() {
  trueState.garageNumOfPages = calculateNumOfPages(
    trueState.totalCars,
    GARAGE_TOTAL_CARS_ON_ONE_PAGE,
  );
}
