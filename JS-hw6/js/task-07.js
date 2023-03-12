const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

inputEl.value = 16;

function onInput(e) {
  spanEl.style.fontSize = `${e.target.value}px`;
}
