import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import Weather from './pages/Weather/Weather';
import { GlobalStyle } from './assets/styles/global';
import { theme } from './assets/styles/theme';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Roboto:300,400,400i,600,700,700i&display=optional'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Weather />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
