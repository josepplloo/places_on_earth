let map;
let myPlaces = [];
let cont = 0;

function init() {

  tomtom.setProductInfo(env.productName, env.version);
  tomtom.key(env.APIKEY);
  tomtom.searchKey(env.APIKEY);

  map = tomtom.map('map', {
    source: 'vector',
    basePath: '/sdk'
  }).setView([52.373154, 4.890659], 14);

  // Adding marker to the map
  
  
  map.addEventListener('click', addPlace);

  const placesFromLocalStorage = JSON.parse(localStorage.getItem('myPlaces'));

  if(Array.isArray(placesFromLocalStorage)) {
    myPlaces = placesFromLocalStorage;
    renderMarkers();
  }
}

function addPlace(event) {
  let marker = tomtom.L.marker(event.latlng, {
    draggable: true
  }).bindPopup(`Ma Place ${++cont}`).addTo(map);

  myPlaces.push( marker );
  
  localStorage.setItem('myPlaces', JSON.stringify(event.latlng));

  renderMarkers();
}

function renderMarkers() {

}

init();