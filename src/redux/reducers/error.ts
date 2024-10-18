import type { ErrorState } from '../types/error';
import { RequestState } from '../../utils/types/enums';

const initialState: ErrorState = {
  SET_ADDRESS_MAIN: null,
};

export const errorReducer = (state: ErrorState = initialState, action: any): ErrorState => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === RequestState.Failure ? action.payload : null,
  };
};
