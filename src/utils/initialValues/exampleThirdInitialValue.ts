import type { IChart, IData } from '../types/api/chart';
import { exampleFirstInitialValue } from './exampleFirstInitialValue';

export const exampleThirdInitialValue: IChart = {
  type: 'bar',
  data: {
    labels: [{ value: '2017' }, { value: '2018' }, { value: '2019' }, { value: '2020' }, { value: '2021' }],
    datasets: [
      {
        label: '',
        data: [{ value: 4.6 }, { value: 5.6 }, { value: 4.7 }, { value: 7.4 }, { value: 9.97 }],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Показатель инфляции в Беларуси, %',
    },
  },
};

export const exampleThirdTableValue: (string | number)[][] = [
  ['Показатель по годам', ...exampleFirstInitialValue.data.labels.map((label: IData): string | number => label.value)],
  [
    exampleFirstInitialValue.data.datasets[0].label,
    ...exampleFirstInitialValue.data.datasets[0].data.map((dataItem: IData): string | number => dataItem.value),
  ],
  [
    exampleFirstInitialValue.data.datasets[1].label,
    ...exampleFirstInitialValue.data.datasets[1].data.map((dataItem: IData): string | number => dataItem.value),
  ],
  [
    exampleFirstInitialValue.data.datasets[2].label,
    ...exampleFirstInitialValue.data.datasets[2].data.map((dataItem: IData): string | number => dataItem.value),
  ],
];
