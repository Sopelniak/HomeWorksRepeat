const formEl = document.querySelector('form.feedback-form');

let objToLS = {
  email: '',
  message: '',
};

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);

scanLS();

function onInput(e) {
  objToLS[e.target.name] = e.target.value;
  const valuesToLS = JSON.stringify(objToLS);
  localStorage.setItem('feedback-form-state', valuesToLS);
}

function onSubmit(e) {
  const { elements } = e.target;
  e.preventDefault();
  console.log(objToLS);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
  for (let i = 0; i < elements.length - 1; i += 1) {
    objToLS[elements[i].name] = elements[i].value;
  }
}

function scanLS() {
  try {
    const valuesFromLS = localStorage.getItem('feedback-form-state');

    if (valuesFromLS !== null) {
      const { elements } = formEl;
      const objFromLS = JSON.parse(valuesFromLS);
      objToLS = objFromLS;
      for (let i = 0; i < elements.length - 1; i += 1) {
        elements[i].value = objFromLS[elements[i].name];
      }
    }
  } catch (error) {
    console.log(error);
  }
}
