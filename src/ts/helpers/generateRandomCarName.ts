import { carMarks, carModelNames } from '../model';

export default function generateRandomCarName() {
  const numOfCarMarks = carMarks.length;
  const rndmCarNum = Math.floor(Math.random() * numOfCarMarks);
  const rndmCarMark = carMarks[rndmCarNum];
  const rndmCarModel = carModelNames[rndmCarNum];

  return `${rndmCarMark} ${rndmCarModel}`;
}
