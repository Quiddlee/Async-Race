import { Ajax, Headers, UploadData } from '../types';

/**
 * @param url {string}
 * @param uploadData
 * @param method {RequestMethods}
 * @return {Promise<Response>}
 * @description Creates the right request according to specified arguments
 */
export default function createRequest<TUploadData extends UploadData>({
  url,
  uploadData,
  method,
}: Ajax<TUploadData>): Promise<Response> {
  return uploadData && method
    ? fetch(url, {
        method,
        headers: {
          'Content-Type': Headers.JSON,
        },
        body: JSON.stringify(uploadData),
      })
    : !uploadData && method
    ? fetch(url, { method })
    : fetch(url);
}
