import type { IChart } from '../types/api/chart';

export const mainInitialValue: IChart = {
  type: 'bar',
  data: {
    labels: [
      { value: '', id: 'label1' },
      { value: '', id: 'label2' },
      { value: '', id: 'label3' },
      { value: '', id: 'label4' },
      { value: '', id: 'label5' },
    ],
    datasets: [
      {
        label: '',
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
      text: '',
    },
  },
};

export const mainInitialValueRu: IChart = {
  type: mainInitialValue.type,
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
        data: mainInitialValue.data.datasets[0].data,
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

export const mainInitialValueEn: IChart = {
  type: mainInitialValue.type,
  data: {
    labels: [
      { value: 'Row 1', id: 'label1' },
      { value: 'Row 2', id: 'label2' },
      { value: 'Row 3', id: 'label3' },
      { value: 'Row 4', id: 'label4' },
      { value: 'Row 5', id: 'label5' },
    ],
    datasets: [
      {
        label: 'Title 1',
        data: mainInitialValue.data.datasets[0].data,
        id: 'dataset1',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Chart title',
    },
  },
};
