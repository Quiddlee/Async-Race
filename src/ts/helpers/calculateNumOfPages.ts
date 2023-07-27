/**
 * @param totalNumOfItems {number}
 * @param numOfItemsOnOnePage {number}
 * @description Calculates the total number of pagination pages
 */
export default function calculateNumOfPages(
  totalNumOfItems: number,
  numOfItemsOnOnePage: number,
) {
  return Math.ceil(totalNumOfItems / numOfItemsOnOnePage);
}
