import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');

let selectedDate;
let convertTime;

Notify.init({
  position: 'center-top',
});

btnStartEl.addEventListener('click', () => {
  const timerId = setInterval(() => {
    const ms = selectedDate - new Date();
    if (ms > 0) {
      convertTime = convertMs(ms);
      for (const key in convertTime) {
        if (key !== 'days') {
          document.querySelector(`span[data-${key}]`).textContent =
            addLeadingZero(convertTime[key]);
        } else {
          document.querySelector(`span[data-${key}]`).textContent =
            convertTime[key];
        }
      }
    } else {
      clearInterval(timerId);
    }
  }, 1000);
});

btnStartEl.disabled = true;

flatpickr(inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future!');
    } else {
      btnStartEl.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
