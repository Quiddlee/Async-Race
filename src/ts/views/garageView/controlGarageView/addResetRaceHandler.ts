import { ControlGarageButtonTypes, Handler } from '../../../types';
import { garageWrapper } from '../init';

/**
 * @param handler {Handler}
 * @description Adds handler for reset the race
 */
export default function addResetRaceHandler(handler: Handler) {
  garageWrapper.addEventListener('click', (e) => {
    const resetBtn = e.target as HTMLButtonElement;

    if (!resetBtn || resetBtn.dataset.type !== ControlGarageButtonTypes.RESET)
      return;

    handler();
  });
}
