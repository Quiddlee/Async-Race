import { trueState } from './state';

/**
 * @param id {number}
 * @description Updating the state with specified car id
 */
export default function selectCar(id: number) {
  if (trueState.selectedCarId === id) return;
  trueState.selectedCarId = id;
}
