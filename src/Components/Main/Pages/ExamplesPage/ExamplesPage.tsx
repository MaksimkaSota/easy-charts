import type { FC, ReactElement } from 'react';
import classes from './ExamplesPage.module.scss';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { ExampleCharts } from './ExampleCharts/ExampleCharts';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import type { IChart } from '../../../../utils/types/api';
import type { ErrorType, Nullable } from '../../../../utils/types/common';

type PropsType = {
  isFetchingExampleFirstAddress: boolean;
  exampleFirstAddress: string;
  exampleFirstAddressError: Nullable<ErrorType>;
  isFetchingExampleSecondAddress: boolean;
  exampleSecondAddress: string;
  exampleSecondAddressError: Nullable<ErrorType>;
  isFetchingExampleThirdAddress: boolean;
  exampleThirdAddress: string;
  exampleThirdAddressError: Nullable<ErrorType>;
  exampleFirstOptions: IChart;
  exampleSecondOptions: IChart;
  exampleThirdOptions: IChart;
  setMainOptionsWithId: (options: IChart) => void;
};

export const ExamplesPage: FC<PropsType> = ({
  isFetchingExampleFirstAddress,
  exampleFirstAddress,
  exampleFirstAddressError,
  isFetchingExampleSecondAddress,
  exampleSecondAddress,
  exampleSecondAddressError,
  isFetchingExampleThirdAddress,
  exampleThirdAddress,
  exampleThirdAddressError,
  exampleFirstOptions,
  exampleSecondOptions,
  exampleThirdOptions,
  setMainOptionsWithId,
}): ReactElement => {
  return (
    <div className={classes.examples}>
      <PageDescription
        title="Примеры графиков"
        textContent="На данной странице вы можете найти подходящие вам примеры графиков, чтобы использовать их для
        построения своего графика, а также для того, чтобы понять как работает конструктор графиков на нашем сайте.
        Также вы можете выбрать необходимый вид графика, чтобы посмотреть примеры для
        данного вида: колонны, полосы, линии, радар, пирог, пончик."
      />
      <div className={classes.examplesMain}>
        <ChartSelectionMenu type={exampleFirstOptions.type} className={classes.chartSelectionMenu} />
        <ExampleCharts
          isFetchingFirstAddress={isFetchingExampleFirstAddress}
          firstAddress={exampleFirstAddress}
          firstAddressError={exampleFirstAddressError}
          isFetchingSecondAddress={isFetchingExampleSecondAddress}
          secondAddress={exampleSecondAddress}
          secondAddressError={exampleSecondAddressError}
          isFetchingThirdAddress={isFetchingExampleThirdAddress}
          thirdAddress={exampleThirdAddress}
          thirdAddressError={exampleThirdAddressError}
          firstOptions={exampleFirstOptions}
          secondOptions={exampleSecondOptions}
          thirdOptions={exampleThirdOptions}
          setNewOptions={setMainOptionsWithId}
        />
      </div>
    </div>
  );
};
