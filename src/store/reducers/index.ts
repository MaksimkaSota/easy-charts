import { combineReducers } from "redux";
import { addressReducer } from "./addressReducer";

import { optionsReducer } from "./chartOptionsReduser";
import { exampleFirstReducer } from "./exampleFirstReducer";

import { exampleSecondReducer } from "./exampleSecondReducer";

export const rootReducer = combineReducers({
  address: addressReducer,
  options: optionsReducer,
  examples: combineReducers({
    exampleFirst: exampleFirstReducer,
    exampleSecond: exampleSecondReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;
