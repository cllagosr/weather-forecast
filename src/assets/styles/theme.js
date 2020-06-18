import { css } from 'styled-components';

export const screenSizes = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const colors = {
  gray: '#999999',
  background: '#262a5a',
  lightBackground: '#51557a',
  font: '#fff',
  fontSecondary: '#a8aabd',
};

export const spaces = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '24px',
  xl: '36px',
};

export const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screenSizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const theme = {
  name: 'weather',
  screenSizes,
  colors,
  spaces,
  media,
};
