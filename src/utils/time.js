import { days, months } from '../constants/time';

const getDayOfWeek = (date) => {
  const dayNumber = date.getDay();
  return days[dayNumber];
};

export const addHours = (date, hoursToAdd = 0) => {
  const hours = date.getHours() + hoursToAdd;
  return hours < 12 ? `0${hours}:00` : `${hours}:00`;
};

const getDate = (date) => {
  const dayOfMonth = date.getDate();
  const monthNumber = date.getMonth();
  const month = months[monthNumber];
  return `${dayOfMonth}. ${month}`;
};

export const getParsedDate = (date) => ({
  day: getDayOfWeek(date),
  hour: addHours(date),
  date: getDate(date),
});
