import { selectCar, state } from '../../model';
import { markButtonActive } from '../../views';

/**
 * @param id {number}
 * @description Adds selected car to the state
 */
export default function controlSelectCar(id: number) {
  if (id === state.selectedCarId) return;
  markButtonActive(id);
  selectCar(id);
}
