import { ApiUrls, RequestMethods, UploadCarData } from '../types';
import { ajax, isError, raise } from '../helpers';
import { trueState } from './state';

/**
 * @param newCarData {UploadCarData}
 * @description Updates the car with specificness name and color
 */
export default async function updateCar(newCarData: UploadCarData) {
  const res = await ajax<Response>({
    url: `${ApiUrls.GARAGE}${trueState.selectedCarId}`,
    uploadData: newCarData,
    method: RequestMethods.PUT,
  });

  if (isError(res)) raise(res.message);
}
