import { IChart } from '../../initialValue/IChart';

export type OptionsState = {
  options: IChart;
  width: number;
  height: number;
}

export enum OptionsActionType {
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

export type SetTitleAction = { type: OptionsActionType.SET_OPTIONS_TITLE; payload: string; }
export type SetLabelsAction = { type: OptionsActionType.SET_OPTIONS_LABELS; payload: { id: number; value: string }; }
export type SetDataAction = {
  type: OptionsActionType.SET_OPTIONS_DATA;
  payload: { idData: number; value: string; idDataset: number };
}
export type SetLabelInDataAction = {
  type: OptionsActionType.SET_OPTIONS_LABEL_IN_DATA;
  payload: { id: number; value: string };
}
export type SetTypeAction = { type: OptionsActionType.SET_OPTIONS_TYPE; payload: string; }
export type AddRowAction = { type: OptionsActionType.ADD_OPTIONS_ROW; }
export type AddColumnAction = { type: OptionsActionType.ADD_OPTIONS_COLUMN; }
export type RemoveRowAction = { type: OptionsActionType.REMOVE_OPTIONS_ROW; payload: number; }
export type RemoveColumnAction = { type: OptionsActionType.REMOVE_OPTIONS_COLUMN; payload: number; }
export type SetNewOptionsAction = { type: OptionsActionType.SET_NEW_OPTIONS; payload: IChart; }
export type SetWidthAction = { type: OptionsActionType.SET_OPTIONS_WIDTH; payload: number; }
export type SetHeightAction = { type: OptionsActionType.SET_OPTIONS_HEIGHT; payload: number; }

export type OptionsAction =
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
