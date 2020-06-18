import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import Details from '../../components/Details/Details';
import fetchWeather from '../../shared/fetchWeather';
import * as S from './weather.styled';

const Weather = () => {
  const [data, setData] = useState([]);
  const [indexActive, setIndexActive] = useState(0);
  const [requestFailed, setRequestFailed] = useState(false);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weather = await fetchWeather();
        setData(weather);
        setFetchingData(false);
      } catch (error) {
        setRequestFailed(true);
        setFetchingData(false);
      }
    };

    fetchData();
  }, []);

  const onCardClick = (index) => {
    setIndexActive(index);
  };

  return (
    <S.Weather>
      {requestFailed && 'Opppps! an error occurred'}
      {fetchingData && 'Loading...'}
      {data.length > 0 && !fetchingData && (
        <S.Container>
          <Details data={data[indexActive]} />
          <List
            data={data}
            onCardClick={onCardClick}
            indexActive={indexActive}
          />
        </S.Container>
      )}
    </S.Weather>
  );
};

export default Weather;
