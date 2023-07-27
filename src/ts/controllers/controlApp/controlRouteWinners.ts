import { loadWinners, state, updateWinnersState } from '../../model';
import { winnersWrapper } from '../../views/winnersView';
import { garageWrapper } from '../../views/garageView';
import { appElem } from '../../views/appView';
import { winnersView } from '../../views';
import { ViewTypes } from '../../types';

/**
 * @description control route winners
 */
export default async function controlRouteWinners() {
  if (state.currentView === ViewTypes.WINNERS) return;

  winnersWrapper.classList.remove('hidden', 'hidden--winners');
  garageWrapper.classList.add('hidden', 'hidden--garage');

  (
    document.querySelector(`[data-type="${ViewTypes.WINNERS}"]`) as HTMLElement
  ).classList.add('btn--active');
  (
    document.querySelector(`[data-type="${ViewTypes.GARAGE}"]`) as HTMLElement
  ).classList.remove('btn--active');

  appElem.append(garageWrapper);

  const [data, page] = await loadWinners();

  await updateWinnersState(data, page, true);
  winnersView.render(state);
}
