import { FormTypes, Handler } from '../../../types';
import { garageWrapper } from '..';
import { addFormHandler } from '.';

/**
 * @param handler {Handler<HTMLFormElement, Promise<void>>}
 * @description Adds handler to create car form
 */
export default function addCreateCarHandler(handler: Handler<HTMLFormElement>) {
  garageWrapper.addEventListener('submit', (e) =>
    addFormHandler(e, handler, FormTypes.CREATE),
  );
}
