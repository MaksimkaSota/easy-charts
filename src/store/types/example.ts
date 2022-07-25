import { IChart } from "../../IChart";

export interface ExampleSecondState {
  exampleSecond: IChart;
}

export interface ExampleFirstState {
  exampleFirst: IChart;
}

export enum ExampleActionType {
  SET_SECOND_EXAMPLE_ADDRESS = "SET_SECOND_EXAMPLE_ADDRESS",
  SET_FIRST_EXAMPLE_ADDRESS = "SET_FIRST_EXAMPLE_ADDRESS",
}

interface SetSecondExampleAddressAction {
  type: ExampleActionType.SET_SECOND_EXAMPLE_ADDRESS;
  payload: string;
}

interface SetFirstExampleAddressAction {
  type: ExampleActionType.SET_FIRST_EXAMPLE_ADDRESS;
  payload: string;
}

export type ExampleAction =
  | SetSecondExampleAddressAction
  | SetFirstExampleAddressAction;
