import { type ViewAction, ViewActionType, type ViewState } from '../types/view';
import { LocalStorageKey } from '../../utils/types/enums';
import { getLocalItem, setLocalItem } from '../../services/browserDataStorage/localStorage';
import { DEFAULT_LANGUAGE, DEFAULT_THEME } from '../../utils/constants';

const initialState: ViewState = {
  themeMode: getLocalItem<string>(LocalStorageKey.Theme) || DEFAULT_THEME,
  languageMode: getLocalItem<string>(LocalStorageKey.Language) || DEFAULT_LANGUAGE,
};

export const viewReducer = (state: ViewState = initialState, action: ViewAction): ViewState => {
  switch (action.type) {
    case ViewActionType.SET_VIEW_THEME_MODE:
      setLocalItem(LocalStorageKey.Theme, action.payload);
      return {
        ...state,
        themeMode: action.payload,
      };

    case ViewActionType.SET_VIEW_LANGUAGE_MODE:
      setLocalItem(LocalStorageKey.Language, action.payload);
      return {
        ...state,
        languageMode: action.payload,
      };

    default:
      return state;
  }
};
