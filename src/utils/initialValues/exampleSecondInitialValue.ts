import type { IChart } from '../types/api';

export const exampleSecondInitialValue: IChart = {
  type: 'bar',
  data: {
    labels: [
      { value: 'Январь' },
      { value: 'Февраль' },
      { value: 'Март' },
      { value: 'Аперель' },
      { value: 'Май' },
      { value: 'Июнь' },
      { value: 'Июль' },
      { value: 'Август' },
      { value: 'Сентябрь' },
      { value: 'Октябрь' },
      { value: 'Ноябрь' },
      { value: 'Декабрь' },
    ],
    datasets: [
      {
        label: '2017',
        data: [
          { value: 720 },
          { value: 716 },
          { value: 770 },
          { value: 776 },
          { value: 795 },
          { value: 819 },
          { value: 827 },
          { value: 844 },
          { value: 831 },
          { value: 841 },
          { value: 836 },
          { value: 995 },
        ],
      },
      {
        label: '2018',
        data: [
          { value: 859 },
          { value: 850 },
          { value: 926 },
          { value: 921 },
          { value: 943 },
          { value: 953 },
          { value: 973 },
          { value: 987 },
          { value: 963 },
          { value: 999 },
          { value: 994 },
          { value: 1115 },
        ],
      },
      {
        label: '2019',
        data: [
          { value: 981 },
          { value: 977 },
          { value: 1056 },
          { value: 1073 },
          { value: 1071 },
          { value: 1080 },
          { value: 1128 },
          { value: 1117 },
          { value: 1108 },
          { value: 1123 },
          { value: 1113 },
          { value: 1238 },
        ],
      },
      {
        label: '2020',
        data: [
          { value: 1118 },
          { value: 1119 },
          { value: 1213 },
          { value: 1193 },
          { value: 1227 },
          { value: 1248 },
          { value: 1287 },
          { value: 1276 },
          { value: 1264 },
          { value: 1285 },
          { value: 1300 },
          { value: 1474 },
        ],
      },
      {
        label: '2021',
        data: [
          { value: 1290 },
          { value: 1277 },
          { value: 1384 },
          { value: 1398 },
          { value: 1419 },
          { value: 1433 },
          { value: 1471 },
          { value: 1463 },
          { value: 1442 },
          { value: 1478 },
          { value: 1476 },
          { value: 1675 },
        ],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Средняя заработная плата в Беларуси, рублей',
    },
  },
};
