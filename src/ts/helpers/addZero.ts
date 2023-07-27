/**
 * @param num {number}
 * @description Adds zero to the beginning of the number if it is less than 10
 */
export default function addZero(num: number) {
  return num.toString().padStart(2, '0');
}
