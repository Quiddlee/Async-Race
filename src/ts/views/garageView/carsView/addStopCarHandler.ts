import { GarageViewCarDriveButtonsContent, Handler } from '../../../types';
import { garageWrapper } from '../init';

export default function addStopCarHandler(
  handler: Handler<number, HTMLElement, HTMLElement>,
) {
  garageWrapper.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const carElem = target.closest('.car') as HTMLElement;
    const carId = carElem?.dataset.id;
    const carImgElem = carElem?.querySelector('.car__img') as HTMLElement;

    if (
      !carElem ||
      !carId ||
      !carImgElem ||
      target.textContent !== GarageViewCarDriveButtonsContent.B
    )
      return;

    handler(Number(carId), carImgElem, carElem);
  });
}
