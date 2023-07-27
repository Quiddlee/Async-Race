import { enableResetDisableBtn } from '../../views/garageView/controlGarageView';
import { getCurrentPageCars } from '../../views/garageView';
import { controlStopCar } from './index';

/**
 * @description Stops all cars on the current page
 */
export default function controlResetRace() {
  const [cars, carImgs, carIds] = getCurrentPageCars();

  cars.forEach((car, i) => {
    const carId = carIds[i];
    const carImg = carImgs[i];
    if (carImg.getAnimations().length !== 0 || carImg.style.translate !== '')
      controlStopCar(carId, carImg, car);
  });

  enableResetDisableBtn(false);
}
