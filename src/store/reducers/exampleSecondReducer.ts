import { exampleValueSecond } from "../../initialValue/exampleValueSecond";
import {
  ExampleAction,
  ExampleActionType,
  ExampleSecondState,
} from "../types/example";

const initialState: ExampleSecondState = {
  exampleSecond: exampleValueSecond,
};

export const exampleSecondReducer = (
  state = initialState,
  action: ExampleAction
): ExampleSecondState => {
  switch (action.type) {
    case ExampleActionType.SET_SECOND_EXAMPLE_ADDRESS:
      state.exampleSecond.imageURL = "";
      return {
        exampleSecond: { ...state.exampleSecond, imageURL: action.payload },
      };
    case ExampleActionType.SET_SECOND_EXAMPLE_TYPE:
      return {
        exampleSecond: {
          ...state.exampleSecond,
          type: action.payload,
          imageURL: "",
        },
      };
    default:
      return state;
  }
};
