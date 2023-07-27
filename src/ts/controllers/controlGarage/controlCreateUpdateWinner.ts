import { getWinner, loadWinners, state, updateWinnersState } from '../../model';
import { controlCreateWinner, controlUpdateWinner } from './index';
import { renderWinMessage } from '../../views/garageView';

export default async function controlCreateUpdateWinner(anim: Animation) {
  const { target: winnerCarImg } = anim.effect as KeyframeEffect;
  const winnerCarWrapper = winnerCarImg?.closest('.car') as HTMLElement;
  const winnerCarId = Number(winnerCarWrapper.dataset.id || 0);
  const winnersCarName =
    (winnerCarWrapper.querySelector('.title--car') as HTMLElement)
      .textContent || '';
  const time = Math.floor(
    Number(anim.effect?.getComputedTiming().duration) / 1000 || 0,
  );
  const isWinnerAlreadyExist = state.winners.some(
    ({ id }) => Number(id) === winnerCarId,
  );

  renderWinMessage(winnersCarName);

  if (isWinnerAlreadyExist) {
    const winner = await getWinner(winnerCarId);
    const newTime = time < winner.time ? time : winner.time;

    await controlUpdateWinner(winnerCarId, newTime, winner.wins + 1);
  } else {
    await controlCreateWinner(winnerCarId, time);
  }

  const [winnersData, page] = await loadWinners();
  updateWinnersState(winnersData, page, false);
}
