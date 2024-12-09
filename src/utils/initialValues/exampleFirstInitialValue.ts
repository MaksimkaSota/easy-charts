import type { IChart } from '../types/api/chart';

export const exampleFirstInitialValue: IChart = {
  type: 'bar',
  data: {
    labels: [{ value: '2017' }, { value: '2018' }, { value: '2019' }, { value: '2020' }, { value: '2021' }],
    datasets: [
      {
        label: '',
        data: [{ value: 9470 }, { value: 9448 }, { value: 9429 }, { value: 9410 }, { value: 9350 }],
      },
      {
        label: '',
        data: [{ value: 4378 }, { value: 4367 }, { value: 4358 }, { value: 4350 }, { value: 4321 }],
      },
      {
        label: '',
        data: [{ value: 5092 }, { value: 5081 }, { value: 5071 }, { value: 5060 }, { value: 5030 }],
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

export const exampleFirstInitialValueRu: IChart = {
  type: exampleFirstInitialValue.type,
  data: {
    labels: exampleFirstInitialValue.data.labels,
    datasets: [
      {
        label: 'Все население',
        data: exampleFirstInitialValue.data.datasets[0].data,
      },
      {
        label: 'Мужчины',
        data: exampleFirstInitialValue.data.datasets[1].data,
      },
      {
        label: 'Женщины',
        data: exampleFirstInitialValue.data.datasets[2].data,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Численность населения в Беларуси, тыс. человек',
    },
  },
};

export const exampleFirstInitialValueEn: IChart = {
  type: exampleFirstInitialValue.type,
  data: {
    labels: exampleFirstInitialValue.data.labels,
    datasets: [
      {
        label: 'All population',
        data: exampleFirstInitialValue.data.datasets[0].data,
      },
      {
        label: 'Men',
        data: exampleFirstInitialValue.data.datasets[1].data,
      },
      {
        label: 'Women',
        data: exampleFirstInitialValue.data.datasets[2].data,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Population in Belarus, thousand people',
    },
  },
};
