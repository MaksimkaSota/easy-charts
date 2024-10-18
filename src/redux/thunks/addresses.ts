import { isAxiosError } from 'axios';
import type { ThunkType } from '../../utils/types/common';
import type { AddressesAction } from '../types/addresses';
import type { IChart } from '../../utils/types/api';
import { getChartAPI, getChartURL } from '../../services/api/chart';
import { getErrorMessage, transformImageToBase64 } from '../../utils/helpers/servicesHelpers';
import {
  setMainAddressRequest,
  setMainAddressSuccess,
  setMainAddressFailure,
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
    try {
      dispatch(setMainAddressRequest());
      const chart: Blob = await getChartAPI(options, width, height);
      const chartAddress: string = await transformImageToBase64(chart);
      const chartURL: string = getChartURL(options, width, height);
      switch (key) {
        case ExampleKey.First:
          dispatch(setExampleFirstAddress(chartAddress));
          break;
        case ExampleKey.Second:
          dispatch(setExampleSecondAddress(chartAddress));
          break;
        case ExampleKey.Third:
          dispatch(setExampleThirdAddress(chartAddress));
          break;
        default:
          dispatch(setMainAddressSuccess(chartAddress));
          dispatch(setUrlAddress(chartURL));
      }
    } catch (error: unknown) {
      switch (key) {
        case ExampleKey.First:
          if (isAxiosError(error)) {
            /* empty */
          }
          break;
        case ExampleKey.Second:
          if (isAxiosError(error)) {
            /* empty */
          }
          break;
        case ExampleKey.Third:
          if (isAxiosError(error)) {
            /* empty */
          }
          break;
        default:
          if (isAxiosError(error)) {
            dispatch(setMainAddressFailure(getErrorMessage(error), error.response?.status));
          }
      }
    }
  };
};
