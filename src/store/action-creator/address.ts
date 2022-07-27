import QuickChart from "quickchart-js";
import { Dispatch } from "redux";
import { AddressAction, AddressActionType } from "../types/address";
import { IChart } from "../../IChart";
import { ExampleActionType, ExampleAction } from "../types/example";

const chartOrigin = new QuickChart();

export const getAddressURL = (options: IChart) => {
  chartOrigin.setConfig(options);
  const addressURL = chartOrigin.getUrl();

  return (dispatch: Dispatch<AddressAction>) => {
    dispatch({ type: AddressActionType.GET_ADDRESS, payload: addressURL });
  };
};

// export const getExampleAddressURL = ([
//   optionsFirst,
//   optionsSecond,
// ]: IChart[]) => {
//   chartOrigin.setConfig(optionsFirst);
//   const addressURLFirst = chartOrigin.getUrl();
//
//   chartOrigin.setConfig(optionsSecond);
//   const addressURLSecond = chartOrigin.getUrl();
//
//   return (dispatch: Dispatch<ExampleAction>) => {
//     dispatch({
//       type: ExampleActionType.SET_FIRST_EXAMPLE_ADDRESS,
//       payload: addressURLFirst,
//     });
//
//     dispatch({
//       type: ExampleActionType.SET_SECOND_EXAMPLE_ADDRESS,
//       payload: addressURLSecond,
//     });
//   };
// };

export const setWidthHeight = ({
  width,
  height,
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
