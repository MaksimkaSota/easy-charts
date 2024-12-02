import { type ViewAction, type ViewState, ViewActionType } from '../types/view';
import { Theme } from '../../utils/types/enums';

const initialState: ViewState = {
  themeMode: Theme.Light,
};

export const viewReducer = (state: ViewState = initialState, action: ViewAction): ViewState => {
  switch (action.type) {
    case ViewActionType.SET_VIEW_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload,
      };

    default:
      return state;
  }
};
