import openWeatherAPI from './openWeatherAPI';
import { getParsedDate } from '../utils/time';
import { getParsedWeather } from '../utils/weather';

const fetchWeather = async (city = 'munich,de') => {
  const params = {
    q: city,
    units: 'metric',
  };

  try {
    const { data } = await openWeatherAPI.get('/forecast', { params });

    const forecastArray = data.list.slice(0, 8);

    const parsedData = forecastArray.map((forecast) => {
      const date = new Date(forecast.dt_txt);

      return {
        ...getParsedDate(date),
        ...getParsedWeather({ ...forecast.main }, forecast.clouds.all),
      };
    });

    return parsedData;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchWeather;
