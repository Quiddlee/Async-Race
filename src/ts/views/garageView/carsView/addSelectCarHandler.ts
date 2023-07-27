import { GarageViewCarControlButtonsContent, Handler } from '../../../types';
import { addCarControlsHandler } from '.';
import { garageWrapper } from '../init';

/**
 * @param handler {Handler<number>}
 * @description Adds handler to select car button
 */
export default function addSelectCarHandler(handler: Handler<number>) {
  garageWrapper.addEventListener('click', (e) => {
    addCarControlsHandler(
      e,
      handler,
      GarageViewCarControlButtonsContent.SELECT,
    );
  });
}
