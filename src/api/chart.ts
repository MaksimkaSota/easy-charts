import { http } from './http';
import { IChart } from '../initialValue/IChart';

export const getChartAPI = async (options: IChart, width: number, height: number): Promise<Blob> => {
  const typeURL = `type:'${options.type}'`;

  const labels = JSON.stringify(options.data.labels)
  const datasets = JSON.stringify(options.data.datasets).replace('"label"', 'label').replace('"data"', 'data');
  const dataURL = `data:{labels:${labels}, datasets:${datasets}}`;

  const title = options.options.title.text;
  const optionsURL = `options:{title:{display:true, text:'${title}'}}`;

  const background = `backgroundColor=transparent`;

  const widthURL = `width=${width}`;
  const heightURL = `height=${height}`;

  const response = await http.get(`?c={${typeURL},${dataURL},${optionsURL}}&${background}&${widthURL}&${heightURL}&devicePixelRatio=1`);
  return response.data;
};
