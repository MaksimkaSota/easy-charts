import { type WeatherAction, WeatherActionType, type WeatherState } from '../types/weather';
import { LocalStorageKey } from '../../utils/types/enums';
import { getLocalItem, setLocalItem } from '../../services/browserDataStorage/localStorage';

const initialState: WeatherState = {
  city: getLocalItem<string>(LocalStorageKey.City) || '',
  location: 'Местоположение',
  weather: null,
};

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionType.SET_WEATHER_CITY: {
      setLocalItem(LocalStorageKey.City, action.payload);
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
