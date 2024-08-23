import { IChart } from '../../initialValue/IChart';
import { Dispatch } from 'redux';
import { ExamplesAction, ExamplesActionType } from '../types/examples';
import QuickChart from 'quickchart-js';

const chartOrigin = new QuickChart();

export const getExampleAddressURL = ([optionsFirst, optionsSecond, optionsThird]: IChart[]) => {
  chartOrigin.setWidth(800);
  chartOrigin.setHeight(400);
  chartOrigin.setConfig(optionsFirst);
  const addressURLFirst = chartOrigin.getUrl();

  chartOrigin.setConfig(optionsSecond);
  let addressURLSecond = chartOrigin.getUrl();

  chartOrigin.setConfig(optionsThird);
  let addressURLThird = chartOrigin.getUrl();

  return (dispatch: Dispatch<ExamplesAction>) => {
    dispatch({
      type: ExamplesActionType.SET_EXAMPLE_FIRST_ADDRESS,
      payload: addressURLFirst,
    });

    dispatch({
      type: ExamplesActionType.SET_EXAMPLE_SECOND_ADDRESS,
      payload: addressURLSecond,
    });

    dispatch({
      type: ExamplesActionType.SET_EXAMPLE_THIRD_ADDRESS,
      payload: addressURLThird,
    });
  };
};

export const setTypeChartInExamples = (type: string) => {
  return (dispatch: Dispatch<ExamplesAction>) => {
    dispatch({
      type: ExamplesActionType.SET_EXAMPLE_FIRST_TYPE,
      payload: type,
    });

    dispatch({
      type: ExamplesActionType.SET_EXAMPLE_SECOND_TYPE,
      payload: type,
    });

    dispatch({
      type: ExamplesActionType.SET_EXAMPLE_THIRD_TYPE,
      payload: type,
    });
  };
};
