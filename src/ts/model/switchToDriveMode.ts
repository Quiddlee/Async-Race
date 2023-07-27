import { ajax } from '../helpers';
import {
  ApiQueries,
  ApiUrls,
  DriveModeResponse,
  RequestMethods,
} from '../types';

export default function switchToDriveMode(id: number) {
  const res = ajax<DriveModeResponse>({
    url: `${ApiUrls.ENGINE}?${ApiQueries.ID}${id}&${ApiQueries.STATUS}${ApiQueries.DRIVE}`,
    method: RequestMethods.PATCH,
  });

  return res;
}
