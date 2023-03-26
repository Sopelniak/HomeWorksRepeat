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
  if (e.target.value === '') {
    countryListEl.innerHTML = '';
    countryInfoEl.innerHTML = '';
    return;
  }
  fetchCountries(e.target.value.trim())
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
      console.log(e);
      Notify.failure('Oops, there is no country with that name');
    });
}

function renderCountryList(data) {
  const markup = data
    .map(
      country => `
            <li>
              <img src=${country.flags.svg} alt="flag" width="40">
              <span>${country.name.official}</span>
            </li>`
    )
    .join('');
  countryListEl.innerHTML = markup;
}

function renderCountryInfo(data) {
  const markup = data
    .map(
      country => `
            <div class="country-name">
              <img src=${country.flags.svg} alt="flag" width="60"/>
              <h1>${country.name.official}</h1>
            </div>
            <p class="info">Capital: ${country.capital}</p>
            <p class="info">Population: ${country.population}</p>
            <p class="info">Languages: ${Object.values(country.languages)}</p>`
    )
    .join('');
  countryInfoEl.innerHTML = markup;
}
