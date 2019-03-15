import { getPlaces, subscribe } from './dataService.js';


export function renderCities() {
  const cityListElement = document.querySelector('.citiesList');

  cityListElement.innerHTML = '';
  let cityElement = getPlaces().map(({name}) => {
    console.log(`<p>${name}</p>`);
    return `<p>${name}</p>`;
  }).join('');
  
  cityListElement.innerHTML = cityElement;
}

renderCities();

subscribe(renderCities);
