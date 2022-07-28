import { exampleValueFirst } from "../../initialValue/exampleValueFirst";
import {
  ExampleAction,
  ExampleActionType,
  ExampleFirstState,
} from "../types/example";

const initialState: ExampleFirstState = {
  exampleFirst: exampleValueFirst,
};

export const exampleFirstReducer = (
  state = initialState,
  action: ExampleAction
): ExampleFirstState => {
  switch (action.type) {
    case ExampleActionType.SET_FIRST_EXAMPLE_ADDRESS:
      state.exampleFirst.imageURL = "";
      return {
        exampleFirst: { ...state.exampleFirst, imageURL: action.payload },
      };
    case ExampleActionType.SET_FIRST_EXAMPLE_TYPE:
      return {
        exampleFirst: {
          ...state.exampleFirst,
          type: action.payload,
          imageURL: "",
        },
      };
    default:
      return state;
  }
};
