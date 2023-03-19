const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerId = null;

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);

function onClickStart(e) {
  btnStart.disabled = true;
  changeTheme('on');
}

function onClickStop() {
  btnStart.disabled = false;
  changeTheme('off');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeTheme(value) {
  switch (value) {
    case 'on':
      timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
      }, 1000);
      break;

    case 'off':
      clearInterval(timerId);
  }
}
