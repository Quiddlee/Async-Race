import { ajax, isError, raise } from '../helpers';
import { ApiUrls, RequestMethods } from '../types';
import loadCars from './loadCars';

/**
 * @param id {number}
 * @return {Response}
 * @description Deletes the car from database and updating the state
 */
export default async function deleteCar(id: number) {
  const res = await ajax<Response>({
    url: `${ApiUrls.GARAGE}${id}`,
    method: RequestMethods.DELETE,
  });

  if (isError(res)) raise(res.message);

  await loadCars();
  return res;
}
