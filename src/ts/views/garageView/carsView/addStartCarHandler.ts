import { GarageViewCarDriveButtonsContent, Handler } from '../../../types';
import { garageWrapper } from '..';

/**
 * @param handler {Handler<number, HTMLElement, HTMLElement>}
 * @description Adds start car handler
 */
export default function addStartCarHandler(
  handler: Handler<number, HTMLElement, HTMLElement>,
) {
  garageWrapper.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const carElem = target.closest('.car') as HTMLElement;
    const carId = carElem?.dataset.id;
    const animatedElem = carElem?.querySelector('.car__img') as HTMLElement;
    const carTrackElem = carElem?.querySelector('.car__track') as HTMLElement;

    if (
      !carElem ||
      !carId ||
      !carTrackElem ||
      !animatedElem ||
      target.textContent !== GarageViewCarDriveButtonsContent.A
    )
      return;

    handler(Number(carId), animatedElem, carElem);
  });
}
