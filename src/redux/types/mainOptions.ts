import { IChart } from '../../utils/types/api';

export type MainOptionsState = {
  mainOptions: IChart;
  width: number;
  height: number;
}

export enum MainOptionsActionType {
  SET_OPTIONS_TITLE = 'SET_OPTIONS_TITLE',
  SET_OPTIONS_LABELS = 'SET_OPTIONS_LABELS',
  SET_OPTIONS_DATA = 'SET_OPTIONS_DATA',
  SET_OPTIONS_LABEL_IN_DATA = 'SET_OPTIONS_LABEL_IN_DATA',
  SET_OPTIONS_TYPE = 'SET_OPTIONS_TYPE',
  ADD_OPTIONS_ROW = 'ADD_OPTIONS_ROW',
  ADD_OPTIONS_COLUMN = 'ADD_OPTIONS_COLUMN',
  REMOVE_OPTIONS_ROW = 'REMOVE_OPTIONS_ROW',
  REMOVE_OPTIONS_COLUMN = 'REMOVE_OPTIONS_COLUMN',
  SET_NEW_OPTIONS = 'SET_NEW_OPTIONS',
  SET_OPTIONS_WIDTH = 'SET_OPTIONS_WIDTH',
  SET_OPTIONS_HEIGHT = 'SET_OPTIONS_HEIGHT',
}

export type SetTitleAction = { type: MainOptionsActionType.SET_OPTIONS_TITLE; payload: string; }
export type SetLabelsAction = { type: MainOptionsActionType.SET_OPTIONS_LABELS; payload: { id: number; value: string }; }
export type SetDataAction = {
  type: MainOptionsActionType.SET_OPTIONS_DATA;
  payload: { idData: number; value: string; idDataset: number };
}
export type SetLabelInDataAction = {
  type: MainOptionsActionType.SET_OPTIONS_LABEL_IN_DATA;
  payload: { id: number; value: string };
}
export type SetTypeAction = { type: MainOptionsActionType.SET_OPTIONS_TYPE; payload: string; }
export type AddRowAction = { type: MainOptionsActionType.ADD_OPTIONS_ROW; }
export type AddColumnAction = { type: MainOptionsActionType.ADD_OPTIONS_COLUMN; }
export type RemoveRowAction = { type: MainOptionsActionType.REMOVE_OPTIONS_ROW; payload: number; }
export type RemoveColumnAction = { type: MainOptionsActionType.REMOVE_OPTIONS_COLUMN; payload: number; }
export type SetNewOptionsAction = { type: MainOptionsActionType.SET_NEW_OPTIONS; payload: IChart; }
export type SetWidthAction = { type: MainOptionsActionType.SET_OPTIONS_WIDTH; payload: number; }
export type SetHeightAction = { type: MainOptionsActionType.SET_OPTIONS_HEIGHT; payload: number; }

export type MainOptionsAction =
  | SetTitleAction
  | SetLabelsAction
  | SetDataAction
  | AddRowAction
  | AddColumnAction
  | SetLabelInDataAction
  | SetTypeAction
  | RemoveRowAction
  | RemoveColumnAction
  | SetNewOptionsAction
  | SetWidthAction
  | SetHeightAction;
