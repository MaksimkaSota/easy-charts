import {
  type SetExamplesTypeAction,
  type ResetExamplesOptionsAction,
  ExamplesOptionsActionType,
} from '../types/examplesOptions';

export const setExamplesType = (type: string): SetExamplesTypeAction => ({
  type: ExamplesOptionsActionType.SET_EXAMPLES_OPTIONS_TYPE,
  payload: type,
});
export const resetExamplesOptions = (language: string): ResetExamplesOptionsAction => ({
  type: ExamplesOptionsActionType.RESET_EXAMPLES_OPTIONS,
  payload: language,
});
