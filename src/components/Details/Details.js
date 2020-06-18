import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/img/sprite.svg';
import * as S from './details.styled';

const Details = ({
  data: { day, hour, date, temperature, maxMin, cloudIcon, cloudLabel },
}) => {
  return (
    <S.DetailsWrapper>
      <S.Image>
        <use xlinkHref={`${sprite}#${cloudIcon}`} />
      </S.Image>
      <S.Temperature>
        <div>
          <span>{cloudLabel}</span>
          <span>{maxMin}</span>
        </div>
        <S.TempValue>{temperature}</S.TempValue>
      </S.Temperature>
      <S.DatePlace>
        <div>Munich,</div>
        <div>{day}</div>
        <div>{date}</div>
      </S.DatePlace>
    </S.DetailsWrapper>
  );
};

Details.propTypes = {
  data: PropTypes.exact({
    day: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    maxMin: PropTypes.string.isRequired,
    cloudIcon: PropTypes.string.isRequired,
    cloudLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;
