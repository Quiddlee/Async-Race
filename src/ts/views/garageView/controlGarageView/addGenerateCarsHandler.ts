import { ControlGarageButtonTypes, Handler } from '../../../types';
import { garageWrapper } from '../init';

/**
 * @param handler {Handler}
 * @descriptiom Adds generate 100 cars button handler
 */
export default function addGenerateCarsHandler(handler: Handler) {
  garageWrapper.addEventListener('click', (e) => {
    const resetBtn = e.target as HTMLButtonElement;

    if (
      !resetBtn ||
      resetBtn.dataset.type !== ControlGarageButtonTypes.GENERATE_CARS
    )
      return;

    handler();
  });
}
