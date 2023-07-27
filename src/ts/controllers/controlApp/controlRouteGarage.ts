import { appElem } from '../../views/appView';
import { winnersWrapper } from '../../views/winnersView';
import { state, updateGarageState } from '../../model';
import { ViewTypes } from '../../types';
import { garageWrapper } from '../../views/garageView';

/**
 * @description control route garage
 */
export default function controlRouteGarage() {
  if (state.currentView === ViewTypes.GARAGE) return;

  garageWrapper.classList.remove('hidden', 'hidden--garage');
  winnersWrapper.classList.add('hidden', 'hidden--winners');

  (
    document.querySelector(`[data-type="${ViewTypes.WINNERS}"]`) as HTMLElement
  ).classList.remove('btn--active');
  (
    document.querySelector(`[data-type="${ViewTypes.GARAGE}"]`) as HTMLElement
  ).classList.add('btn--active');

  updateGarageState(
    [state.garageCars, state.totalCars.toString()],
    state.garagePage,
    true,
  );

  appElem.append(winnersWrapper);
}
