import { addPlace, getPlaces, subscribe }  from './dataService.js';
import {} from './sidebar.js'

let map;
let layer = [];
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
  }).setView([52.373154, 4.890659], 2);
    
  map.addEventListener('click', addMarker);
}

/**
 *It's will render the marker when a user click the map
 * @param {Event} event 
 */
function addMarker(event) {
  renderMarkers();
  addPlace(event.latlng);
}

/**
 * This function deletes and creates markers in an inefficient way...
 */
export function renderMarkers() {
  
  layer.forEach(marker => {marker.remove()});

  getPlaces().forEach(({position, name}) => {
    let marker = tomtom.L.marker(new tomtom.L.LatLng(position.lat, position.lng), {
      title: `${name}`
    });
    marker.bindPopup(name).addTo(map);
    layer.push(marker);
  })
}

