import {
  type ExamplesOptionsState,
  type ExamplesOptionsAction,
  ExamplesOptionsActionType,
} from '../types/examplesOptions';
import { exampleFirstInitialValue } from '../../utils/initialValues/exampleFirstInitialValue';
import { exampleSecondInitialValue } from '../../utils/initialValues/exampleSecondInitialValue';
import { exampleThirdInitialValue } from '../../utils/initialValues/exampleThirdInitialValue';
import { LocalStorageKey } from '../../utils/types/enums';

const initialState: ExamplesOptionsState = {
  exampleFirstOptions:
    JSON.parse(localStorage.getItem(LocalStorageKey.ExampleFirstOptions)!) || exampleFirstInitialValue,
  exampleSecondOptions:
    JSON.parse(localStorage.getItem(LocalStorageKey.ExampleSecondOptions)!) || exampleSecondInitialValue,
  exampleThirdOptions:
    JSON.parse(localStorage.getItem(LocalStorageKey.ExampleThirdOptions)!) || exampleThirdInitialValue,
};

export const examplesOptionsReducer = (
  state: ExamplesOptionsState = initialState,
  action: ExamplesOptionsAction
): ExamplesOptionsState => {
  switch (action.type) {
    case ExamplesOptionsActionType.SET_EXAMPLES_OPTIONS_TYPE: {
      const newState = {
        ...state,
        exampleFirstOptions: {
          ...state.exampleFirstOptions,
          type: action.payload,
        },
        exampleSecondOptions: {
          ...state.exampleSecondOptions,
          type: action.payload,
        },
        exampleThirdOptions: {
          ...state.exampleThirdOptions,
          type: action.payload,
        },
      };
      localStorage.setItem(LocalStorageKey.ExampleFirstOptions, JSON.stringify(newState.exampleFirstOptions));
      localStorage.setItem(LocalStorageKey.ExampleSecondOptions, JSON.stringify(newState.exampleSecondOptions));
      localStorage.setItem(LocalStorageKey.ExampleThirdOptions, JSON.stringify(newState.exampleThirdOptions));
      return newState;
    }

    default:
      return state;
  }
};
