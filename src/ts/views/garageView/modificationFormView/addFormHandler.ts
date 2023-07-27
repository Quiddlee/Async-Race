import { FormTypes, Handler } from '../../../types';

/**
 * @param e {SubmitEvent}
 * @param handler {Handler<HTMLFormElement>}
 * @param formType {FormTypes}
 * @description Adds handler to specified form type
 */
export default function addFormHandler(
  e: SubmitEvent,
  handler: Handler<HTMLFormElement>,
  formType: FormTypes,
) {
  e.preventDefault();

  const formElement = e.target as HTMLFormElement;
  if (formElement?.dataset.type !== formType) return;

  handler(formElement);
}
