export const getTemperature = (temp) => {
  return `${Math.round(temp)}°`;
};

export const getMinMax = (min, max) => {
  const minTemp = getTemperature(min);
  const maxTemp = getTemperature(max);
  return `${maxTemp}/${minTemp}`;
};

export const getIcon = (clouds) => {
  return clouds < 50 ? 'sun' : 'cloud';
};

export const getLabel = (clouds) => {
  return clouds < 50 ? 'Clear' : 'Cloudy';
};

export const getParsedWeather = ({ temp, temp_min, temp_max }, clouds) => ({
  temperature: getTemperature(temp),
  maxMin: getMinMax(temp_min, temp_max),
  cloudIcon: getIcon(clouds),
  cloudLabel: getLabel(clouds),
});
