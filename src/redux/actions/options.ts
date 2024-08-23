import { Dispatch } from 'redux';
import { OptionsAction, OptionsActionType } from '../types/options';
import { IChart } from '../../initialValue/IChart';

export const setTitleChart = (type: string) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_OPTIONS_TITLE,
      payload: type,
    });
  };
};
export const setInitialValueByLabels = ({id, value}: { id: number; value: string; }) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_OPTIONS_LABELS,
      payload: {id, value},
    });
  };
};
export const setInitialValueByData = ({idData, value, idDataset}: {
  idData: number;
  value: string;
  idDataset: number;
}) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_OPTIONS_DATA,
      payload: {idData, value, idDataset},
    });
  };
};
export const setLabelInData = ({id, value}: { id: number; value: string; }) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_OPTIONS_LABEL_IN_DATA,
      payload: {id, value},
    });
  };
};
export const setTypeChart = (type: string) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_OPTIONS_TYPE,
      payload: type,
    });
  };
};
export const addRow = () => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.ADD_OPTIONS_ROW,
    });
  };
};
export const addColumn = () => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.ADD_OPTIONS_COLUMN,
    });
  };
};
export const removeRow = (index: number) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.REMOVE_OPTIONS_ROW,
      payload: index,
    });
  };
};
export const removeColumn = (index: number) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.REMOVE_OPTIONS_COLUMN,
      payload: index,
    });
  };
};
export const getNewOptions = (options: IChart) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({type: OptionsActionType.SET_NEW_OPTIONS, payload: options});
  };
};
