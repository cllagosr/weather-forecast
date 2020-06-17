import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export const Cards = styled.div`
  display: flex;
  overflow-x: auto;
  flex-direction: column;
  flex-grow: 1;

  ${({ theme }) => theme.media.md`
    flex-direction: row;
  `}
`;
