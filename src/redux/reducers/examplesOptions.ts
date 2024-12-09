import {
  type ExamplesOptionsState,
  type ExamplesOptionsAction,
  ExamplesOptionsActionType,
} from '../types/examplesOptions';
import {
  exampleFirstInitialValue,
  exampleFirstInitialValueRu,
  exampleFirstInitialValueEn,
} from '../../utils/initialValues/exampleFirstInitialValue';
import {
  exampleSecondInitialValue,
  exampleSecondInitialValueRu,
  exampleSecondInitialValueEn,
} from '../../utils/initialValues/exampleSecondInitialValue';
import {
  exampleThirdInitialValue,
  exampleThirdInitialValueRu,
  exampleThirdInitialValueEn,
} from '../../utils/initialValues/exampleThirdInitialValue';
import { LocalStorageKey, Language } from '../../utils/types/enums';
import { setLocalItem, getLocalItem } from '../../services/browserDataStorage/localStorage';
import type { IChart } from '../../utils/types/api/chart';

const initialState: ExamplesOptionsState = {
  exampleFirstOptions: getLocalItem<IChart>(LocalStorageKey.ExampleFirstOptions) || exampleFirstInitialValue,
  exampleSecondOptions: getLocalItem<IChart>(LocalStorageKey.ExampleSecondOptions) || exampleSecondInitialValue,
  exampleThirdOptions: getLocalItem<IChart>(LocalStorageKey.ExampleThirdOptions) || exampleThirdInitialValue,
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
            data: exampleFirstInitialValueRu.data,
            options: exampleFirstInitialValueRu.options,
          },
          exampleSecondOptions: {
            ...state.exampleSecondOptions,
            data: exampleSecondInitialValueRu.data,
            options: exampleSecondInitialValueRu.options,
          },
          exampleThirdOptions: {
            ...state.exampleThirdOptions,
            data: exampleThirdInitialValueRu.data,
            options: exampleThirdInitialValueRu.options,
          },
        };
      } else {
        newState = {
          ...state,
          exampleFirstOptions: {
            ...state.exampleFirstOptions,
            data: exampleFirstInitialValueEn.data,
            options: exampleFirstInitialValueEn.options,
          },
          exampleSecondOptions: {
            ...state.exampleSecondOptions,
            data: exampleSecondInitialValueEn.data,
            options: exampleSecondInitialValueEn.options,
          },
          exampleThirdOptions: {
            ...state.exampleThirdOptions,
            data: exampleThirdInitialValueEn.data,
            options: exampleThirdInitialValueEn.options,
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
