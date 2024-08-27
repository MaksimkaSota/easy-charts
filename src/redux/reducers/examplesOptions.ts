import { ExamplesOptionsState, ExamplesOptionsActionType, ExamplesOptionsAction } from '../types/examplesOptions';
import { exampleFirstInitialValue } from '../../utils/initialValues/exampleFirstInitialValue';
import { exampleSecondInitialValue } from '../../utils/initialValues/exampleSecondInitialValue';
import { exampleThirdInitialValue } from '../../utils/initialValues/exampleThirdInitialValue';

const initialState: ExamplesOptionsState = {
  exampleFirstOptions: exampleFirstInitialValue,
  exampleSecondOptions: exampleSecondInitialValue,
  exampleThirdOptions: exampleThirdInitialValue,
};

export const examplesOptionsReducer = (state: ExamplesOptionsState = initialState, action: ExamplesOptionsAction): ExamplesOptionsState => {
  switch (action.type) {
    case ExamplesOptionsActionType.SET_EXAMPLES_OPTIONS_TYPE:
      return {
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
    default:
      return state;
  }
};
