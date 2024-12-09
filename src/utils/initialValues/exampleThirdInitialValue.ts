import type { IChart } from '../types/api/chart';

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
      text: '',
    },
  },
};

export const exampleThirdInitialValueRu: IChart = {
  type: exampleThirdInitialValue.type,
  data: {
    labels: exampleThirdInitialValue.data.labels,
    datasets: [
      {
        label: 'Показатель',
        data: exampleThirdInitialValue.data.datasets[0].data,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Инфляция в Беларуси, %',
    },
  },
};

export const exampleThirdInitialValueEn: IChart = {
  type: exampleThirdInitialValue.type,
  data: {
    labels: exampleThirdInitialValue.data.labels,
    datasets: [
      {
        label: 'Indicator',
        data: exampleThirdInitialValue.data.datasets[0].data,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Inflation in Belarus, %',
    },
  },
};
