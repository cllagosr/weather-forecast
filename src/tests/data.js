export const apiResponse = {
  data: {
    list: [
      {
        clouds: {
          all: 24,
        },
        dt_txt: '2020-06-18 09:00:00',
        main: {
          temp: 15.91,
          temp_min: 13.48,
          temp_max: 17.91,
        },
      },
      {
        clouds: {
          all: 56,
        },
        dt_txt: '2020-06-18 12:00:00',
        main: {
          temp: 9.6,
          temp_min: 6.87,
          temp_max: 8.12,
        },
      },
    ],
  },
};

export const cardsData = [
  {
    isActive: false,
    cloudIcon: 'cloud',
    hour: '12:00',
    index: 0,
    temperature: '15°C',
    handleOnClick: () => {},
  },
  {
    isActive: false,
    cloudIcon: 'sun',
    hour: '09:00',
    index: 1,
    temperature: '8°C',
    handleOnClick: () => {},
  },
];
