import { combineReducers } from 'redux';
import { addressesReducer } from './addresses';
import { mainOptionsReducer } from './mainOptions';
import { examplesOptionsReducer } from './examplesOptions';

export const rootReducer = combineReducers({
  addresses: addressesReducer,
  mainOptions: mainOptionsReducer,
  examplesOptions: examplesOptionsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
