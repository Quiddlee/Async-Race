import { GarageViewCarControlButtonsContent, Handler } from '../../../types';

/**
 * @param e {MouseEvent}
 * @param handler {Handler<number, HTMLButtonElement>}
 * @param type {GarageViewCarControlButtonsContent}
 * @description Adds handler to select or delete
 * button according to passed argument
 */
export default function addCarControlsHandler(
  e: MouseEvent,
  handler: Handler<number>,
  type: GarageViewCarControlButtonsContent,
) {
  const btn = e.target as HTMLButtonElement;
  const car = btn.closest('.car') as HTMLDivElement;

  if (!car || btn.textContent?.toLowerCase() !== type) return;

  const carId = Number(car.dataset.id);

  handler(carId);
}
