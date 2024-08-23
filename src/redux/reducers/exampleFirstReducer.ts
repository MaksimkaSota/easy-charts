import { exampleValueFirst } from '../../initialValue/exampleValueFirst';
import { ExamplesAction, ExamplesActionType, ExampleFirstState } from '../types/examples';

const initialState: ExampleFirstState = {
  exampleFirst: exampleValueFirst,
};

export const exampleFirstReducer = (state: ExampleFirstState = initialState, action: ExamplesAction): ExampleFirstState => {
  switch (action.type) {
    case ExamplesActionType.SET_EXAMPLE_FIRST_ADDRESS:
      state.exampleFirst.imageURL = '';
      return {
        exampleFirst: {...state.exampleFirst, imageURL: action.payload},
      };
    case ExamplesActionType.SET_EXAMPLE_FIRST_TYPE:
      return {
        exampleFirst: {
          ...state.exampleFirst,
          type: action.payload,
          imageURL: '',
        },
      };
    default:
      return state;
  }
};
