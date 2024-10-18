import { combineReducers } from 'redux';
import { addressesReducer } from './addresses';
import { mainOptionsReducer } from './mainOptions';
import { examplesOptionsReducer } from './examplesOptions';
import { loadingReducer } from './loading';
import { errorReducer } from './error';

export const rootReducer = combineReducers({
  addresses: addressesReducer,
  mainOptions: mainOptionsReducer,
  examplesOptions: examplesOptionsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
