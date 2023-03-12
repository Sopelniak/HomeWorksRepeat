const inputEl = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("div#boxes");

btnCreate.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const elements = [];
  let paramOfSide = 30 - 10;
  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement("div");
    paramOfSide += 10;
    element.style.width = `${paramOfSide}px`;
    element.style.height = `${paramOfSide}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }
  boxes.append(...elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  const elsToDelete = document.querySelectorAll("#boxes div");
  // for (const el of elsToDelete) {
  //   el.remove();
  // }
  elsToDelete.forEach((el) => {
    el.remove();
  });
}
