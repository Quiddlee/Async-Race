import generateGarageMarkup from './generateGarageMarkup';
import getCurrentPageCars from './getCurrentPageCars';
import renderWinMessage from './renderWinMessage';
import { garageWrapper, init } from './init';
import getTrackWidth from './getTrackWidth';
import update from '../update';
import render from './render';

import {
  addCarControlsHandler,
  addDeleteCarHandler,
  addSelectCarHandler,
  addStartCarHandler,
  addStopCarHandler,
  changeCarState,
  generateCarsMarkup,
} from './carsView';

import {
  addPaginationHandlers,
  generatePaginationMarkup,
} from '../paginationView';

import {
  addCreateCarHandler,
  addFormHandler,
  addUpdateCarHandler,
} from './modificationFormView';

import {
  addGenerateCarsHandler,
  addResetRaceHandler,
  addStartRaceHandler,
} from './controlGarageView';

export {
  generatePaginationMarkup,
  addGenerateCarsHandler,
  addCarControlsHandler,
  addPaginationHandlers,
  generateGarageMarkup,
  addResetRaceHandler,
  addStartRaceHandler,
  addSelectCarHandler,
  addCreateCarHandler,
  addDeleteCarHandler,
  addUpdateCarHandler,
  addStartCarHandler,
  getCurrentPageCars,
  generateCarsMarkup,
  addStopCarHandler,
  renderWinMessage,
  changeCarState,
  addFormHandler,
  getTrackWidth,
  garageWrapper,
  render,
  update,
  init,
};
