import { ApiUrls, RequestMethods, UploadCarData } from '../types';
import { ajax, isError, raise } from '../helpers';

/**
 * @param newCarData {UploadCarData}
 * @description Creates the car with specified name and color
 */
export default async function createCar(newCarData: UploadCarData) {
  const res = await ajax<Response>({
    url: ApiUrls.GARAGE,
    uploadData: newCarData,
    method: RequestMethods.POST,
  });

  if (isError(res)) raise(res.message);
}
