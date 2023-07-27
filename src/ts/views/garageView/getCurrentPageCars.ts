import { garageWrapper } from './init';

/**
 * @description Gets all the cars on the current page
 * @return {[HTMLElement[], HTMLElement[], number[]]}
 */
export default function getCurrentPageCars() {
  const cars = [...garageWrapper.querySelectorAll<HTMLElement>('.car')];
  const carImgs = [...garageWrapper.querySelectorAll<HTMLElement>('.car__img')];
  const carIds = cars.map((elem) => Number(elem.dataset.id));

  return [cars, carImgs, carIds] as [HTMLElement[], HTMLElement[], number[]];
}
