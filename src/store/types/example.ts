import { IChart } from "../../IChart";

export interface ExampleSecondState {
  exampleSecond: IChart;
}

export interface ExampleFirstState {
  exampleFirst: IChart;
}

// export interface ExampleThirdState {
//   exampleFirst: IChart;
// }

export enum ExampleActionType {
  SET_SECOND_EXAMPLE_ADDRESS = "SET_SECOND_EXAMPLE_ADDRESS",
  SET_FIRST_EXAMPLE_ADDRESS = "SET_FIRST_EXAMPLE_ADDRESS",
  SET_FIRST_EXAMPLE_TYPE = "SET_FIRST_EXAMPLE_TYPE",
  SET_SECOND_EXAMPLE_TYPE = "SET_SECOND_EXAMPLE_TYPE",
}

interface SetFirstExampleAddressAction {
  type: ExampleActionType.SET_FIRST_EXAMPLE_ADDRESS;
  payload: string;
}

interface SetSecondExampleAddressAction {
  type: ExampleActionType.SET_SECOND_EXAMPLE_ADDRESS;
  payload: string;
}

interface SetFirstExampleTypeAction {
  type: ExampleActionType.SET_FIRST_EXAMPLE_TYPE;
  payload: string;
}

interface SetSecondExampleTypeAction {
  type: ExampleActionType.SET_SECOND_EXAMPLE_TYPE;
  payload: string;
}

export type ExampleAction =
  | SetSecondExampleAddressAction
  | SetFirstExampleAddressAction
  | SetFirstExampleTypeAction
  | SetSecondExampleTypeAction;
