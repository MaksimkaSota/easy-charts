export type ViewState = {
  themeMode: string;
  languageMode: string;
};

export enum ViewActionType {
  SET_VIEW_THEME_MODE = 'SET_VIEW_THEME_MODE',
  SET_VIEW_LANGUAGE_MODE = 'SET_VIEW_LANGUAGE_MODE',
}

export type SetThemeModeAction = { type: ViewActionType.SET_VIEW_THEME_MODE; payload: string };
export type SetLanguageModeAction = { type: ViewActionType.SET_VIEW_LANGUAGE_MODE; payload: string };

export type ViewAction = SetThemeModeAction | SetLanguageModeAction;
