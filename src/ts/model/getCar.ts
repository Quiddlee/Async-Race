import { ajax, isError, raise } from '../helpers';
import { ApiUrls, Car, RequestMethods } from '../types';

/**
 * @param id {number}
 * @description Get cars data by ID
 */
export default async function getCar(id: number) {
  const [carData] = await ajax<Car>({
    url: `${ApiUrls.GARAGE}${id}`,
    method: RequestMethods.GET,
  });

  if (isError(carData)) raise(`getCar: error (${carData.message})`);

  return carData;
}
