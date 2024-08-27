import {
  MainOptionsActionType,
  SetMainTitleAction,
  SetMainLabelsAction,
  SetMainDataAction,
  SetMainLabelInDataAction,
  SetMainTypeAction,
  AddMainRowAction,
  AddMainColumnAction,
  RemoveMainRowAction,
  RemoveMainColumnAction,
  SetNewMainOptionsAction,
  SetMainWidthAction,
  SetMainHeightAction
} from '../types/mainOptions';
import { IChart } from '../../utils/types/api';

export const setMainTitle = (type: string): SetMainTitleAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_TITLE,
  payload: type,
});
export const setMainLabels = (id: number, value: string): SetMainLabelsAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_LABELS,
  payload: {id, value},
});
export const setMainData = ({idData, value, idDataset}: {
  idData: number;
  value: string;
  idDataset: number;
}): SetMainDataAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_DATA,
  payload: {idData, value, idDataset},
});
export const setMainLabelInData = (id: number, value: string): SetMainLabelInDataAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_LABEL_IN_DATA,
  payload: {id, value},
});
export const setMainType = (type: string): SetMainTypeAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_TYPE,
  payload: type,
});
export const addMainRow = (): AddMainRowAction => ({type: MainOptionsActionType.ADD_MAIN_OPTIONS_ROW});
export const addMainColumn = (): AddMainColumnAction => ({type: MainOptionsActionType.ADD_MAIN_OPTIONS_COLUMN});
export const removeMainRow = (index: number): RemoveMainRowAction => ({
  type: MainOptionsActionType.REMOVE_MAIN_OPTIONS_ROW,
  payload: index,
});
export const removeMainColumn = (index: number): RemoveMainColumnAction => ({
  type: MainOptionsActionType.REMOVE_MAIN_OPTIONS_COLUMN,
  payload: index,
});
export const setNewMainOptions = (options: IChart): SetNewMainOptionsAction => ({
  type: MainOptionsActionType.SET_NEW_MAIN_OPTIONS,
  payload: options
});
export const setWidth = (width: number): SetMainWidthAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_WIDTH,
  payload: width
});
export const setHeight = (height: number): SetMainHeightAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_HEIGHT,
  payload: height
});
