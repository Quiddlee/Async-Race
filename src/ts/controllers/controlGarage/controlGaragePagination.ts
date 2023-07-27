import { loadCars, state, updateGarageState } from '../../model';
import { garageView } from '../../views';

/**
 * @param newPage {number}
 * @description Controls the garage pagination
 */
export default async function controlGaragePagination(newPage: number) {
  try {
    const [data, page] = await loadCars(newPage);
    updateGarageState(data, page, false);

    garageView.render(state);
  } catch (e) {
    console.error(e);
  }
}
