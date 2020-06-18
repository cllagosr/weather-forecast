import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    font-family: 'Jaldi', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 47px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
  }

  h1 {
    text-align: center;
    margin-top: 0;
  }
`;
