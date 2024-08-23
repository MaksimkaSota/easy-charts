import { IChart } from '../../initialValue/IChart';
import { AddressAction } from '../types/address';
import { getChartAPI } from '../../api/chart';
import { transformImageToBase64 } from '../../utils/helpers/thunksHelpers';
import { setAddress } from '../actions/address';
import { ThunkType } from '../../utils/types/common';

export const getAddress = (options: IChart, width: number, height: number): ThunkType<AddressAction> => {
  return async (dispatch) => {
    const chart: Blob = await getChartAPI(options, width, height);
    const address: string = await transformImageToBase64(chart);
    dispatch(setAddress(address));
  };
};
