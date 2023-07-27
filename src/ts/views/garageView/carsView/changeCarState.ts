import { CarStates } from '../../../types';

/**
 * @param carWrapper {HTMLElement}
 * @param state {CarStates}
 * @description Changes car state
 */
export default function changeCarState(
  carWrapper: HTMLElement,
  state?: CarStates,
) {
  const [btnStartCar, btnStopCar] =
    carWrapper.querySelectorAll<HTMLButtonElement>('.car__btn-drive');

  if (state === CarStates.DRIVE) {
    btnStartCar.classList.add('btn--disabled');
    btnStopCar.classList.remove('btn--disabled');

    btnStartCar.disabled = true;
    btnStopCar.disabled = false;
  } else if (state === CarStates.STOP) {
    btnStartCar.classList.remove('btn--disabled');
    btnStopCar.classList.add('btn--disabled');

    btnStartCar.disabled = false;
    btnStopCar.disabled = true;
  } else {
    btnStartCar.classList.toggle('btn--disabled');
    btnStopCar.classList.toggle('btn--disabled');

    btnStartCar.disabled = !btnStartCar.disabled;
    btnStopCar.disabled = !btnStopCar.disabled;
  }
}
