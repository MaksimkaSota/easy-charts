import QuickChart from 'quickchart-js';
import { Dispatch } from 'redux';
import { AddressAction, AddressActionType } from '../types/address';
import { IChart } from '../../initialValue/IChart';

const chartOrigin = new QuickChart();

export const getAddressURL = (options: IChart) => {
  chartOrigin.setWidth(800);
  chartOrigin.setHeight(400);
  chartOrigin.setConfig(options);
  const addressURL = chartOrigin.getUrl();

  return (dispatch: Dispatch<AddressAction>) => {
    dispatch({type: AddressActionType.SET_ADDRESS, payload: addressURL});
  };
};

export const setWidthHeight = ({width, height}: { width: number; height: number; }) => {
  chartOrigin.setWidth(width);
  chartOrigin.setHeight(height);
  const addressURL = chartOrigin.getUrl();

  return (dispatch: Dispatch<AddressAction>) => {
    dispatch({type: AddressActionType.SET_ADDRESS_WIDTH_HEIGHT, payload: addressURL});
  };
};
