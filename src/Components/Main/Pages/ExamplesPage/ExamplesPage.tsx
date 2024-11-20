import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './ExamplesPage.module.scss';
import { ProgressBar } from '../../../Common/ProgressBar/ProgressBar';
import { UpButton } from '../../../Common/Buttons/UpButton/UpButton';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { ExampleCharts } from './ExampleCharts/ExampleCharts';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import type { IChart } from '../../../../utils/types/api/chart';
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
  isMainPage?: boolean;
  isInfoPage?: boolean;
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
  isMainPage,
  isInfoPage,
}): ReactElement => {
  return (
    <div
      className={cn(classes.examples, {
        [classes.mainPageExamples]: isMainPage,
        [classes.infoPageExamples]: isInfoPage,
      })}
    >
      <ProgressBar />
      <UpButton />
      {!isInfoPage && (
        <PageDescription
          title="Примеры графиков / диаграмм"
          textContent="На данной странице вы можете найти подходящие вам примеры графиков, чтобы использовать их для
          построения своего графика, а также для того, чтобы понять как работает конструктор графиков на нашем сайте.
          Также вы можете выбрать необходимый вид графика, чтобы посмотреть примеры для
          данного вида: колонны, полосы, линии, радар, пирог, пончик."
          isMainPage={isMainPage}
        />
      )}
      <div className={classes.examplesMain}>
        {!isInfoPage && (
          <ChartSelectionMenu
            type={exampleFirstOptions.type}
            className={classes.chartSelectionMenu}
            isMainPage={isMainPage}
          />
        )}
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
          isMainPage={isMainPage}
          isInfoPage={isInfoPage}
        />
      </div>
    </div>
  );
};
