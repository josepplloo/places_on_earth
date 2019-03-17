let myPlaces = [];

let changeListener = [];

/**
 * This function puts in the array
 * the functions you want to "make react".
 * @param {Function} callbackfunction 
 */
export function subscribe(callbackfunction) {
  changeListener.push(callbackfunction);
}

/**
 * While the data change, the functions "react". 
 * @param {Object} data 
 */
function publish(data) {
  changeListener.forEach((changeListener) => { changeListener(data); });
}


/**
 * Go for the real name given the coordinates
 * @param {Object} latlnt 
 */
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


export function setPlaces(myPlaces) {
  localStorage.setItem('myPlaces', JSON.stringify(myPlaces));
  publish(myPlaces);
}

/**
 * I am setting the Array Object in the localStorage.
 */
function initLocalStorage() {
  const placesFromLocalStorage = JSON.parse(localStorage.getItem('myPlaces'));
  if(Array.isArray(placesFromLocalStorage)) {
    myPlaces = placesFromLocalStorage;
    publish(myPlaces);
  }
}

initLocalStorage();
