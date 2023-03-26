import { debounce } from 'debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import './css/styles.css';

const searchBoxEl = document.querySelector('input#search-box');
const countryListEl = document.querySelector('ul.country-list');
const countryInfoEl = document.querySelector('div.country-info');

const DEBOUNCE_DELAY = 300;

searchBoxEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const name = e.target.value.trim();
  if (name === '') {
    countryListEl.innerHTML = '';
    countryInfoEl.innerHTML = '';
    return;
  }
  fetchCountries(name)
    .then(data => {
      if (data.length > 10) {
        countryListEl.innerHTML = '';
        countryInfoEl.innerHTML = '';
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length > 1 && data.length < 11) {
        countryInfoEl.innerHTML = '';
        renderCountryList(data);
      }
      if (data.length === 1) {
        countryListEl.innerHTML = '';
        renderCountryInfo(data);
      }
    })
    .catch(e => {
      Notify.failure(e.message);
    });
}

function renderCountryList(data) {
  const markup = data
    .map(
      ({ name, flags }) => `
            <li>
              <img src=${flags.svg} alt="flag" width="40">
              <span>${name.official}</span>
            </li>`
    )
    .join('');
  countryListEl.innerHTML = markup;
}

function renderCountryInfo(data) {
  const markup = data.map(
    ({ flags, name, capital, population, languages }) => `
            <div class="country-name">
              <img src=${flags.svg} alt="flag" width="60"/>
              <h1>${name.official}</h1>
            </div>
            <p class="info">Capital: ${capital}</p>
            <p class="info">Population: ${population}</p>
            <p class="info">Languages: ${Object.values(languages)}</p>`
  );
  countryInfoEl.innerHTML = markup;
}
