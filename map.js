import { addPlace, getPlaces }  from './dataService.js';

let map;
let myPlaces = [];
let cont = 0;

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
  addPlace(event.latlng)
  renderMarkers();
}

function renderMarkers() {
  getPlaces().forEach(event => {
    let title = `Ma Place ${++cont}`;
    let marker = tomtom.L.marker(new tomtom.L.LatLng(event.lat,event.lng), {
      title: `${title}`
    });
    marker.bindPopup(title).addTo(map);
  })
  console.log(localStorage.getItem('myPlaces'));
}

init();