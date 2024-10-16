import type { IChart } from '../types/api';

export const mainInitialValue: IChart = {
  type: 'bar',
  data: {
    labels: [
      { value: 'Строка 1', id: 'label1' },
      { value: 'Строка 2', id: 'label2' },
      { value: 'Строка 3', id: 'label3' },
      { value: 'Строка 4', id: 'label4' },
      { value: 'Строка 5', id: 'label5' },
    ],
    datasets: [
      {
        label: 'Заголовок 1',
        data: [
          { value: 1, id: 'datasets-dataItem1' },
          { value: 2, id: 'datasets-dataItem2' },
          { value: 3, id: 'datasets-dataItem3' },
          { value: 4, id: 'datasets-dataItem4' },
          { value: 5, id: 'datasets-dataItem5' },
        ],
        id: 'dataset1',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Заголовок графика',
    },
  },
};
