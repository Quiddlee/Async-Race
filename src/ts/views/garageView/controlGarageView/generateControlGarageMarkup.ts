import { ControlGarageButtonTypes } from '../../../types';

/**
 * @param isEnable {boolean}
 * @description Enable or disable reset btn based on a passed argument
 */
export function enableResetDisableBtn(isEnable = true) {
  const resetBtn = document.querySelector(
    `[data-type="${ControlGarageButtonTypes.RESET}"]`,
  ) as HTMLButtonElement;

  if (isEnable) {
    resetBtn.disabled = false;
    resetBtn.classList.remove('btn--disabled');
  } else {
    resetBtn.disabled = true;
    resetBtn.classList.add('btn--disabled');
  }
}

export function generateControlGarageMarkup() {
  return `
    <div class='garage-controls py-3-2 px-3-2'>
      <button class='btn btn--tertiary' data-type='${ControlGarageButtonTypes.RACE}'>Race</button>
      <button class='btn btn--tertiary btn--disabled' data-type='${ControlGarageButtonTypes.RESET}' disabled>Reset</button>
      <button class='btn btn--tertiary' data-type='${ControlGarageButtonTypes.GENERATE_CARS}'>Generate Cars</button>
    </div>
  `;
}
