import type { FC, ReactElement } from 'react';
import classes from './ExamplesPage.module.scss';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { ExampleCharts } from './ExampleCharts/ExampleCharts';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import type { IChart } from '../../../../utils/types/api';

type PropsType = {
  exampleFirstAddress: string;
  exampleSecondAddress: string;
  exampleThirdAddress: string;
  exampleFirstOptions: IChart;
  exampleSecondOptions: IChart;
  exampleThirdOptions: IChart;
  setNewMainOptions: (options: IChart) => void;
};

export const ExamplesPage: FC<PropsType> = ({
  exampleFirstAddress,
  exampleSecondAddress,
  exampleThirdAddress,
  exampleFirstOptions,
  exampleSecondOptions,
  exampleThirdOptions,
  setNewMainOptions,
}): ReactElement => {
  return (
    <div className={classes.examples}>
      <PageDescription
        title="Примеры графиков"
        textContent="На данной странице вы можете найти подходящие вам примеры графиков,
        чтобы использовать их для построения своего графика, а также для того,
        чтобы понять как работает конструктор графиков на нашем сайте. Также вы
        можете выбрать необходимый вид графика, чтобы посмотреть примеры для
        данного вида: столбчатый, линейный, круговой…!"
      />
      <div className={classes.examplesMain}>
        <ChartSelectionMenu />
        <ExampleCharts
          firstAddress={exampleFirstAddress}
          secondAddress={exampleSecondAddress}
          thirdAddress={exampleThirdAddress}
          firstOptions={exampleFirstOptions}
          secondOptions={exampleSecondOptions}
          thirdOptions={exampleThirdOptions}
          setNewOptions={setNewMainOptions}
        />
      </div>
    </div>
  );
};
