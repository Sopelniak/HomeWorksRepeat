const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(e) {
  if (e.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
