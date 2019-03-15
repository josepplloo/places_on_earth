import { addPlace, getPlaces, subscribe }  from './dataService.js';
import { renderCities } from './sidebar.js'
let map;

init();
renderMarkers();
subscribe(renderMarkers);

function init() {

  tomtom.setProductInfo(env.productName, env.version);
  tomtom.key(env.APIKEY);
  tomtom.searchKey(env.APIKEY);
  //init the map in Amsterdam
  map = tomtom.map('map', {
    source: 'vector',
    basePath: '/sdk'
  }).setView([52.373154, 4.890659], 5);
    
  map.addEventListener('click', addMarker);
}

function addMarker(event) {
  renderMarkers();
  addPlace(event.latlng)
}

function renderMarkers() {
  let cont = 0;

  getPlaces().forEach(({position}) => {
    let title = `Ma Place ${++cont}`;
    let marker = tomtom.L.marker(new tomtom.L.LatLng(position.lat, position.lng), {
      title: `${title}`
    });
    marker.bindPopup(title).addTo(map);
  })
}

