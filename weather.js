const weather = document.querySelector(".js-weather");
const API_KEY = "dd4921796c965b0ccbba3efc67e8b7f7";
const COORDS = "coords";

const getWeather = (lat, lng) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(json => {
      const temperature = Math.floor(json.main.temp),
        description = json.weather[0].description,
        place = json.name;
      weather.innerText = `${temperature} at ${place} and ${description}`;
      console.log(temperature, description);
    });
};

const saveCoords = coordsObj => {
  localStorage.setItem("coords", JSON.stringify(coordsObj));
};

const handleGeoSuccess = position => {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};

const handelGeoFailed = error => {
  console.log(error.message);
};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handelGeoFailed);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
};

function init() {
  loadCoords();
}

init();
