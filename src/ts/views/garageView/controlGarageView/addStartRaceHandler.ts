import { ControlGarageButtonTypes, Handler } from '../../../types';
import { garageWrapper } from '../init';

/**
 * @param handler {Handler}
 * @description Adds start race handler
 */
export default function addStartRaceHandler(handler: Handler) {
  garageWrapper.addEventListener('click', (e) => {
    const raceBtn = e.target as HTMLButtonElement;

    if (!raceBtn || raceBtn.dataset.type !== ControlGarageButtonTypes.RACE)
      return;

    handler();
  });
}
