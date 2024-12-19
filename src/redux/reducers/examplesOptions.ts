import {
  type ExamplesOptionsState,
  type ExamplesOptionsAction,
  ExamplesOptionsActionType,
} from '../types/examplesOptions';
import { getExampleFirstInitialValue } from '../../utils/initialValues/exampleFirstInitialValue';
import { getExampleSecondInitialValue } from '../../utils/initialValues/exampleSecondInitialValue';
import { getExampleThirdInitialValue } from '../../utils/initialValues/exampleThirdInitialValue';
import { LocalStorageKey } from '../../utils/types/enums';
import { setLocalItem, getLocalItem } from '../../services/browserDataStorage/localStorage';
import type { IChart } from '../../utils/types/api/chart';
import { DEFAULT_LANGUAGE } from '../../utils/constants';

const initialState: ExamplesOptionsState = {
  exampleFirstOptions:
    getLocalItem<IChart>(LocalStorageKey.ExampleFirstOptions) ||
    getExampleFirstInitialValue(getLocalItem<string>(LocalStorageKey.Language) || DEFAULT_LANGUAGE),
  exampleSecondOptions:
    getLocalItem<IChart>(LocalStorageKey.ExampleSecondOptions) ||
    getExampleSecondInitialValue(getLocalItem<string>(LocalStorageKey.Language) || DEFAULT_LANGUAGE),
  exampleThirdOptions:
    getLocalItem<IChart>(LocalStorageKey.ExampleThirdOptions) ||
    getExampleThirdInitialValue(getLocalItem<string>(LocalStorageKey.Language) || DEFAULT_LANGUAGE),
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

      setLocalItem(LocalStorageKey.ExampleFirstOptions, newState.exampleFirstOptions);
      setLocalItem(LocalStorageKey.ExampleSecondOptions, newState.exampleSecondOptions);
      setLocalItem(LocalStorageKey.ExampleThirdOptions, newState.exampleThirdOptions);

      return newState;
    }

    case ExamplesOptionsActionType.RESET_EXAMPLES_OPTIONS: {
      const newState = {
        ...state,
        exampleFirstOptions: {
          ...state.exampleFirstOptions,
          data: getExampleFirstInitialValue(action.payload).data,
          options: getExampleFirstInitialValue(action.payload).options,
        },
        exampleSecondOptions: {
          ...state.exampleSecondOptions,
          data: getExampleSecondInitialValue(action.payload).data,
          options: getExampleSecondInitialValue(action.payload).options,
        },
        exampleThirdOptions: {
          ...state.exampleThirdOptions,
          data: getExampleThirdInitialValue(action.payload).data,
          options: getExampleThirdInitialValue(action.payload).options,
        },
      };

      setLocalItem(LocalStorageKey.ExampleFirstOptions, newState.exampleFirstOptions);
      setLocalItem(LocalStorageKey.ExampleSecondOptions, newState.exampleSecondOptions);
      setLocalItem(LocalStorageKey.ExampleThirdOptions, newState.exampleThirdOptions);

      return newState;
    }

    default:
      return state;
  }
};
