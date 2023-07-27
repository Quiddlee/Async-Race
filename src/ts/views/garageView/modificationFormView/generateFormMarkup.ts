import { FormTypes } from '../../../types';

/**
 * @param formType {FormTypes}
 * @return {string}
 * @description Generates form markup with specified type
 */
export default function generateFormMarkup(formType: FormTypes) {
  return `
      <div class='title title--form ${
        formType === FormTypes.UPDATE ? 'mt-1-6' : ''
      }'>${
    formType === FormTypes.CREATE ? 'Create Car 🏎️' : 'Update Car 💅'
  }</div>

      <form class='form mt-0-4' data-type='${formType}'>
        <div class='form__input'>
          <input class='input input--text py-0-8 px-1-6' type='text' placeholder='Car name'>
          <span class='input__background'></span>
        </div>
        <input class='input input--color px-1-2 py-1-2' type='color'>
        <button class='btn btn--secondary'>${formType}</button>
      </form>
  `;
}
