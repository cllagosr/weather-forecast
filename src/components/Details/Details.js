import React from 'react';
import sprite from '../../assets/img/sprite.svg';
import * as S from './details.styled';

const Details = () => {
  return (
    <S.DetailsWrapper>
      <S.Image>
        <use xlinkHref={`${sprite}#sun`} />
      </S.Image>
      <S.Temperature>
        <div>
          <span>Clear</span>
          <span>12°/2°</span>
        </div>
        <S.TempValue>15°</S.TempValue>
      </S.Temperature>
      <S.DatePlace>
        <div>Munich,</div>
        <div>Thursday</div>
        <div>28. March</div>
      </S.DatePlace>
    </S.DetailsWrapper>
  );
};

export default Details;
