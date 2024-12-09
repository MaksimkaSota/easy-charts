import type { IChart } from '../../utils/types/api/chart';

export type ExamplesOptionsState = {
  exampleFirstOptions: IChart;
  exampleSecondOptions: IChart;
  exampleThirdOptions: IChart;
};

export enum ExamplesOptionsActionType {
  SET_EXAMPLES_OPTIONS_TYPE = 'SET_EXAMPLES_OPTIONS_TYPE',
  RESET_EXAMPLES_OPTIONS = 'RESET_EXAMPLES_OPTIONS',
}

export type SetExamplesTypeAction = {
  type: ExamplesOptionsActionType.SET_EXAMPLES_OPTIONS_TYPE;
  payload: string;
};
export type ResetExamplesOptionsAction = {
  type: ExamplesOptionsActionType.RESET_EXAMPLES_OPTIONS;
  payload: string;
};

export type ExamplesOptionsAction = SetExamplesTypeAction | ResetExamplesOptionsAction;
