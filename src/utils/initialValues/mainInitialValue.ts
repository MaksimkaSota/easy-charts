import type { IChart } from '../types/api/chart';
import { Language } from '../types/enums';

export const getMainInitialValue = (language: string): IChart => {
  const isRuLang: boolean = language === Language.Ru;

  return {
    type: 'bar',
    data: {
      labels: [
        { value: isRuLang ? 'Строка 1' : 'Row 1', id: 'label1' },
        { value: isRuLang ? 'Строка 2' : 'Row 2', id: 'label2' },
        { value: isRuLang ? 'Строка 3' : 'Row 3', id: 'label3' },
        { value: isRuLang ? 'Строка 4' : 'Row 4', id: 'label4' },
        { value: isRuLang ? 'Строка 5' : 'Row 5', id: 'label5' },
      ],
      datasets: [
        {
          label: isRuLang ? 'Заголовок 1' : 'Title 1',
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
        text: isRuLang ? 'Заголовок графика' : 'Chart title',
      },
    },
  };
};
