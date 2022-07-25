import { IChart } from "../../IChart";

export interface OptionsState {
  options: IChart;
}

export enum OptionsActionType {
  SET_OPTIONS_LABELS = "SET_OPTIONS_LABELS",
  SET_OPTIONS_DATA = "SET_OPTIONS_DATA",
  ADD_ROW = "ADD_ROW",
  ADD_COLUMN = "ADD_COLUMN",
  SET_LABEL_IN_DATA = "SET_LABEL_IN_DATA",
  SET_TYPE = "SET_TYPE",
  REMOVE_ROW = "REMOVE_ROW",
  REMOVE_COLUMN = "REMOVE_COLUMN",
  GET_NEW_OPTIONS = "GET_NEW_OPTIONS",
}

interface SetOptionsLabelsAction {
  type: OptionsActionType.SET_OPTIONS_LABELS;
  payload: { id: number; value: string };
}

interface SetOptionsDataAction {
  type: OptionsActionType.SET_OPTIONS_DATA;
  payload: { idData: number; value: string; idDataset: number };
}

interface AddRowAction {
  type: OptionsActionType.ADD_ROW;
}

interface AddColumnAction {
  type: OptionsActionType.ADD_COLUMN;
}

interface SetLabelInDataAction {
  type: OptionsActionType.SET_LABEL_IN_DATA;
  payload: { id: number; value: string };
}

interface SetTypeAction {
  type: OptionsActionType.SET_TYPE;
  payload: string;
}

interface RemoveRowAction {
  type: OptionsActionType.REMOVE_ROW;
  payload: number;
}

interface RemoveColumnAction {
  type: OptionsActionType.REMOVE_COLUMN;
  payload: number;
}

interface GetNewOptionsAction {
  type: OptionsActionType.GET_NEW_OPTIONS;
  payload: IChart;
}

export type OptionsAction =
  | SetOptionsLabelsAction
  | SetOptionsDataAction
  | AddRowAction
  | AddColumnAction
  | SetLabelInDataAction
  | SetTypeAction
  | RemoveRowAction
  | RemoveColumnAction
  | GetNewOptionsAction;
