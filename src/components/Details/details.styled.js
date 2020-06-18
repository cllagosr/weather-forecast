import styled from 'styled-components';

export const DetailsWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin: ${({ theme }) => theme.spaces.xl} 0;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.md`
    flex-direction: row;
  `}
`;

export const Image = styled.svg`
  height: 218px;
  width: 218px;
  ${({ theme }) => theme.media.md`
    height: 268px;
    width: 268px;
  `}
  ${({ theme }) => theme.media.lg`
    height: 328px;
    width: 328px;
  `}
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  span {
    color: ${({ theme }) => theme.colors.fontSecondary};
    :nth-child(2) {
      float: right;
    }
  }
`;

export const TempValue = styled.div`
  font-size: 163px;
  font-weight: bold;
  ${({ theme }) => theme.media.md`
    font-size: 15vw;
  `}
`;

export const DatePlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.md`
    align-items: start;
  `}

  div:nth-child(1) {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.fontSecondary};
    margin-bottom: ${({ theme }) => theme.spaces.lg};
  }
  div:not(:nth-child(1)) {
    font-weight: bold;
    font-size: 33px;
    ${({ theme }) => theme.media.md`
      font-size: 6.5vw;
    `}
  }
`;
