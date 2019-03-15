let myPlaces = [];
const geoencoder = 'asignar la api';

export function addPlace(latlnt) {
  //https://developer.tomtom.com/search-api/search-api-documentation-reverse-geocoding/reverse-geocode
  myPlaces.push( {position: latlnt, name: 'My Place'} );
  
  localStorage.setItem('myPlaces', JSON.stringify(myPlaces));
}

export function getPlaces() {
  return myPlaces;
}

function initLocalStorage() {
  const placesFromLocalStorage = JSON.parse(localStorage.getItem('myPlaces'));
  if(Array.isArray(placesFromLocalStorage)) {
    myPlaces = placesFromLocalStorage;
    //publish();
  }
}

initLocalStorage();