import { ApiUrls, RequestMethods, WinnerData } from '../types';
import { ajax, isError, raise } from '../helpers';

/**
 * @param id {number}
 * @returns {Promise<AjaxResponse<WinnerData>>}
 * @description Gets winner by id and returns winner data
 * if winner exist or error if winner doesn't exist
 */
export default async function getWinner(id: number) {
  const [winnersData] = await ajax<WinnerData>({
    url: `${ApiUrls.WINNERS}${id}`,
    method: RequestMethods.GET,
  });

  if (isError(winnersData)) raise(winnersData.message);

  return winnersData;
}
