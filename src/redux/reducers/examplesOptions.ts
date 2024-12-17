import {
  type ExamplesOptionsState,
  type ExamplesOptionsAction,
  ExamplesOptionsActionType,
} from '../types/examplesOptions';
import { getExampleFirstInitialValue } from '../../utils/initialValues/exampleFirstInitialValue';
import { getExampleSecondInitialValue } from '../../utils/initialValues/exampleSecondInitialValue';
import { getExampleThirdInitialValue } from '../../utils/initialValues/exampleThirdInitialValue';
import { LocalStorageKey, Language } from '../../utils/types/enums';
import { setLocalItem, getLocalItem } from '../../services/browserDataStorage/localStorage';
import type { IChart } from '../../utils/types/api/chart';

const initialState: ExamplesOptionsState = {
  exampleFirstOptions:
    getLocalItem<IChart>(LocalStorageKey.ExampleFirstOptions) ||
    getExampleFirstInitialValue(getLocalItem<string>(LocalStorageKey.Language) || Language.Ru),
  exampleSecondOptions:
    getLocalItem<IChart>(LocalStorageKey.ExampleSecondOptions) ||
    getExampleSecondInitialValue(getLocalItem<string>(LocalStorageKey.Language) || Language.Ru),
  exampleThirdOptions:
    getLocalItem<IChart>(LocalStorageKey.ExampleThirdOptions) ||
    getExampleThirdInitialValue(getLocalItem<string>(LocalStorageKey.Language) || Language.Ru),
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
      let newState;
      if (action.payload === Language.Ru) {
        newState = {
          ...state,
          exampleFirstOptions: {
            ...state.exampleFirstOptions,
            data: getExampleFirstInitialValue(Language.Ru).data,
            options: getExampleFirstInitialValue(Language.Ru).options,
          },
          exampleSecondOptions: {
            ...state.exampleSecondOptions,
            data: getExampleSecondInitialValue(Language.Ru).data,
            options: getExampleSecondInitialValue(Language.Ru).options,
          },
          exampleThirdOptions: {
            ...state.exampleThirdOptions,
            data: getExampleThirdInitialValue(Language.Ru).data,
            options: getExampleThirdInitialValue(Language.Ru).options,
          },
        };
      } else {
        newState = {
          ...state,
          exampleFirstOptions: {
            ...state.exampleFirstOptions,
            data: getExampleFirstInitialValue(Language.En).data,
            options: getExampleFirstInitialValue(Language.En).options,
          },
          exampleSecondOptions: {
            ...state.exampleSecondOptions,
            data: getExampleSecondInitialValue(Language.En).data,
            options: getExampleSecondInitialValue(Language.En).options,
          },
          exampleThirdOptions: {
            ...state.exampleThirdOptions,
            data: getExampleThirdInitialValue(Language.En).data,
            options: getExampleThirdInitialValue(Language.En).options,
          },
        };
      }
      setLocalItem(LocalStorageKey.ExampleFirstOptions, newState.exampleFirstOptions);
      setLocalItem(LocalStorageKey.ExampleSecondOptions, newState.exampleSecondOptions);
      setLocalItem(LocalStorageKey.ExampleThirdOptions, newState.exampleThirdOptions);
      return newState;
    }

    default:
      return state;
  }
};
