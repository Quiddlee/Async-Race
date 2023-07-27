import { garageWrapper, generateGarageMarkup, update } from '.';
import { generatePaginationMarkup } from '../paginationView';
import { generateCarsMarkup } from './carsView';
import { ReadOnlyState } from '../../types';
import clearParent from '../view';
import { markButtonActive } from '../index';
import { GARAGE_TOTAL_CARS_ON_ONE_PAGE } from '../../config';

/**
 * @param state {ReadOnlyState}
 * @description Renders the garage page
 */
export default function render(state: ReadOnlyState) {
  if (garageWrapper.innerHTML !== '') {
    const carsWrapper = document.querySelector('.cars-wrapper') as HTMLElement;
    const paginationWrapper = document.querySelector(
      '.pagination',
    ) as HTMLElement;

    carsWrapper.remove();
    const carsMarkup = generateCarsMarkup(
      state.garageCars,
      state.totalCars,
      state.garagePage,
    );
    paginationWrapper.insertAdjacentHTML('beforebegin', carsMarkup);

    update(
      generatePaginationMarkup(
        state.totalCars,
        state.garagePage,
        state.garageNumOfPages,
        GARAGE_TOTAL_CARS_ON_ONE_PAGE,
      ),
      paginationWrapper,
    );
  } else {
    clearParent(garageWrapper);
    const garageMarkup = generateGarageMarkup(state);

    garageWrapper.insertAdjacentHTML('beforeend', garageMarkup);
  }

  markButtonActive(state.selectedCarId);
}
