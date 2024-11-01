import { type WeatherState, type WeatherAction, WeatherActionType } from '../types/weather';

const initialState: WeatherState = {
  city: '',
  location: 'Местоположение',
  weather: null,
};

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionType.SET_WEATHER_CITY:
      return {
        ...state,
        city: action.payload,
      };
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
