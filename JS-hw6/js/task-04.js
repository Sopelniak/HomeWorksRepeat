const valueEl = document.querySelector("span#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
