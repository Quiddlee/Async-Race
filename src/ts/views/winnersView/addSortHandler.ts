import { Handler, SortTypes } from '../../types';
import { winnersWrapper } from './init';

/**
 * @param handler {Handler<SortTypes>}
 * @description Adds sort handler to the winners page
 */
export default function addSortHandler(handler: Handler<SortTypes>) {
  winnersWrapper.addEventListener('click', (e) => {
    const sortBtn = e.target as HTMLElement;
    const sortType = sortBtn?.dataset.type;

    if (!sortBtn || !sortType || !sortBtn?.dataset.type) return;

    handler(sortType as SortTypes);
  });
}
