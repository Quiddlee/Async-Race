import { ajax, isError, raise } from '../helpers';
import { AjaxResponse, ApiQueries, ApiUrls, CarsData, RequestMethods } from '../types';
import { GARAGE_TOTAL_CARS_ON_ONE_PAGE } from '../config';
import { trueState } from './state';

/**
 * @return {Promise<[AjaxResponse, number]>}
 * @description Loads cars from the API and updating the state
 */
export default async function loadCars(
  page: number = trueState.garagePage,
): Promise<[AjaxResponse<CarsData>, number]> {
  const data = await ajax<CarsData>({
    url: `${ApiUrls.GARAGE}?${ApiQueries.PAGE}${page}&${ApiQueries.LIMIT}${GARAGE_TOTAL_CARS_ON_ONE_PAGE}`,
    method: RequestMethods.GET,
  });

  if (isError(data)) raise(data.message);

  return [data, page] as [AjaxResponse<CarsData>, number];
}
