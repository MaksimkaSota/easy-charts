import type { IChart } from '../types/api';

export const exampleThirdInitialValue: IChart = {
  type: 'bar',
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: '',
        data: [4.6, 5.6, 4.7, 7.4, 9.97],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Показатели инфляции в Беларуси, %',
    },
  },
};
