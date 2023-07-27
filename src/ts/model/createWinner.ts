import { ApiUrls, RequestMethods, WinnerData } from '../types';
import { ajax, isError, raise } from '../helpers';

/**
 * @param newWinnerData {WinnerData}
 * @description Creates a new winner
 */
export default async function createWinner(newWinnerData: WinnerData) {
  const res = await ajax<Response, WinnerData>({
    url: ApiUrls.WINNERS,
    uploadData: newWinnerData,
    method: RequestMethods.POST,
  });

  if (isError(res)) raise(res.message);
}
