import { getCurrentPageCars, getTrackWidth } from '../../views/garageView';
import { enableResetDisableBtn } from '../../views/garageView/controlGarageView';
import { startStopCarsEngine, switchToDriveMode } from '../../model';
import controlCreateUpdateWinner from './controlCreateUpdateWinner';
import { changeCarState } from '../../views/garageView/carsView';
import { animateDriveCar, animateStopCar } from '../../views';
import { ApiQueries } from '../../types';

/**
 * @description Starting the race
 */
export default async function controlStartRace() {
  enableResetDisableBtn();

  const [carWrappers, carImgs, carIds] = getCurrentPageCars();
  const trackWidth = getTrackWidth();
  const carsDataArr = await Promise.all(
    carIds.map((id) => startStopCarsEngine(id, ApiQueries.STARTED)),
  );
  const driveDataArr = carIds.map((id) => switchToDriveMode(id));
  const driveAnimations: Animation[] = [];
  let isWin = false;

  carsDataArr.forEach(({ velocity, distance }, i) => {
    const carImg = carImgs[i];
    const carWrapper = carWrappers[i];
    const carId = carIds[i];

    changeCarState(carWrapper);
    driveAnimations.push(
      animateDriveCar(carImg, velocity, distance, trackWidth, carId),
    );
  });

  driveDataArr.map(async (res, i) => {
    try {
      await res;
    } catch (e) {
      const driveAnimation = driveAnimations[i];
      const carImg = carImgs[i];
      const carId = carIds[i];

      if (!driveAnimation) return;
      animateStopCar(carImg, driveAnimation, carId);
    }
  });

  driveAnimations.forEach((anim) => {
    if (!anim) return;

    anim.onfinish = () => {
      if (isWin) return;
      isWin = true;

      controlCreateUpdateWinner(anim);
    };
  });
}
