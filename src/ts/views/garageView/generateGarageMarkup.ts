import { generateModificationFormMarkup } from './modificationFormView';
import { generateControlGarageMarkup } from './controlGarageView';
import { generatePaginationMarkup } from '../paginationView';
import { generateCarsMarkup } from './carsView';
import { State } from '../../types';
import { GARAGE_TOTAL_CARS_ON_ONE_PAGE } from '../../config';

/**
 * @param state {State}
 * @description Generates the markup for the garage page
 */
export default function generateGarageMarkup(state: State) {
  const formMarkup = generateModificationFormMarkup();
  const garageControlsMarkup = generateControlGarageMarkup();
  const carsMarkup = generateCarsMarkup(
    state.garageCars,
    state.totalCars,
    state.garagePage,
  );
  const garagePaginationMarkup = generatePaginationMarkup(
    state.totalCars,
    state.garagePage,
    state.garageNumOfPages,
    GARAGE_TOTAL_CARS_ON_ONE_PAGE,
  );

  return `
    ${formMarkup}
    ${garageControlsMarkup}
    ${carsMarkup}
    ${garagePaginationMarkup}
  `;
}
