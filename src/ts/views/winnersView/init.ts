export const winnersWrapper = document.createElement('section');

/**
 * @description Initializes the winners view
 */
export function init() {
  winnersWrapper.classList.add(
    'winners',
    'py-2-4',
    'px-3-2',
    'hidden',
    'hidden--winners',
  );
  return winnersWrapper;
}
