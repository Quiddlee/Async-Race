/**
 * @param id {number}
 * @description Marks button with specified id as active
 */
export default function markButtonActive(id: number) {
  document
    .querySelectorAll('.btn--active')
    .forEach((activeBtn) => activeBtn.classList.remove('btn--active'));
  document
    .querySelector(`[data-id='${id}']`)
    ?.querySelector('.btn--tertiary')
    ?.classList.add('btn--active');
}
