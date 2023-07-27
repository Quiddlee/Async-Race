import { generateRandomCarName } from '.';
import { UploadCarData } from '../types';

/**
 * @param formElement {HTMLFormElement}
 * @return {UploadCarData}
 * @description Creates new readonly car data
 * based on the given form data
 */
export default function createUploadDataFromForm(
  formElement: HTMLFormElement,
): UploadCarData {
  const inputElements =
    formElement.querySelectorAll<HTMLInputElement>('.input');
  const [name, color] = [...inputElements].map((input) => {
    const val = input.value || generateRandomCarName();

    input.value = '';
    input.blur();
    return val;
  });

  return {
    name,
    color,
  };
}
