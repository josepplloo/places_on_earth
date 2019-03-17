import { getPlaces, subscribe, setPlaces } from './dataService.js';

/**
 * Delete cities in CytiesArray
 * @param {Number} index 
 */
export function clearCity(index) {
  let myPlaces = getPlaces();
  myPlaces.splice(index, 1);
  setPlaces(myPlaces);
}

/**
 * Create the elements in the sidebar
 */
export function renderCities() {
  const cityListElement = document.querySelector('.citiesList');

  cityListElement.innerHTML = '';
  let cityElement = getPlaces().map(({name}) => {
    return `<li class="city-element">${name}<button aria-label="Delete this item">x</button></li>`;
  }).join('');
  
  cityListElement.innerHTML = cityElement;
  
  cityListElement.querySelectorAll('button')
    .forEach((button, index) => {
    button.addEventListener('click', () => {
      clearCity(index);
    });
  });
}

renderCities();

subscribe(renderCities);