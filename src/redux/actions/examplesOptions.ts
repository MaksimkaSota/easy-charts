import type { SetExamplesTypeAction } from '../types/examplesOptions';
import { ExamplesOptionsActionType } from '../types/examplesOptions';

export const setExamplesType = (type: string): SetExamplesTypeAction => ({
  type: ExamplesOptionsActionType.SET_EXAMPLES_OPTIONS_TYPE,
  payload: type,
});
