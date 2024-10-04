import type { IChart } from '../types/api';
import { ChartParameter } from '../types/enums';

export const formQueryString = (options: IChart, width: number | string, height: number | string): string => {
  const type = `type:'${options.type}'`;

  const labels = JSON.stringify(options.data.labels);
  const datasets = JSON.stringify(options.data.datasets).replace('"label"', 'label').replace('"data"', 'data');
  const data = `data:{labels:${labels}, datasets:${datasets}}`;

  const title = options.options.title.text;
  const optionsURL = `options:{title:{display:true, text:'${title}'}}`;

  const background = `${ChartParameter.background}=transparent`;

  const widthURL = `${ChartParameter.width}=${width}`;
  const heightURL = `${ChartParameter.height}=${height}`;

  const ratio = `${ChartParameter.ratio}=1`;

  return `?${ChartParameter.chart}={${type},${data},${optionsURL}}&${background}&${widthURL}&${heightURL}&${ratio}`;
};

export const transformImageToBase64 = (blob: Blob): Promise<any> => {
  return new Promise((resolve, reject): void => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const copyTextOnClick = async (
  text: string,
  setStatus: (status: string | null) => void,
  setIsCopied: (isCopied: boolean) => void
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    setStatus('Удачное копирование');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  } catch {
    setStatus('Неудачное копирование');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }
};
