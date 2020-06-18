import React from 'react';
import List from '../../components/List/List';
import Details from '../../components/Details/Details';
import * as S from './weather.styled';

const Weather = () => {
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
