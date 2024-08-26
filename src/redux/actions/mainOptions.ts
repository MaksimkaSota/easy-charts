import { Dispatch } from 'redux';
import { MainOptionsAction, MainOptionsActionType, SetHeightAction, SetWidthAction } from '../types/mainOptions';
import { IChart } from '../../utils/types/api';

export const setTitleChart = (type: string) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.SET_OPTIONS_TITLE,
      payload: type,
    });
  };
};
export const setInitialValueByLabels = ({id, value}: { id: number; value: string; }) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.SET_OPTIONS_LABELS,
      payload: {id, value},
    });
  };
};
export const setInitialValueByData = ({idData, value, idDataset}: {
  idData: number;
  value: string;
  idDataset: number;
}) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.SET_OPTIONS_DATA,
      payload: {idData, value, idDataset},
    });
  };
};
export const setLabelInData = ({id, value}: { id: number; value: string; }) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.SET_OPTIONS_LABEL_IN_DATA,
      payload: {id, value},
    });
  };
};
export const setTypeChart = (type: string) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.SET_OPTIONS_TYPE,
      payload: type,
    });
  };
};
export const addRow = () => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.ADD_OPTIONS_ROW,
    });
  };
};
export const addColumn = () => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.ADD_OPTIONS_COLUMN,
    });
  };
};
export const removeRow = (index: number) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.REMOVE_OPTIONS_ROW,
      payload: index,
    });
  };
};
export const removeColumn = (index: number) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({
      type: MainOptionsActionType.REMOVE_OPTIONS_COLUMN,
      payload: index,
    });
  };
};
export const getNewOptions = (options: IChart) => {
  return (dispatch: Dispatch<MainOptionsAction>) => {
    dispatch({type: MainOptionsActionType.SET_NEW_OPTIONS, payload: options});
  };
};
export const setWidth = (width: number): SetWidthAction => ({
  type: MainOptionsActionType.SET_OPTIONS_WIDTH,
  payload: width
});
export const setHeight = (height: number): SetHeightAction => ({
  type: MainOptionsActionType.SET_OPTIONS_HEIGHT,
  payload: height
});
