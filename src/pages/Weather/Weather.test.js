import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Weather from './Weather';
import { theme } from '../../assets/styles/theme';

jest.mock('../../shared/openWeatherAPI');

it('renders data of cards', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  );

  const cards = await screen.findAllByTestId('card');
  expect(cards.length).toBe(6);

  expect(cards[0]).toHaveTextContent('09:0016°');
  expect(cards[1]).toHaveTextContent('10:0016°');
  expect(cards[2]).toHaveTextContent('11:0016°');
  expect(cards[3]).toHaveTextContent('12:0010°');
});

it('shows details of a card', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  );

  const temperature = await screen.findByTestId('temperature');
  expect(temperature).toHaveTextContent('Clear18°/13°16°');

  const datePlace = await screen.findByTestId('datePlace');
  expect(datePlace).toHaveTextContent('Munich,Thursday18. Jun');
});

it('shows details of selected card', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  );

  const cards = await screen.findAllByTestId('card');
  fireEvent.click(cards[3]);

  const temperature = await screen.findByTestId('temperature');
  expect(temperature).toHaveTextContent('Cloudy8°/7°10°');

  const datePlace = await screen.findByTestId('datePlace');
  expect(datePlace).toHaveTextContent('Munich,Thursday18. Jun');
});
