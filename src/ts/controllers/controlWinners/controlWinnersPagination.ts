import { loadWinners, state, updateWinnersState } from '../../model';
import { winnersView } from '../../views';

/**
 * @param newPage {number}
 * @description Controls the winners pagination
 */
export default async function controlWinnersPagination(newPage: number) {
  try {
    const [data, page] = await loadWinners(newPage);
    await updateWinnersState(data, page, false);

    winnersView.render(state);
  } catch (e) {
    console.error(e);
  }
}
