const bodyEl = document.querySelector("body");
const spanEl = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanEl.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
