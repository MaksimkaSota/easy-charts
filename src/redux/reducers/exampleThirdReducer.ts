import { exampleValueThird } from '../../initialValue/exampleValueThird';
import { ExamplesAction, ExamplesActionType, ExampleThirdState } from '../types/examples';

const initialState: ExampleThirdState = {
  exampleThird: exampleValueThird,
};

export const exampleThirdReducer = (state: ExampleThirdState = initialState, action: ExamplesAction): ExampleThirdState => {
  switch (action.type) {
    case ExamplesActionType.SET_EXAMPLE_THIRD_ADDRESS:
      state.exampleThird.imageURL = '';
      return {
        exampleThird: {...state.exampleThird, imageURL: action.payload},
      };
    case ExamplesActionType.SET_EXAMPLE_SECOND_TYPE:
      return {
        exampleThird: {
          ...state.exampleThird,
          type: action.payload,
          imageURL: '',
        },
      };
    default:
      return state;
  }
};
