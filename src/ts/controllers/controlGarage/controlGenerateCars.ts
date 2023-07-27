import { generateRandomCarColor, generateRandomCarName } from '../../helpers';
import { createCar, loadCars, updateGarageState } from '../../model';
import { GENERATE_CARS_COUNT } from '../../config';
import { render } from '../index';

export default async function controlGenerateCars() {
  const createCarQueue = Array.from({ length: GENERATE_CARS_COUNT }, () => {
    const name = generateRandomCarName();
    const color = generateRandomCarColor();

    return createCar({ color, name });
  });

  await Promise.all(createCarQueue);

  const [data, page] = await loadCars();
  updateGarageState(data, page, false);

  render();
}
