import type { LoadingState } from '../types/loading';
import { RequestState } from '../../utils/types/enums';

const initialState: LoadingState = {
  SET_ADDRESS_MAIN: true,
};

export const loadingReducer = (state: LoadingState = initialState, action: any): LoadingState => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === RequestState.Request,
  };
};
