import { ChangeEvent } from "react";
import { Dispatch } from "redux";
import { OptionsAction, OptionsActionType } from "../types/chartOptions";
import { IChart } from "../../IChart";
import { AddressAction, AddressActionType } from "../types/address";

export const setTypeChart = (type: string) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_TYPE,
      payload: type,
    });
  };
};

export const setInitialValueByLabels = ({
  id,
  value,
}: {
  id: number;
  value: string;
}) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_OPTIONS_LABELS,
      payload: { id, value },
    });
  };
};

export const setInitialValueByData = ({
  idData,
  value,
  idDataset,
}: {
  idData: number;
  value: string;
  idDataset: number;
}) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_OPTIONS_DATA,
      payload: { idData, value, idDataset },
    });
  };
};

export const addRow = () => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.ADD_ROW,
    });
  };
};

export const addColumn = () => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.ADD_COLUMN,
    });
  };
};

export const removeRow = (index: number) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.REMOVE_ROW,
      payload: index,
    });
  };
};

export const removeColumn = (index: number) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.REMOVE_COLUMN,
      payload: index,
    });
  };
};

export const setLabelInData = ({
  id,
  value,
}: {
  id: number;
  value: string;
}) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
      type: OptionsActionType.SET_LABEL_IN_DATA,
      payload: { id, value },
    });
  };
};

export const getNewOptions = (options: IChart) => {
  return (dispatch: Dispatch<OptionsAction>) => {
    dispatch({ type: OptionsActionType.GET_NEW_OPTIONS, payload: options });
  };
};
