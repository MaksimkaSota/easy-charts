import { http } from './http';
import type { IChart } from '../utils/types/api';
import { ChartParameter } from '../utils/types/enums';

export const getChartAPI = async (options: IChart, width: number | string, height: number | string): Promise<Blob> => {
  const typeURL = `type:'${options.type}'`;

  const labels = JSON.stringify(options.data.labels);
  const datasets = JSON.stringify(options.data.datasets).replace('"label"', 'label').replace('"data"', 'data');
  const dataURL = `data:{labels:${labels}, datasets:${datasets}}`;

  const title = options.options.title.text;
  const optionsURL = `options:{title:{display:true, text:'${title}'}}`;

  const background = `${ChartParameter.background}=transparent`;

  const widthURL = `${ChartParameter.width}=${width}`;
  const heightURL = `${ChartParameter.height}=${height}`;

  const ratio = `${ChartParameter.ratio}=1`;

  const response = await http.get(
    `?${ChartParameter.chart}={${typeURL},${dataURL},${optionsURL}}&${background}&${widthURL}&${heightURL}&${ratio}`
  );
  return response.data;
};
