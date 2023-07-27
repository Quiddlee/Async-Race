import { FormTypes, Handler } from '../../../types';
import { garageWrapper } from '..';
import { addFormHandler } from '.';

/**
 * @param handler {Handler<HTMLFormElement, Promise<void>>}
 * @description Adds handler to update car form
 */
export default function addUpdateCarHandler(handler: Handler<HTMLFormElement>) {
  garageWrapper.addEventListener('submit', (e) =>
    addFormHandler(e, handler, FormTypes.UPDATE),
  );
}
