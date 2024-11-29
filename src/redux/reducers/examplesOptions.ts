import {
  type ExamplesOptionsState,
  type ExamplesOptionsAction,
  ExamplesOptionsActionType,
} from '../types/examplesOptions';
import { exampleFirstInitialValue } from '../../utils/initialValues/exampleFirstInitialValue';
import { exampleSecondInitialValue } from '../../utils/initialValues/exampleSecondInitialValue';
import { exampleThirdInitialValue } from '../../utils/initialValues/exampleThirdInitialValue';
import { LocalStorageKey } from '../../utils/types/enums';
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

    default:
      return state;
  }
};
