import { loadWinners, state, updateWinnersState } from '../../model';
import { SortOrder, SortTypes } from '../../types';
import { winnersView } from '../../views';

/**
 * @param sortType {SortTypes}
 * @description control sort winners
 */
export default async function controlSortWinners(sortType: SortTypes) {
  const newSortOrder =
    state.winnersSortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;

  const [data, page] = await loadWinners(
    state.winnersPage,
    state.winnersSortOrder,
    sortType,
  );

  await updateWinnersState(data, page, false, newSortOrder, sortType);

  winnersView.render(state, false);
}
