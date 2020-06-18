import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import * as S from './list.styled';

const List = ({ data, indexActive, onCardClick }) => {
  return (
    <S.ListWrapper>
      <S.Cards>
        {data.map((forecast, i) => {
          return (
            <Card
              isActive={indexActive === i}
              handleOnClick={onCardClick}
              key={i}
              cloudIcon={forecast.cloudIcon}
              index={i}
              hour={forecast.hour}
              temperature={forecast.temperature}
            />
          );
        })}
      </S.Cards>
    </S.ListWrapper>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  indexActive: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default List;
