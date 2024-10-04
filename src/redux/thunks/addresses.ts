import type { ThunkType } from '../../utils/types/common';
import type { AddressesAction } from '../types/addresses';
import type { IChart } from '../../utils/types/api';
import { getChartAPI, getChartURL } from '../../api/chart';
import { transformImageToBase64 } from '../../utils/helpers/servicesHelpers';
import {
  setMainAddress,
  setUrlAddress,
  setExampleFirstAddress,
  setExampleSecondAddress,
  setExampleThirdAddress,
} from '../actions/addresses';
import { ExampleKey } from '../../utils/types/enums';

export const getAddress = (
  options: IChart,
  width: number | string,
  height: number | string,
  key?: string
): ThunkType<AddressesAction> => {
  return async (dispatch) => {
    const chart: Blob = await getChartAPI(options, width, height);
    const chartAddress: string = await transformImageToBase64(chart);
    const chartURL: string = getChartURL(options, width, height);
    switch (key) {
      case ExampleKey.first:
        dispatch(setExampleFirstAddress(chartAddress));
        break;
      case ExampleKey.second:
        dispatch(setExampleSecondAddress(chartAddress));
        break;
      case ExampleKey.third:
        dispatch(setExampleThirdAddress(chartAddress));
        break;
      default:
        dispatch(setMainAddress(chartAddress));
        dispatch(setUrlAddress(chartURL));
    }
  };
};
