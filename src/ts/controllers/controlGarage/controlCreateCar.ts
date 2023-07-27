import { createCar, loadCars, updateGarageState } from '../../model';
import { createUploadDataFromForm } from '../../helpers';
import { render } from '../index';

/**
 * @param formElement {HTMLFormElement}
 * @description Creates new car in database and
 * re-renders the view with updated state
 */
export default async function controlCreateCar(formElement: HTMLFormElement) {
  const carData = createUploadDataFromForm(formElement);

  try {
    await createCar(carData);

    const [data, page] = await loadCars();
    updateGarageState(data, page, false);

    render();
  } catch (e) {
    console.error(e);
  }
}
