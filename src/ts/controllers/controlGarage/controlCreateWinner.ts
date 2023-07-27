import { DEFAULT_WIN_VALUE } from '../../config';
import { createWinner } from '../../model';
import { WinnerData } from '../../types';

/**
 * @param id {number}
 * @param time {number}
 * @description Creates the winner with specified id and time
 */
export default async function controlCreateWinner(id: number, time: number) {
  const winnerData: WinnerData = {
    id,
    wins: DEFAULT_WIN_VALUE,
    time,
  };

  try {
    await createWinner(winnerData);
  } catch (e) {
    // block
  }
}
