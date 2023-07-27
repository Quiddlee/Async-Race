/**
 * @param parent {HTMLElement}
 * @description Clears inner of the given parent element
 */
export default function clearParent(parent: HTMLElement) {
  const parentElement = parent;
  parentElement.innerHTML = '';
}
