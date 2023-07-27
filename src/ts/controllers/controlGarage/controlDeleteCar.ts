import { garageView } from '../../views';

import {
  deleteCar,
  deleteWinner,
  loadCars,
  loadWinners,
  state,
  updateGarageState,
  updateWinnersState,
} from '../../model';

/**
 * @param id {number}
 * @description Deletes the car and re-renders the view with the fresh data
 */
export default async function controlDeleteCar(id: number) {
  try {
    const waitDeleteCar = deleteCar(id);
    const isWinnerExist = state.winners.some((winner) => winner.id === id);
    let waitDeleteWinner;

    if (isWinnerExist) waitDeleteWinner = deleteWinner(id);

    await Promise.allSettled([waitDeleteCar, waitDeleteWinner]);

    const carsRes = loadCars();

    if (isWinnerExist) {
      const winnersRes = loadWinners();

      const [winnersData, winnersPage] = await winnersRes;
      updateWinnersState(winnersData, winnersPage, false);
    }

    const [carsData, carsPage] = await carsRes;
    updateGarageState(carsData, carsPage, false);

    const isCurrentPageNotExist = state.garagePage > state.garageNumOfPages;

    if (isCurrentPageNotExist) {
      const [newData, newPage] = await loadCars(carsPage - 1);
      updateGarageState(newData, newPage, false);
    }

    garageView.render(state);
  } catch (e) {
    // bock
  }
}
