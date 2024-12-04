import { type ViewAction, type ViewState, ViewActionType } from '../types/view';
import { LocalStorageKey, Theme } from '../../utils/types/enums';
import { getLocalItem, setLocalItem } from '../../services/browserDataStorage/localStorage';

const initialState: ViewState = {
  themeMode: getLocalItem<string>(LocalStorageKey.Theme) || Theme.Light,
};

export const viewReducer = (state: ViewState = initialState, action: ViewAction): ViewState => {
  switch (action.type) {
    case ViewActionType.SET_VIEW_THEME_MODE:
      setLocalItem(LocalStorageKey.Theme, action.payload);
      return {
        ...state,
        themeMode: action.payload,
      };

    default:
      return state;
  }
};
