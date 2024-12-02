import { type SetThemeModeAction, ViewActionType } from '../types/view';

export const setThemeMode = (theme: string): SetThemeModeAction => ({
  type: ViewActionType.SET_VIEW_THEME_MODE,
  payload: theme,
});
