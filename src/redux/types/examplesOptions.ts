import { IChart } from '../../utils/types/api';

export type ExamplesOptionsState = {
  exampleFirst: IChart;
  exampleSecond: IChart;
  exampleThird: IChart;
}

export enum ExamplesOptionsActionType {
  SET_EXAMPLES_OPTIONS_TYPE = 'SET_EXAMPLES_OPTIONS_TYPE',
}

export type SetExamplesTypeAction = {
  type: ExamplesOptionsActionType.SET_EXAMPLES_OPTIONS_TYPE;
  payload: string;
}

export type ExamplesOptionsAction = SetExamplesTypeAction;
