export function createSelector(selector, where, className) {
  const $selector = document.createElement(selector);
  if (where !== "body") {
    where.appendChild($selector);
  } else {
    document.body.appendChild($selector);
  }
  $selector.classList.add(className);
  return $selector;
}
export function clickToCopy(value) {
  const tempArea = createSelector("textarea", "body", "verysmall");
  tempArea.value = value;
  tempArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempArea);
  alertCopy();
}
export function alertCopy() {
  const alert = createSelector("div", "body", "alertCopy");
  alert.innerHTML = `Copy it!`;
  setTimeout(() => {
    document.body.removeChild(alert);
  }, 500);
}
