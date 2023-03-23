import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

Notify.init({
  timeout: 10000,
});

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target;
  let delayForPromise = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delayForPromise)
      .then(response => Notify.success(response))
      .catch(e => Notify.failure(e));
    delayForPromise += Number(step.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  // promise
  //   .then(response => Notify.success(response))
  //   .catch(e => Notify.failure(e));
}
