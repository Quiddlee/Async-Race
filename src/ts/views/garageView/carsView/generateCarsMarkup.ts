import { addZero } from '../../../helpers';
import { CarsData } from '../../../types';
import { generateCarIcon } from '../..';

/**
 * @param cars {CarsData}
 * @param totalCars {number}
 * @param currentPage {number}
 * @return {string}
 * @description Generates cars markup with specified data
 */
export default function generateCarsMarkup(
  cars: CarsData,
  totalCars: number,
  currentPage: number,
): string {
  return `
    <section class='cars-wrapper py-2-4 px-3-2'>
      <header class='header'>
        <h2 class='title'>Garage 🌌 (${addZero(totalCars)})</h2>
        <p class='paragraph'>Page ${addZero(currentPage)}</p>
      </header>

      ${cars
        .map(
          (car, i) => `
          <div style='animation-delay: ${
            i * 0.1
          }s' class='car px-0-4 py-0-4' data-id='${car.id}'>
            <div class='car__controls'>
              <button class='btn btn--tertiary'>Select</button>
              <button class='btn btn--tertiary'>Remove</button>
              <h3 class='car__title title title--car ml-2-4 py-0-4 px-1-6' style='animation-delay: ${
                i * 0.15
              }s'>${car.name}</h3>
            </div>

            <div class='car__main' style='animation-delay: ${i * 0.14}s'>
              <button class='btn btn--primary car__btn-drive'>A</button>
              <button class='btn btn--primary btn--disabled car__btn-drive' disabled>B</button>
              <article class='car__img'>${generateCarIcon(car.color)}</article>
            </div>
            <div class='car__track' style='animation-delay: ${i * 0.1}s'></div>
          </div>
        `,
        )
        .join('')}
    </section>
  `;
}
