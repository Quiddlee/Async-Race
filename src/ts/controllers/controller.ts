import { controlRouteGarage, controlRouteWinners, render } from '.';

import { controlSortWinners, controlWinnersPagination } from './controlWinners';
import { garageView, winnersView } from '../views';
import { ViewTypes } from '../types';

import * as appView from '../views/appView';
import * as model from '../model';

import '../../sass/main.scss';
import {
  controlCreateCar,
  controlDeleteCar,
  controlGaragePagination,
  controlGenerateCars,
  controlResetRace,
  controlSelectCar,
  controlStartCar,
  controlStartRace,
  controlStopCar,
  controlUpdateCar,
} from './controlGarage';

/**
 * @description Initializes the app
 */
async function init() {
  const garageWrapper = garageView.init();
  const winnersWrapper = winnersView.init();

  appView.createApp();
  appView.render();
  appView.appElem.append(garageWrapper, winnersWrapper);
  document.body.append(appView.appElem);

  try {
    const [data, page] = await model.loadWinners();
    model.updateWinnersState(data, page, false);
  } catch (e) {
    console.error(e);
  }

  try {
    const [data, page] = await model.loadCars();
    model.updateGarageState(data, page, false);
  } catch (e) {
    console.error(e);
  }

  render();
  winnersView.winnersWrapper.classList.add('hidden');

  appView.addRouterHandler(controlRouteWinners, ViewTypes.WINNERS);
  appView.addRouterHandler(controlRouteGarage, ViewTypes.GARAGE);

  garageView.addCreateCarHandler(controlCreateCar);
  garageView.addUpdateCarHandler(controlUpdateCar);
  garageView.addSelectCarHandler(controlSelectCar);
  garageView.addDeleteCarHandler(controlDeleteCar);
  garageView.addStartCarHandler(controlStartCar);
  garageView.addStopCarHandler(controlStopCar);
  garageView.addStartRaceHandler(controlStartRace);
  garageView.addResetRaceHandler(controlResetRace);
  garageView.addGenerateCarsHandler(controlGenerateCars);
  garageView.addPaginationHandlers(
    controlGaragePagination,
    model.state,
    ViewTypes.GARAGE,
  );

  winnersView.addSortHandler(controlSortWinners);
  winnersView.addPaginationHandlers(
    controlWinnersPagination,
    model.state,
    ViewTypes.WINNERS,
  );
}

init();
