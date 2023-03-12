const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const { elements } = formEl;
  const user = {};

  for (let i = 0; i < elements.length - 1; i += 1) {
    if (elements[i].value === "") {
      alert("All fields must be filled!");
      return;
    }
    user[elements[i].name] = elements[i].value;
  }
  console.log(user);
  e.currentTarget.reset();
}
