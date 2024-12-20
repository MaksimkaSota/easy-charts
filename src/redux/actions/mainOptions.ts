import {
  type AddMainColumnAction,
  type AddMainRowAction,
  MainOptionsActionType,
  type RemoveMainColumnAction,
  type RemoveMainRowAction,
  type ResetMainOptionsAction,
  type SetMainDataInDatasetsAction,
  type SetMainHeightAction,
  type SetMainLabelInDatasetsAction,
  type SetMainLabelsAction,
  type SetMainTitleAction,
  type SetMainTypeAction,
  type SetMainWidthAction,
  type SetNewMainOptionsWithIdAction,
} from '../types/mainOptions';
import type { IChart } from '../../utils/types/api/chart';

export const setMainTitle = (type: string): SetMainTitleAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_TITLE,
  payload: type,
});
export const setMainLabels = (id: number, value: string): SetMainLabelsAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_LABELS,
  payload: { id, value },
});
export const setMainDataInDatasets = ({
  datasetId,
  dataId,
  value,
}: {
  datasetId: number;
  dataId: number;
  value: string;
}): SetMainDataInDatasetsAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_DATA_IN_DATASETS,
  payload: { datasetId, dataId, value },
});
export const setMainLabelInDatasets = (id: number, value: string): SetMainLabelInDatasetsAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_LABEL_IN_DATASETS,
  payload: { id, value },
});
export const setMainType = (type: string): SetMainTypeAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_TYPE,
  payload: type,
});
export const addMainRow = (): AddMainRowAction => ({ type: MainOptionsActionType.ADD_MAIN_OPTIONS_ROW });
export const addMainColumn = (): AddMainColumnAction => ({ type: MainOptionsActionType.ADD_MAIN_OPTIONS_COLUMN });
export const removeMainRow = (index: number): RemoveMainRowAction => ({
  type: MainOptionsActionType.REMOVE_MAIN_OPTIONS_ROW,
  payload: index,
});
export const removeMainColumn = (index: number): RemoveMainColumnAction => ({
  type: MainOptionsActionType.REMOVE_MAIN_OPTIONS_COLUMN,
  payload: index,
});
export const setMainOptionsWithId = (options: IChart): SetNewMainOptionsWithIdAction => ({
  type: MainOptionsActionType.SET_NEW_MAIN_OPTIONS_WITH_ID,
  payload: options,
});
export const resetMainOptions = (language: string): ResetMainOptionsAction => ({
  type: MainOptionsActionType.RESET_MAIN_OPTIONS,
  payload: language,
});
export const setMainWidth = (width: number | string): SetMainWidthAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_WIDTH,
  payload: width,
});
export const setMainHeight = (height: number | string): SetMainHeightAction => ({
  type: MainOptionsActionType.SET_MAIN_OPTIONS_HEIGHT,
  payload: height,
});
