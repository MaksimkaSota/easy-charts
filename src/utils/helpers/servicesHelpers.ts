import { v4 as uuidv4 } from 'uuid';
import type { AxiosError } from 'axios';
import i18next from '../../services/localization/i18n';
import type { IChart, IData, IDataset } from '../types/api/chart';
import { ChartParameter, ContentTxtKey, Language } from '../types/enums';
import type { ObjectType } from '../types/common';

export const formQueryString = (options: IChart, width: number | string, height: number | string): string => {
  const type = `type:'${options.type}'`;

  const labels = JSON.stringify(options.data.labels.map((label: IData) => label.value));
  const datasets = JSON.stringify(
    options.data.datasets.map((dataset: IDataset) => ({
      label: dataset.label,
      data: dataset.data.map((dataItem: IData) => dataItem.value),
    }))
  )
    .replace('"label"', 'label')
    .replace('"data"', 'data');
  const data = `data:{labels:${labels}, datasets:${datasets}}`;

  const title = options.options.title.text;
  const optionsURL = `options:{title:{display:true, text:'${title}'}}`;

  const queryObject: ObjectType = {
    [ChartParameter.Chart]: `{${type},${data},${optionsURL}}`,
    [ChartParameter.Width]: width,
    [ChartParameter.Height]: height,
    [ChartParameter.Background]: 'transparent',
    [ChartParameter.Format]: 'png',
    [ChartParameter.Ratio]: '1',
  };

  const queryString = new URLSearchParams(queryObject).toString();
  const decodedQueryString = decodeURIComponent(queryString).replaceAll('+', ' ');

  return `?${decodedQueryString}`;
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
    setStatus(i18next.t(ContentTxtKey.CopyHint));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  } catch {
    setStatus(i18next.t(ContentTxtKey.NoCopyHint));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }
};

export const addUniqueIdInObjects = (objects: ObjectType[]): any[] => {
  return objects.map((object: ObjectType): ObjectType => ({ ...object, id: uuidv4() }));
};

export const getErrorMessage = (errorObject: AxiosError<any>, language: string): string => {
  return language === Language.Ru
    ? 'При загрузке что-то пошло не так...'
    : errorObject.response?.data.message || errorObject.message;
};

export const getTableValues = (titleText: string, exampleInitialValue: IChart): (string | number)[][] => {
  const getArrays = (): (string | number)[][] => {
    return exampleInitialValue.data.datasets.map((dataset: IDataset): (string | number)[] => {
      return [dataset.label, ...dataset.data.map((dataItem: IData): string | number => dataItem.value)];
    });
  };

  return [
    [titleText, ...exampleInitialValue.data.labels.map((label: IData): string | number => label.value)],
    ...getArrays(),
  ];
};
