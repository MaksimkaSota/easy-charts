import { combineReducers } from 'redux';
import { addressReducer } from './addressReducer';
import { optionsReducer } from './optionsReducer';
import { exampleFirstReducer } from './exampleFirstReducer';
import { exampleSecondReducer } from './exampleSecondReducer';
import { exampleThirdReducer } from './exampleThirdReducer';

export const rootReducer = combineReducers({
  address: addressReducer,
  options: optionsReducer,
  examples: combineReducers({
    exampleFirst: exampleFirstReducer,
    exampleSecond: exampleSecondReducer,
    exampleThird: exampleThirdReducer,
  }),
});

export type AppState = ReturnType<typeof rootReducer>;
