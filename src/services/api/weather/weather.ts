import { http } from './http';
import { requestString } from '../endpoints';
import type { IGeocoding, IWeather } from '../../../utils/types/api/weather';
import { Language } from '../../../utils/types/enums';

export const getDegeocodingCityAPI = async (
  latitude: number,
  longitude: number,
  languageMode: string
): Promise<string> => {
  const response = await http.get(requestString.openweather.geocoding, {
    params: { lat: latitude, lon: longitude },
  });

  const data: IGeocoding[] = response.data;
  const name = languageMode === Language.Ru ? data[0].local_names.ru : data[0].local_names.en;

  return name || data[0].name;
};

export const getWeatherAPI = async (city: string, languageMode: string): Promise<IWeather> => {
  const language = languageMode === Language.Ru ? Language.Ru : Language.En;

  const response = await http.get(requestString.openweather.weather, {
    params: { q: city, lang: language, units: 'metric' },
  });

  return response.data;
};
