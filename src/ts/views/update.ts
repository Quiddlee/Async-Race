export default function update(
  generatedMarkup: string,
  parentElement: HTMLElement,
) {
  const virtualDom = document
    .createRange()
    .createContextualFragment(generatedMarkup);
  const virtualParent = virtualDom.firstElementChild as HTMLElement;
  const newElements = virtualParent.querySelectorAll('*');
  const currElements = parentElement.querySelectorAll('*');
  const { children: virtualChildren } = virtualParent;
  const { children } = parentElement;

  const updatesQueue: (() => void)[] = [];

  const biggerChildren =
    virtualChildren.length > children.length ? virtualChildren : children;

  if (newElements.length !== currElements.length) {
    [...biggerChildren].forEach((_, i) => {
      const currChild = parentElement.children[i];
      const newChild = virtualParent.children[i];

      if (!currChild) {
        updatesQueue.push(() => parentElement.append(newChild));
        return;
      }

      if (!newChild) {
        updatesQueue.push(() => currChild.remove());
      }
    });
  }

  newElements.forEach((newElem, i) => {
    const currElem = currElements[i];

    if (!currElem || !newElem) return;

    if (newElem.isEqualNode(currElem)) return;

    if (newElem.firstChild?.nodeValue?.trim() !== '')
      updatesQueue.push(() => {
        currElem.innerHTML = newElem.innerHTML;
      });

    [...newElem.attributes].forEach(({ name, value }) =>
      updatesQueue.push(() => currElem.setAttribute(name, value)),
    );
  });

  requestAnimationFrame(() => {
    updatesQueue.forEach((updateFn) => updateFn());
  });
}
