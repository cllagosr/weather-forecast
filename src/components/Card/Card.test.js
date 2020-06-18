import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Card from './Card';
import { theme } from '../../assets/styles/theme';
import { cardsData } from '../../tests/data';

const mockHandleClick = jest.fn();

const data = { ...cardsData[0], handleOnClick: mockHandleClick };

afterEach(() => {
  jest.clearAllMocks();
});

it('renders a card an its data', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Card {...data} />
    </ThemeProvider>
  );

  const card = getByTestId('card');
  expect(card).toHaveTextContent('12:00');
  expect(card).toHaveTextContent('15°C');
  expect(card).not.toHaveStyle(`background: ${theme.colors.lightBackground}`);
});

it('calls handle on click', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Card {...data} />
    </ThemeProvider>
  );

  const card = getByTestId('card');
  fireEvent.click(card);
  expect(mockHandleClick).toHaveBeenCalled();
});

it('shows different color if active', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Card {...data} isActive={true} />
    </ThemeProvider>
  );

  const card = getByTestId('card');
  expect(card).toHaveStyle(`background: ${theme.colors.lightBackground}`);
});
