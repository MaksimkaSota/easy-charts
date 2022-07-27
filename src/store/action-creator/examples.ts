import { IChart } from "../../IChart";
import { Dispatch } from "redux";
import { ExampleAction, ExampleActionType } from "../types/example";
import QuickChart from "quickchart-js";

const chartOrigin = new QuickChart();

export const getExampleAddressURL = ([
  optionsFirst,
  optionsSecond,
]: IChart[]) => {
  chartOrigin.setConfig(optionsFirst);
  const addressURLFirst = chartOrigin.getUrl();

  chartOrigin.setConfig(optionsSecond);
  let addressURLSecond = chartOrigin.getUrl();
  console.log(addressURLSecond);

  return (dispatch: Dispatch<ExampleAction>) => {
    dispatch({
      type: ExampleActionType.SET_FIRST_EXAMPLE_ADDRESS,
      payload: addressURLFirst,
    });

    dispatch({
      type: ExampleActionType.SET_SECOND_EXAMPLE_ADDRESS,
      payload: addressURLSecond,
    });
  };
};

export const setTypeChartInExamples = (type: string) => {
  return (dispatch: Dispatch<ExampleAction>) => {
    dispatch({
      type: ExampleActionType.SET_FIRST_EXAMPLE_TYPE,
      payload: type,
    });

    dispatch({
      type: ExampleActionType.SET_SECOND_EXAMPLE_TYPE,
      payload: type,
    });
  };
};
