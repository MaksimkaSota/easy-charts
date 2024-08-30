import type { IChart } from '../../utils/types/api';

export type MainOptionsState = {
  mainOptions: IChart;
  width: number;
  height: number;
};

export enum MainOptionsActionType {
  SET_MAIN_OPTIONS_TITLE = 'SET_MAIN_OPTIONS_TITLE',
  SET_MAIN_OPTIONS_LABELS = 'SET_MAIN_OPTIONS_LABELS',
  SET_MAIN_OPTIONS_DATA_IN_DATASETS = 'SET_MAIN_OPTIONS_DATA_IN_DATASETS',
  SET_MAIN_OPTIONS_LABEL_IN_DATASETS = 'SET_MAIN_OPTIONS_LABEL_IN_DATASETS',
  SET_MAIN_OPTIONS_TYPE = 'SET_MAIN_OPTIONS_TYPE',
  ADD_MAIN_OPTIONS_ROW = 'ADD_OPTIONS_ROW',
  ADD_MAIN_OPTIONS_COLUMN = 'ADD_OPTIONS_COLUMN',
  REMOVE_MAIN_OPTIONS_ROW = 'REMOVE_OPTIONS_ROW',
  REMOVE_MAIN_OPTIONS_COLUMN = 'REMOVE_OPTIONS_COLUMN',
  SET_NEW_MAIN_OPTIONS = 'SET_NEW_OPTIONS',
  SET_MAIN_OPTIONS_WIDTH = 'SET_OPTIONS_WIDTH',
  SET_MAIN_OPTIONS_HEIGHT = 'SET_OPTIONS_HEIGHT',
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
export type SetNewMainOptionsAction = { type: MainOptionsActionType.SET_NEW_MAIN_OPTIONS; payload: IChart };
export type SetMainWidthAction = { type: MainOptionsActionType.SET_MAIN_OPTIONS_WIDTH; payload: number };
export type SetMainHeightAction = { type: MainOptionsActionType.SET_MAIN_OPTIONS_HEIGHT; payload: number };

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
  | SetNewMainOptionsAction
  | SetMainWidthAction
  | SetMainHeightAction;
