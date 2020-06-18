import axios from 'axios';

const openWeatherURL = 'https://api.openweathermap.org/data/2.5';

export default axios.create({
  baseURL: openWeatherURL,
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  },
});
