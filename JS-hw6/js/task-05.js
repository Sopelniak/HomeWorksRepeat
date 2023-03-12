const inputEl = document.querySelector("input#name-input");
const spanEl = document.querySelector("span#name-output");
const textDefault = spanEl.textContent;

inputEl.addEventListener("input", (e) => {
  e.target.value === ""
    ? (spanEl.textContent = textDefault)
    : (spanEl.textContent = e.target.value);
});
