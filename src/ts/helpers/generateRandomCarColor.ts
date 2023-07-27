import { MAX_HEXADECIMAL_VAL, RADIX_HEX } from '../config';

export default function generateRandomCarColor() {
  const rndmColorNum = Math.floor(Math.random() * MAX_HEXADECIMAL_VAL);
  const colorHex = rndmColorNum.toString(RADIX_HEX);

  return `#${colorHex}`;
}
