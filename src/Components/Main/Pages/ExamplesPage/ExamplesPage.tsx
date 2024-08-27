import { FC, ReactElement, useEffect } from 'react';
import classes from './ExamplesPage.module.scss';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { ExampleCharts } from './ExampleCharts/ExampleCharts';
import { IChart } from '../../../../utils/types/api';
import { ExamplesOptionsState } from '../../../../redux/types/examplesOptions';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';

type PropsType = {
  exampleFirstAddress: string;
  exampleSecondAddress: string;
  exampleThirdAddress: string;
  examplesOptions: ExamplesOptionsState;
  exampleFirstOptions: IChart;
  exampleSecondOptions: IChart;
  exampleThirdOptions: IChart;
  getAddress: (options: IChart, width: number, height: number, key?: string) => void;
  setNewMainOptions: (options: IChart) => void;
};

export const ExamplesPage: FC<PropsType> = ({
                                              exampleFirstAddress,
                                              exampleSecondAddress,
                                              exampleThirdAddress,
                                              examplesOptions,
                                              exampleFirstOptions,
                                              exampleSecondOptions,
                                              exampleThirdOptions,
                                              getAddress,
                                              setNewMainOptions
                                            }): ReactElement => {
  useEffect(() => {
    getAddress(exampleFirstOptions, 800, 400, 'firstExample');
    getAddress(exampleSecondOptions, 800, 400, 'secondExample');
    getAddress(exampleThirdOptions, 800, 400, 'thirdExample');
  }, [examplesOptions]);

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
