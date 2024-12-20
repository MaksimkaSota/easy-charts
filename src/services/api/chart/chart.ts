import { http } from './http';
import { requestString } from '../endpoints';
import type { IChart } from '../../../utils/types/api/chart';
import { formQueryString } from '../../../utils/helpers/servicesHelpers';

export const getChartAPI = async (options: IChart, width: number | string, height: number | string): Promise<Blob> => {
  const queryString = formQueryString(options, width, height);
  const response = await http.get(queryString);

  return response.data;
};

export const getChartURL = (options: IChart, width: number | string, height: number | string): string => {
  const queryString = formQueryString(options, width, height);

  return requestString.quickchart + queryString;
};
