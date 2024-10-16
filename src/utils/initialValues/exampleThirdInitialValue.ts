import type { IChart } from '../types/api';

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
      text: 'Показатели инфляции в Беларуси, %',
    },
  },
};
