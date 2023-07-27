import { garageView, winnersView } from '../views';
import { state } from '../model';

/**
 * @description Renders the page with the given application state
 */
export default function render() {
  garageView.render(state);
  winnersView.render(state);
}
