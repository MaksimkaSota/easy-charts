import type { IChart } from '../types/api/chart';
import { Language } from '../types/enums';

export const getExampleThirdInitialValue = (language: string): IChart => {
  const isRuLang: boolean = language === Language.Ru;

  return {
    type: 'bar',
    data: {
      labels: [{ value: '2017' }, { value: '2018' }, { value: '2019' }, { value: '2020' }, { value: '2021' }],
      datasets: [
        {
          label: isRuLang ? 'Показатель' : 'Indicator',
          data: [{ value: 4.6 }, { value: 5.6 }, { value: 4.7 }, { value: 7.4 }, { value: 9.97 }],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: isRuLang ? 'Инфляция в Беларуси, %' : 'Inflation in Belarus, %',
      },
    },
  };
};
