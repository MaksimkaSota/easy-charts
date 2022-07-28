import { exampleValueThird } from "../../initialValue/exampleValueThird";
import {
  ExampleAction,
  ExampleActionType,
  ExampleThirdState,
} from "../types/example";

const initialState: ExampleThirdState = {
  exampleThird: exampleValueThird,
};

export const exampleThirdReducer = (
  state = initialState,
  action: ExampleAction
): ExampleThirdState => {
  switch (action.type) {
    case ExampleActionType.SET_THIRD_EXAMPLE_ADDRESS:
      state.exampleThird.imageURL = "";
      return {
        exampleThird: { ...state.exampleThird, imageURL: action.payload },
      };
    case ExampleActionType.SET_SECOND_EXAMPLE_TYPE:
      return {
        exampleThird: {
          ...state.exampleThird,
          type: action.payload,
          imageURL: "",
        },
      };
    default:
      return state;
  }
};
