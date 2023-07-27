import { Ajax, AjaxResponse, FetchData, Headers, UploadCarData, UploadData } from '../types';
import { createRequest, fetchTimeout, isError, raise } from '.';
import { TIMEOUT_SECONDS } from '../config';

/**
 * @param url {Url}
 * @param uploadData
 * @param method {RequestMethods}
 * @description Performing AJAX requests with
 * given URL address, Upload data & Method
 */
export default async function ajax<
  TFetchData extends FetchData,
  TUploadData extends UploadData = UploadCarData,
>({
  url,
  uploadData,
  method,
}: Ajax<TUploadData>): Promise<AjaxResponse<TFetchData>> {
  const request = createRequest<TUploadData>({ url, uploadData, method });
  const response = await Promise.race([request, fetchTimeout(TIMEOUT_SECONDS)]);

  if (isError(response)) {
    raise(`Error occurred! (${response.message})`);
  }

  if (!response.ok) {
    raise(`Error occurred! (${response.status})`);
  }

  const totalNumOfCars = response.headers.get(Headers.TOTAL_COUNT) || '';
  const data: TFetchData = await response.json();

  if (isError(data)) {
    raise(`Error occurred! (${data.message})`);
  }

  return [data, totalNumOfCars];
}
