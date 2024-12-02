export type ViewState = {
  themeMode: string;
};

export enum ViewActionType {
  SET_VIEW_THEME_MODE = 'SET_VIEW_THEME_MODE',
}

export type SetThemeModeAction = { type: ViewActionType.SET_VIEW_THEME_MODE; payload: string };

export type ViewAction = SetThemeModeAction;
