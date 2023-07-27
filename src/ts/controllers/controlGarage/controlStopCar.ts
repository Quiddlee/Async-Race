import { changeCarState } from '../../views/garageView/carsView';
import { ApiQueries, CarStates } from '../../types';
import { startStopCarsEngine } from '../../model';

/**
 * @param carId {number}
 * @param carImgElem {HTMLElement}
 * @param carElem {HTMLElement}
 * @description Stops the car engine
 */
export default async function controlStopCar(
  carId: number,
  carImgElem: HTMLElement,
  carElem: HTMLElement,
) {
  try {
    await startStopCarsEngine(carId, ApiQueries.STOPPED);
    carImgElem.getAnimations().forEach((anim) => anim.cancel());
    changeCarState(carElem, CarStates.STOP);
    carImgElem.style.translate = '';
  } catch (err) {
    console.error(err);
  }
}
