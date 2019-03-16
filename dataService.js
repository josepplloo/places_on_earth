let myPlaces = [];

let changeListener = [];

export function subscribe(callbackfunction) {
  changeListener.push(callbackfunction);
}

function publish(data) {
  changeListener.forEach((changeListener) => { changeListener(data); });
}

export function addPlace(latlnt) {
    
  let url = `https://api.tomtom.com/search/2/reverseGeocode/${latlnt.lat},${latlnt.lng}.json?key=${env.APIKEY}`

  fetch(url).then( (response) =>{
    return response.json();
  }).then(({addresses}) =>{
    let municipality, country;  
    ({municipality, country} = addresses[0].address);

    myPlaces.push( {position: latlnt, name: `${municipality}, ${country}`} );
    
    publish(myPlaces);
  
    localStorage.setItem('myPlaces', JSON.stringify(myPlaces));
  })
  return;
}

export function getPlaces() {
  return myPlaces;
}
subscribe(getPlaces);

export function setPlaces(myPlaces) {
  
  localStorage.setItem('myPlaces', JSON.stringify(myPlaces));
  publish(myPlaces);
}


function initLocalStorage() {
  const placesFromLocalStorage = JSON.parse(localStorage.getItem('myPlaces'));
  if(Array.isArray(placesFromLocalStorage)) {
    myPlaces = placesFromLocalStorage;
    publish(myPlaces);
  }
}

initLocalStorage();