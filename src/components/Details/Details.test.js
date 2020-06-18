import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Details from './Details';
import { theme } from '../../assets/styles/theme';

const data = {
  hour: '12:00',
  temperature: '12°C',
  day: 'Monday',
  date: '28. June',
  maxMin: '15°C/8°C',
  cloudIcon: 'sun',
  cloudLabel: 'Clear',
};

it('renders weather details', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Details data={data} />
    </ThemeProvider>
  );

  const cardText = getByTestId('temperature');
  expect(cardText).toHaveTextContent('Clear');
  expect(cardText).toHaveTextContent('15°C/8°C');
  expect(cardText).toHaveTextContent('12°C');
});

it('renders date and place', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Details data={data} />
    </ThemeProvider>
  );

  const cardText = getByTestId('datePlace');
  expect(cardText).toHaveTextContent('Munich');
  expect(cardText).toHaveTextContent('28. June');
  expect(cardText).toHaveTextContent('Monday');
});
