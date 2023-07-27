import { GarageViewCarControlButtonsContent, Handler } from '../../../types';
import addCarControlsHandler from './addCarControlsHandler';
import { garageWrapper } from '..';

/**
 * @param handler {Handler<number>}
 * @description Adds handler to delete car button
 */
export default function addDeleteCarHandler(handler: Handler<number>) {
  garageWrapper.addEventListener('click', (e) => {
    addCarControlsHandler(
      e,
      handler,
      GarageViewCarControlButtonsContent.DELETE,
    );
  });
}
