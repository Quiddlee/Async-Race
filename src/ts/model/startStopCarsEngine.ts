import {
  ApiQueries,
  ApiUrls,
  RequestMethods,
  StartCarResponse,
  StartStopState,
} from '../types';
import { ajax, isError, raise } from '../helpers';

export default async function startStopCarsEngine(
  id: number,
  state: StartStopState,
) {
  const res = await ajax<StartCarResponse>({
    url: `${ApiUrls.ENGINE}?${ApiQueries.ID}${id}&${ApiQueries.STATUS}${state}`,
    method: RequestMethods.PATCH,
  });

  if (isError(res)) raise(res.message);

  return res[0];
}
