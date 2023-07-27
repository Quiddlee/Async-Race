import { ApiUrls, RequestMethods, UpdateWinnersData } from '../types';
import { ajax, isError, raise } from '../helpers';

/**
 * @param id {number}
 * @param newWinnersData {UpdateWinnersData}
 * @description Updating the winner
 */
export default async function updateWinner(
  id: number,
  newWinnersData: UpdateWinnersData,
) {
  const res = await ajax<Response, UpdateWinnersData>({
    url: `${ApiUrls.WINNERS}${id}`,
    uploadData: newWinnersData,
    method: RequestMethods.PUT,
  });

  if (isError(res)) raise(res.message);
}
