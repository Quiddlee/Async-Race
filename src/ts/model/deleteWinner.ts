import { ajax, isError, raise } from '../helpers';
import { ApiUrls, RequestMethods } from '../types';

export default async function deleteWinner(id: number) {
  const res = await ajax({
    url: `${ApiUrls.WINNERS}${id}`,
    method: RequestMethods.DELETE,
  });

  if (isError(res)) raise(`Error: ${res.message}`);

  return res;
}
