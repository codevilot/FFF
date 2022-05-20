export function createSelector(selector, where, className) {
  const $selector = document.createElement(selector);
  where.appendChild($selector);
  $selector.classList.add(className);
  return $selector;
}
