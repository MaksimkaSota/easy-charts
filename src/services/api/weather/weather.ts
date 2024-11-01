import { http } from './http';
import { requestString } from '../../endpoints';
import type { IGeocoding, IWeather } from '../../../utils/types/api/weather';

export const getDegeocodingCityAPI = async (latitude: number, longitude: number): Promise<string> => {
  const response = await http.get(requestString.openweather.geocoding, {
    params: { lat: latitude, lon: longitude },
  });
  const data: IGeocoding[] = response.data;

  return data[0].local_names.ru;
};

export const getWeatherAPI = async (city: string): Promise<IWeather> => {
  const response = await http.get(requestString.openweather.weather, {
    params: { q: city, lang: 'ru', units: 'metric' },
  });

  return response.data;
};
