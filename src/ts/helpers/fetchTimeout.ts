/**
 * @param seconds {number}
 * @returns {Promise<Error>}
 * @description After the given couple of seconds returns
 * rejected promise which means that the request took too long
 */
export default function fetchTimeout(seconds: number): Promise<Error> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(`Request took too long! Timeout after ${seconds} second`),
      );
    }, seconds * 1000);
  });
}
