import React from 'react';
import sprite from '../../assets/img/sprite.svg';
import * as S from './card.styled';

const Card = () => {
  return (
    <S.CardWrapper>
      <S.Time>12:00</S.Time>
      <S.Image>
        <use xlinkHref={`${sprite}#cloud`} />
      </S.Image>
      <S.Temperature>17°</S.Temperature>
    </S.CardWrapper>
  );
};

export default Card;
