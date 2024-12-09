import type { IChart } from '../../utils/types/api/chart';

export type MainOptionsState = {
  mainOptions: IChart;
  width: number | string;
  height: number | string;
};

export enum MainOptionsActionType {
  SET_MAIN_OPTIONS_TITLE = 'SET_MAIN_OPTIONS_TITLE',
  SET_MAIN_OPTIONS_LABELS = 'SET_MAIN_OPTIONS_LABELS',
  SET_MAIN_OPTIONS_DATA_IN_DATASETS = 'SET_MAIN_OPTIONS_DATA_IN_DATASETS',
  SET_MAIN_OPTIONS_LABEL_IN_DATASETS = 'SET_MAIN_OPTIONS_LABEL_IN_DATASETS',
  SET_MAIN_OPTIONS_TYPE = 'SET_MAIN_OPTIONS_TYPE',
  ADD_MAIN_OPTIONS_ROW = 'ADD_MAIN_OPTIONS_ROW',
  ADD_MAIN_OPTIONS_COLUMN = 'ADD_MAIN_OPTIONS_COLUMN',
  REMOVE_MAIN_OPTIONS_ROW = 'REMOVE_MAIN_OPTIONS_ROW',
  REMOVE_MAIN_OPTIONS_COLUMN = 'REMOVE_MAIN_OPTIONS_COLUMN',
  SET_MAIN_OPTIONS_WIDTH = 'SET_MAIN_OPTIONS_WIDTH',
  SET_MAIN_OPTIONS_HEIGHT = 'SET_MAIN_OPTIONS_HEIGHT',
  SET_NEW_MAIN_OPTIONS_WITH_ID = 'SET_NEW_MAIN_OPTIONS_WITH_ID',
  RESET_MAIN_OPTIONS = 'RESET_MAIN_OPTIONS',
}

export type SetMainTitleAction = { type: MainOptionsActionType.SET_MAIN_OPTIONS_TITLE; payload: string };
export type SetMainLabelsAction = {
  type: MainOptionsActionType.SET_MAIN_OPTIONS_LABELS;
  payload: { id: number; value: string };
};
export type SetMainDataInDatasetsAction = {
  type: MainOptionsActionType.SET_MAIN_OPTIONS_DATA_IN_DATASETS;
  payload: { datasetId: number; dataId: number; value: string };
};
export type SetMainLabelInDatasetsAction = {
  type: MainOptionsActionType.SET_MAIN_OPTIONS_LABEL_IN_DATASETS;
  payload: { id: number; value: string };
};
export type SetMainTypeAction = { type: MainOptionsActionType.SET_MAIN_OPTIONS_TYPE; payload: string };
export type AddMainRowAction = { type: MainOptionsActionType.ADD_MAIN_OPTIONS_ROW };
export type AddMainColumnAction = { type: MainOptionsActionType.ADD_MAIN_OPTIONS_COLUMN };
export type RemoveMainRowAction = { type: MainOptionsActionType.REMOVE_MAIN_OPTIONS_ROW; payload: number };
export type RemoveMainColumnAction = { type: MainOptionsActionType.REMOVE_MAIN_OPTIONS_COLUMN; payload: number };
export type SetMainWidthAction = { type: MainOptionsActionType.SET_MAIN_OPTIONS_WIDTH; payload: number | string };
export type SetMainHeightAction = { type: MainOptionsActionType.SET_MAIN_OPTIONS_HEIGHT; payload: number | string };
export type SetNewMainOptionsWithIdAction = {
  type: MainOptionsActionType.SET_NEW_MAIN_OPTIONS_WITH_ID;
  payload: IChart;
};
export type ResetMainOptionsAction = {
  type: MainOptionsActionType.RESET_MAIN_OPTIONS;
  payload: string;
};

export type MainOptionsAction =
  | SetMainTitleAction
  | SetMainLabelsAction
  | SetMainDataInDatasetsAction
  | SetMainLabelInDatasetsAction
  | SetMainTypeAction
  | AddMainRowAction
  | AddMainColumnAction
  | RemoveMainRowAction
  | RemoveMainColumnAction
  | SetMainWidthAction
  | SetMainHeightAction
  | SetNewMainOptionsWithIdAction
  | ResetMainOptionsAction;
