import { Handler, ViewTypes } from '../../types';
import { generateRouterMarkup } from '../index';

export const appElem = document.createElement('main');

/**
 * @description Create app element and append it to the body
 */
export function createApp() {
  appElem.setAttribute('id', 'app');
  document.body.append(appElem);
}

/**
 * @description Render router buttons
 */
export function render() {
  const routerMarkup = generateRouterMarkup();
  appElem.insertAdjacentHTML('afterbegin', routerMarkup);
}

/**
 * @param handler {Handler}
 * @param type {ViewTypes}
 * @description Add router handler
 */
export function addRouterHandler(handler: Handler, type: ViewTypes) {
  appElem.addEventListener('click', (e) => {
    const btn = e.target as HTMLButtonElement;

    if (btn.dataset.type !== type) return;

    handler();
  });
}
