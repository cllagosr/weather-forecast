import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/img/sprite.svg';
import * as S from './card.styled';

const Card = ({
  index,
  isActive,
  handleOnClick,
  cloudIcon,
  hour,
  temperature,
}) => {
  const onClick = () => {
    handleOnClick(index);
  };
  return (
    <S.CardWrapper data-testid="card" onClick={onClick} isActive={isActive}>
      <S.Time>{hour}</S.Time>
      <S.Image data-testid="icon">
        <use xlinkHref={`${sprite}#${cloudIcon}`} />
      </S.Image>
      <S.Temperature>{temperature}</S.Temperature>
    </S.CardWrapper>
  );
};

Card.propTypes = {
  isActive: PropTypes.bool.isRequired,
  cloudIcon: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Card;
