import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import List from './List';
import { theme } from '../../assets/styles/theme';
import { cardsData } from '../../tests/data';

it('renders a list of cards', () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={theme}>
      <List data={cardsData} indexActive={1} onCardClick={() => {}} />
    </ThemeProvider>
  );

  const cards = getAllByTestId('card');
  expect(cards.length).toBe(2);
});
