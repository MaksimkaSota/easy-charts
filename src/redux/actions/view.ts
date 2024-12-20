import { type SetLanguageModeAction, type SetThemeModeAction, ViewActionType } from '../types/view';

export const setThemeMode = (theme: string): SetThemeModeAction => ({
  type: ViewActionType.SET_VIEW_THEME_MODE,
  payload: theme,
});
export const setLanguageMode = (language: string): SetLanguageModeAction => ({
  type: ViewActionType.SET_VIEW_LANGUAGE_MODE,
  payload: language,
});
