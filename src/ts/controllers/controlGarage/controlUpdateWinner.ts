import { UpdateWinnersData } from '../../types';
import { updateWinner } from '../../model';

/**
 * @param winnersId {number}
 * @param time {number}
 * @param win {number}
 * @description Updating winner
 */
export default function controlUpdateWinner(
  winnersId: number,
  time: number,
  win: number,
) {
  const newWinnersData: UpdateWinnersData = {
    wins: win,
    time,
  };

  return updateWinner(winnersId, newWinnersData);
}
