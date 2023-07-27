/**
 * @param response {Response}
 * @return {boolean}
 * @description Type guard to check if response is the error or not
 */
export default function isError<TResponse>(
  response: TResponse | Error,
): response is Error {
  return response instanceof Error;
}
