import { IChart } from '../../initialValue/IChart';

export type ExampleFirstState = {
  exampleFirst: IChart;
}
export type ExampleSecondState = {
  exampleSecond: IChart;
}
export type ExampleThirdState = {
  exampleThird: IChart;
}

export enum ExamplesActionType {
  SET_EXAMPLE_FIRST_ADDRESS = 'SET_EXAMPLE_FIRST_ADDRESS',
  SET_EXAMPLE_SECOND_ADDRESS = 'SET_EXAMPLE_SECOND_ADDRESS',
  SET_EXAMPLE_THIRD_ADDRESS = 'SET_EXAMPLE_THIRD_ADDRESS',
  SET_EXAMPLE_FIRST_TYPE = 'SET_EXAMPLE_FIRST_TYPE',
  SET_EXAMPLE_SECOND_TYPE = 'SET_EXAMPLE_SECOND_TYPE',
  SET_EXAMPLE_THIRD_TYPE = 'SET_EXAMPLE_THIRD_TYPE',
}

export type SetExampleFirstAddressAction = { type: ExamplesActionType.SET_EXAMPLE_FIRST_ADDRESS; payload: string; }
export type SetExampleSecondAddressAction = { type: ExamplesActionType.SET_EXAMPLE_SECOND_ADDRESS; payload: string; }
export type SetExampleThirdAddressAction = { type: ExamplesActionType.SET_EXAMPLE_THIRD_ADDRESS; payload: string; }
export type SetExampleFirstTypeAction = { type: ExamplesActionType.SET_EXAMPLE_FIRST_TYPE; payload: string; }
export type SetExampleSecondTypeAction = { type: ExamplesActionType.SET_EXAMPLE_SECOND_TYPE; payload: string; }
export type SetExampleThirdTypeAction = { type: ExamplesActionType.SET_EXAMPLE_THIRD_TYPE; payload: string; }

export type ExamplesAction =
  | SetExampleFirstAddressAction
  | SetExampleSecondAddressAction
  | SetExampleThirdAddressAction
  | SetExampleFirstTypeAction
  | SetExampleSecondTypeAction
  | SetExampleThirdTypeAction;
