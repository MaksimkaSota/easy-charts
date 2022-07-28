import QuickChart from "quickchart-js";
import { Dispatch } from "redux";
import { AddressAction, AddressActionType } from "../types/address";
import { IChart } from "../../initialValue/IChart";

const chartOrigin = new QuickChart();

export const getAddressURL = (options: IChart) => {
  chartOrigin.setConfig(options);
  const addressURL = chartOrigin.getUrl();

  return (dispatch: Dispatch<AddressAction>) => {
    dispatch({ type: AddressActionType.GET_ADDRESS, payload: addressURL });
  };
};

export const setWidthHeight = ({
  width = 800,
  height = 400,
}: {
  width: number;
  height: number;
}) => {
  chartOrigin.setWidth(width);
  chartOrigin.setHeight(height);
  const addressURL = chartOrigin.getUrl();

  return (dispatch: Dispatch<AddressAction>) => {
    dispatch({ type: AddressActionType.SET_WIDTH_HEIGHT, payload: addressURL });
  };
};
