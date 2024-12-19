import {
  type SetWeatherCityAction,
  type SetWeatherDataFailureAction,
  type SetWeatherDataRequestAction,
  type SetWeatherDataSuccessAction,
  type SetWeatherLocationAction,
  WeatherActionType,
} from '../types/weather';
import type { IWeather } from '../../utils/types/api/weather';

export const setCity = (city: string): SetWeatherCityAction => ({
  type: WeatherActionType.SET_WEATHER_CITY,
  payload: city,
});

export const setLocation = (location: string): SetWeatherLocationAction => ({
  type: WeatherActionType.SET_WEATHER_LOCATION,
  payload: location,
});

export const setWeatherDataRequest = (): SetWeatherDataRequestAction => ({
  type: WeatherActionType.SET_WEATHER_DATA_REQUEST,
});
export const setWeatherDataSuccess = (weather: IWeather): SetWeatherDataSuccessAction => ({
  type: WeatherActionType.SET_WEATHER_DATA_SUCCESS,
  payload: weather,
});
export const setWeatherDataFailure = (message: string, code?: number): SetWeatherDataFailureAction => ({
  type: WeatherActionType.SET_WEATHER_DATA_FAILURE,
  payload: { message, code },
});
