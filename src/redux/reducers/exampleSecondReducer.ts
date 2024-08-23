import { exampleValueSecond } from '../../initialValue/exampleValueSecond';
import { ExamplesAction, ExamplesActionType, ExampleSecondState } from '../types/examples';

const initialState: ExampleSecondState = {
  exampleSecond: exampleValueSecond,
};

export const exampleSecondReducer = (state: ExampleSecondState = initialState, action: ExamplesAction): ExampleSecondState => {
  switch (action.type) {
    case ExamplesActionType.SET_EXAMPLE_SECOND_ADDRESS:
      state.exampleSecond.imageURL = '';
      return {
        exampleSecond: {...state.exampleSecond, imageURL: action.payload},
      };
    case ExamplesActionType.SET_EXAMPLE_SECOND_TYPE:
      return {
        exampleSecond: {
          ...state.exampleSecond,
          type: action.payload,
          imageURL: '',
        },
      };
    default:
      return state;
  }
};
