import type { ObjectType } from '../utils/types/common';

export const requestString: ObjectType = {
  quickchart: 'https://quickchart.io/chart',
  openweather: {
    main: 'https://api.openweathermap.org',
    weather: 'data/2.5/weather',
    geocoding: 'geo/1.0/reverse',
  },
  nbrb: 'https://www.nbrb.by/api/exrates/rates',
  mail: 'mailto:MaksimkaSota@gmail.com',
};
