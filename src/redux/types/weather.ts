import type { ErrorType, Nullable } from '../../utils/types/common';
import type { IWeather } from '../../utils/types/api/weather';

export type WeatherState = {
  city: string;
  location: string;
  weather: Nullable<IWeather>;
};

export enum WeatherActionType {
  SET_WEATHER_CITY = 'SET_WEATHER_CITY',
  SET_WEATHER_LOCATION = 'SET_WEATHER_LOCATION',
  SET_WEATHER_DATA_REQUEST = 'SET_WEATHER_DATA_REQUEST',
  SET_WEATHER_DATA_SUCCESS = 'SET_WEATHER_DATA_SUCCESS',
  SET_WEATHER_DATA_FAILURE = 'SET_WEATHER_DATA_FAILURE',
}

export type SetWeatherCityAction = { type: WeatherActionType.SET_WEATHER_CITY; payload: string };

export type SetWeatherLocationAction = { type: WeatherActionType.SET_WEATHER_LOCATION; payload: string };

export type SetWeatherDataRequestAction = { type: WeatherActionType.SET_WEATHER_DATA_REQUEST };
export type SetWeatherDataSuccessAction = { type: WeatherActionType.SET_WEATHER_DATA_SUCCESS; payload: IWeather };
export type SetWeatherDataFailureAction = { type: WeatherActionType.SET_WEATHER_DATA_FAILURE; payload: ErrorType };

export type WeatherAction =
  | SetWeatherCityAction
  | SetWeatherLocationAction
  | SetWeatherDataRequestAction
  | SetWeatherDataSuccessAction
  | SetWeatherDataFailureAction;
