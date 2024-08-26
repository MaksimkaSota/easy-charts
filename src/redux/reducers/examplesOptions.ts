import { ExamplesOptionsState, ExamplesOptionsActionType, ExamplesOptionsAction } from '../types/examplesOptions';
import { exampleFirstInitialValue } from '../../utils/initialValues/exampleFirstInitialValue';
import { exampleSecondInitialValue } from '../../utils/initialValues/exampleSecondInitialValue';
import { exampleThirdInitialValue } from '../../utils/initialValues/exampleThirdInitialValue';

const initialState: ExamplesOptionsState = {
  exampleFirst: exampleFirstInitialValue,
  exampleSecond: exampleSecondInitialValue,
  exampleThird: exampleThirdInitialValue,
};

export const examplesOptionsReducer = (state: ExamplesOptionsState = initialState, action: ExamplesOptionsAction): ExamplesOptionsState => {
  switch (action.type) {
    case ExamplesOptionsActionType.SET_EXAMPLES_OPTIONS_TYPE:
      return {
        ...state,
        exampleFirst: {
          ...state.exampleFirst,
          type: action.payload,
        },
        exampleSecond: {
          ...state.exampleSecond,
          type: action.payload,
        },
        exampleThird: {
          ...state.exampleThird,
          type: action.payload,
        },
      };
    default:
      return state;
  }
};
