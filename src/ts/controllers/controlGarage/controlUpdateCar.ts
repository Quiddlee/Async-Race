import { loadCars, updateCar, updateGarageState } from '../../model';
import { createUploadDataFromForm } from '../../helpers';
import { render } from '../index';

/**
 * @param formElement {HTMLFormElement}
 * @return {Promise<void>}
 * @description Updates existed car in database and
 * re-renders the view with updated state
 */
export default async function controlUpdateCar(
  formElement: HTMLFormElement,
): Promise<void> {
  const carData = createUploadDataFromForm(formElement);

  try {
    await updateCar(carData);

    const [data, page] = await loadCars();
    updateGarageState(data, page, false);

    render();
  } catch (e) {
    console.error(e);
  }
}
