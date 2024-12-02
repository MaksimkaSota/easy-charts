import { combineReducers } from 'redux';
import { addressesReducer } from './addresses';
import { mainOptionsReducer } from './mainOptions';
import { examplesOptionsReducer } from './examplesOptions';
import { weatherReducer } from './weather';
import { loadingReducer } from './loading';
import { errorReducer } from './error';
import { currencyReducer } from './currency';
import { viewReducer } from './view';

export const rootReducer = combineReducers({
  addresses: addressesReducer,
  mainOptions: mainOptionsReducer,
  examplesOptions: examplesOptionsReducer,
  weather: weatherReducer,
  currency: currencyReducer,
  loading: loadingReducer,
  error: errorReducer,
  view: viewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
