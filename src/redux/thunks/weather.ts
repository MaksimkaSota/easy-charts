import { isAxiosError } from 'axios';
import type { ThunkType } from '../../utils/types/common';
import type { WeatherAction } from '../types/weather';
import type { IWeather } from '../../utils/types/api/weather';
import { getDegeocodingCityAPI, getWeatherAPI } from '../../services/api/weather/weather';
import { setCity, setLocation, setWeatherDataSuccess, setWeatherDataFailure } from '../actions/weather';
import { StatusCode, LocalStorageKey } from '../../utils/types/enums';
import { getLocalItem, removeLocalItem } from '../../services/browserDataStorage/localStorage';

export const setCityWithLocation = (city: string, location: string): ThunkType<WeatherAction> => {
  return async (dispatch) => {
    const newCity = getLocalItem<string>(LocalStorageKey.City) || city;
    dispatch(setCity(newCity));
    dispatch(setLocation(location));
  };
};

export const getDegeocodingCity = (latitude: number, longitude: number): ThunkType<WeatherAction> => {
  return async (dispatch) => {
    try {
      const city: string = await getDegeocodingCityAPI(latitude, longitude);
      removeLocalItem(LocalStorageKey.City);
      dispatch(setCityWithLocation(city, 'Текущее местоположение'));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(setCityWithLocation('Минск', 'Ошибка получения текущего местоположения'));
      }
    }
  };
};

export const getWeather = (city: string): ThunkType<WeatherAction> => {
  return async (dispatch) => {
    try {
      const weather: IWeather = await getWeatherAPI(city);
      dispatch(setWeatherDataSuccess(weather));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response) {
          switch (error.response.status) {
            case StatusCode.ResponseBadRequest:
              dispatch(setWeatherDataFailure('Введите название', error.response.status));
              break;
            case StatusCode.ResponseNotFound:
              dispatch(setWeatherDataFailure('Неверное название', error.response.status));
              break;
            default:
              dispatch(setWeatherDataFailure('Ошибка сервера', error.response.status));
          }
        } else {
          dispatch(setWeatherDataFailure('Ошибка сети'));
        }
      }
    }
  };
};
