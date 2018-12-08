const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const altitude = position.coords.altitude;
  const coordsObj = {
    latitude,
    altitude
  };
  saveCoords(coordsObj);
}

function handelGeoFailed(error) {
  console.log(error.message);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handelGeoFailed);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //get weather function
  }
}

function init() {
  loadCoords();
}

init();
