import { isAxiosError } from 'axios';
import type { ThunkType } from '../../utils/types/common';
import type { AddressesAction } from '../types/addresses';
import type { IChart } from '../../utils/types/api/chart';
import { getChartAPI, getChartURL } from '../../services/api/chart/chart';
import { getErrorMessage, transformImageToBase64 } from '../../utils/helpers/servicesHelpers';
import {
  setMainAddressRequest,
  setMainAddressSuccess,
  setMainAddressFailure,
  setUrlAddress,
  setExampleFirstAddressRequest,
  setExampleFirstAddressSuccess,
  setExampleFirstAddressFailure,
  setExampleSecondAddressRequest,
  setExampleSecondAddressSuccess,
  setExampleSecondAddressFailure,
  setExampleThirdAddressRequest,
  setExampleThirdAddressSuccess,
  setExampleThirdAddressFailure,
} from '../actions/addresses';

export const getAddress = (
  options: IChart,
  width: number | string,
  height: number | string
): ThunkType<AddressesAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setMainAddressRequest());
      const chart: Blob = await getChartAPI(options, width, height);
      const chartAddress: string = await transformImageToBase64(chart);
      const chartURL: string = getChartURL(options, width, height);
      dispatch(setMainAddressSuccess(chartAddress));
      dispatch(setUrlAddress(chartURL));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(setMainAddressFailure(getErrorMessage(error, getState().view.languageMode), error.response?.status));
      }
    }
  };
};

export const getExampleFirstAddress = (
  options: IChart,
  width: number | string,
  height: number | string
): ThunkType<AddressesAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setExampleFirstAddressRequest());
      const chart: Blob = await getChartAPI(options, width, height);
      const chartAddress: string = await transformImageToBase64(chart);
      dispatch(setExampleFirstAddressSuccess(chartAddress));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(
          setExampleFirstAddressFailure(getErrorMessage(error, getState().view.languageMode), error.response?.status)
        );
      }
    }
  };
};

export const getExampleSecondAddress = (
  options: IChart,
  width: number | string,
  height: number | string
): ThunkType<AddressesAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setExampleSecondAddressRequest());
      const chart: Blob = await getChartAPI(options, width, height);
      const chartAddress: string = await transformImageToBase64(chart);
      dispatch(setExampleSecondAddressSuccess(chartAddress));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(
          setExampleSecondAddressFailure(getErrorMessage(error, getState().view.languageMode), error.response?.status)
        );
      }
    }
  };
};

export const getExampleThirdAddress = (
  options: IChart,
  width: number | string,
  height: number | string
): ThunkType<AddressesAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setExampleThirdAddressRequest());
      const chart: Blob = await getChartAPI(options, width, height);
      const chartAddress: string = await transformImageToBase64(chart);
      dispatch(setExampleThirdAddressSuccess(chartAddress));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(
          setExampleThirdAddressFailure(getErrorMessage(error, getState().view.languageMode), error.response?.status)
        );
      }
    }
  };
};
