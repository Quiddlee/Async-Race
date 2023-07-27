import { appElem } from './appView';

/**
 * @param element {HTMLElement}
 * @param velocity {number}
 * @param distance {number}
 * @param trackWidth {number}
 * @param carId {number}
 * @description Animates cars drive state
 */
export function animateDriveCar(
  element: HTMLElement,
  velocity: number,
  distance: number,
  trackWidth: number,
  carId: number,
) {
  const endTime = distance / velocity;

  const animation = element.animate(
    { translate: ['0', `${trackWidth - 150}px 0`] },
    {
      duration: endTime,
      fill: 'forwards',
      easing: 'cubic-bezier(.28, -0.14, .34, 1.05)',
    },
  );

  animation.onfinish = () => {
    if (!appElem.querySelector(`[data-id='${carId}']`)) return;

    animation?.commitStyles();
    animation?.cancel();
  };

  return animation;
}

/**
 * @param element {HTMLElement}
 * @param driveAnimation {Animation}
 * @param carId {number}
 * @description Animates cars stop state
 */
export function animateStopCar(
  element: HTMLElement,
  driveAnimation: Animation,
  carId: number,
) {
  driveAnimation?.pause();
  const currElemPosPx = getComputedStyle(element).translate;
  const currElemPosNum = Number(currElemPosPx.slice(0, -2));
  const newElemPos = `${currElemPosNum + 50}px`;

  driveAnimation?.cancel();

  const stopAnimation = element.animate(
    {
      translate: [`${currElemPosNum}px`, newElemPos],
    },
    {
      duration: 2000,
      fill: 'forwards',
      easing: 'cubic-bezier(.21, .61, .93, .36)',
    },
  );

  stopAnimation.onfinish = () => {
    if (!appElem.querySelector(`[data-id='${carId}']`)) return;

    stopAnimation?.commitStyles();
    stopAnimation?.cancel();
  };

  return stopAnimation;
}
