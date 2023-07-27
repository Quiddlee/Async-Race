import { enableResetDisableBtn } from '../../views/garageView/controlGarageView';
import { startStopCarsEngine, switchToDriveMode } from '../../model';
import { changeCarState } from '../../views/garageView/carsView';
import { animateDriveCar, animateStopCar } from '../../views';
import { getTrackWidth } from '../../views/garageView';
import { ApiQueries } from '../../types';

/**
 * @param id {number}
 * @param carElem {HTMLElement}
 * @param carWrapper {HTMLElement>}
 * @description Controls start car
 */
export default async function controlStartCar(
  id: number,
  carElem: HTMLElement,
  carWrapper: HTMLElement,
) {
  enableResetDisableBtn();

  const velocityRes = startStopCarsEngine(id, ApiQueries.STARTED);
  const driveRes = switchToDriveMode(id);
  const trackWidth = getTrackWidth();
  let velocity = 0;
  let distance = 0;
  let driveAnimation: Animation;

  changeCarState(carWrapper);

  velocityRes.then((velocityData) => {
    ({ velocity, distance } = velocityData);

    if (!velocity || !distance) return;

    driveAnimation = animateDriveCar(
      carElem,
      velocity,
      distance,
      trackWidth,
      id,
    );
  });

  driveRes.catch(() => {
    if (driveAnimation) animateStopCar(carElem, driveAnimation, id);
  });
}
