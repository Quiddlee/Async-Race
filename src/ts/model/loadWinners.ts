import { AjaxResponse, ApiQueries, ApiUrls, RequestMethods, SortOrder, SortTypes, WinnerData } from '../types';
import { ajax, isError, raise } from '../helpers';
import { WINNERS_TOTAL_CARS_ON_ONE_PAGE } from '../config';
import { state } from './state';

/**
 * @param page {number}
 * @param limit {number}
 * @param sortType {SortTypes}
 * @param sortOrder {SortOrder}
 * @return {Promise<[WinnerData[], string]>}
 * @description Gets the winners from the server and returns
 * them as an array of objects with the following structure:
 * { id: number, wins: number, time: number }
 */
export default async function loadWinners(
  page: number = state.winnersPage,
  sortOrder: SortOrder = state.winnersSortOrder,
  sortType: SortTypes = SortTypes.ID,
  limit: number = WINNERS_TOTAL_CARS_ON_ONE_PAGE,
) {
  const winnersData = await ajax<WinnerData[]>({
    url: `${ApiUrls.WINNERS}?${ApiQueries.SORT}${sortType}&${ApiQueries.PAGE}${page}&${ApiQueries.LIMIT}${limit}&${ApiQueries.ORDER}${sortOrder}`,
    method: RequestMethods.GET,
  });

  if (isError(winnersData)) raise(`getWinners: error (${winnersData.message})`);

  return [winnersData, page] as unknown as [AjaxResponse<WinnerData[]>, number];
}
