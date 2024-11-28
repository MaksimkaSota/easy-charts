import { type WeatherState, type WeatherAction, WeatherActionType } from '../types/weather';
import { LocalStorageKey } from '../../utils/types/enums';

const initialState: WeatherState = {
  city: JSON.parse(localStorage.getItem(LocalStorageKey.City)!) || '',
  location: 'Местоположение',
  weather: null,
};

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionType.SET_WEATHER_CITY: {
      localStorage.setItem(LocalStorageKey.City, JSON.stringify(action.payload));
      return {
        ...state,
        city: action.payload,
      };
    }

    case WeatherActionType.SET_WEATHER_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    case WeatherActionType.SET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weather: action.payload,
      };

    default:
      return state;
  }
};
