import axios from 'axios';

axios.defaults.baseURL= 'https://api.openweathermap.org/data/2.5/';

function getCurrentWeather(location) {
  return axios.get(
    `weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
  );
}

function getForecast(lat, lon){
  return axios.get(
    `onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
  );
}


export { getCurrentWeather, getForecast};