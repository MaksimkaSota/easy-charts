import type { ThunkType } from '../../utils/types/common';
import type { AddressesAction } from '../types/addresses';
import type { IChart } from '../../utils/types/api';
import { getChartAPI } from '../../api/chart';
import { transformImageToBase64 } from '../../utils/helpers/thunksHelpers';
import {
  setMainAddress,
  setExampleFirstAddress,
  setExampleSecondAddress,
  setExampleThirdAddress,
} from '../actions/addresses';

export const getAddress = (
  options: IChart,
  width: number,
  height: number,
  key?: string
): ThunkType<AddressesAction> => {
  return async (dispatch) => {
    const chart: Blob = await getChartAPI(options, width, height);
    const address: string = await transformImageToBase64(chart);
    switch (key) {
      case 'firstExample':
        dispatch(setExampleFirstAddress(address));
        break;
      case 'secondExample':
        dispatch(setExampleSecondAddress(address));
        break;
      case 'thirdExample':
        dispatch(setExampleThirdAddress(address));
        break;
      default:
        dispatch(setMainAddress(address));
    }
  };
};
