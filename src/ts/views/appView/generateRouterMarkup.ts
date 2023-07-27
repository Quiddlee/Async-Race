export default function generateRouterMarkup() {
  return `
    <nav class='router-wrapper px-3-2 py-3-2'>
      <button class='btn btn--primary btn--active' data-type='garage'>garage</button>
      <button class='btn btn--primary' data-type='winners'>winners</button>
    </nav>
  `;
}
