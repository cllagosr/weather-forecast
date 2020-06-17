import styled from 'styled-components';

export const CardWrapper = styled.section`
  padding: ${({ theme }) => theme.spaces.lg} ${({ theme }) => theme.spaces.sm};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ${({ theme }) => theme.media.md`
    flex-direction: column;
    justify-content: center;
    padding: ${({ theme }) => theme.spaces.sm} ${({ theme }) =>
    theme.spaces.xl};
  `}
`;

export const Time = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.fontSecondary};
  ${({ theme }) => theme.media.md`
    font-size: 47px;
  `}
`;

export const Temperature = styled.div`
  font-size: 55px;
  ${({ theme }) => theme.media.md`
    font-size: 82px;
  `}
`;

export const Image = styled.svg`
  width: 80px;
  height: 80px;
  ${({ theme }) => theme.media.md`
    width: 120px;
    height: 120px;
  `}
`;
