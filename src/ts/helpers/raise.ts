/**
 * @param message {string}
 * @return {never}
 * @description Raises the error with the given message
 */
export default function raise(message: string): never {
  throw new Error(message);
}
