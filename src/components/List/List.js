import React from 'react';
import Card from '../Card/Card';
import * as S from './list.styled';

const List = () => {
  return (
    <S.ListWrapper>
      <S.Cards>
        {[...Array(24)].map((x, i) => {
          return <Card key={i} />;
        })}
      </S.Cards>
    </S.ListWrapper>
  );
};

export default List;
