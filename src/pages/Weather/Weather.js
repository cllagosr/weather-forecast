import React, { useEffect } from 'react';
import List from '../../components/List/List';
import Details from '../../components/Details/Details';
import fetchWeather from '../../shared/fetchWeather';
import * as S from './weather.styled';

const Weather = () => {
  useEffect(() => {
    const fetchData = async () => {
      const weather = await fetchWeather();
      console.log(weather);
    };

    fetchData();
  }, []);

  return (
    <S.Weather>
      <S.Container>
        <Details />
        <List />
      </S.Container>
    </S.Weather>
  );
};

export default Weather;
