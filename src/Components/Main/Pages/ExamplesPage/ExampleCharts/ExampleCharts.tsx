import type { FC, ReactElement } from 'react';
import classes from './ExampleCharts.module.scss';
import { ExampleChart } from '../ExampleChart/ExampleChart';
import type { IChart } from '../../../../../utils/types/api/chart';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { exampleFirstInitialValue } from '../../../../../utils/initialValues/exampleFirstInitialValue';
import { exampleSecondInitialValue } from '../../../../../utils/initialValues/exampleSecondInitialValue';
import { exampleThirdInitialValue } from '../../../../../utils/initialValues/exampleThirdInitialValue';
import { getTableValues } from '../../../../../utils/helpers/servicesHelpers';

type PropsType = {
  isFetchingFirstAddress: boolean;
  firstAddress: string;
  firstAddressError: Nullable<ErrorType>;
  isFetchingSecondAddress: boolean;
  secondAddress: string;
  secondAddressError: Nullable<ErrorType>;
  isFetchingThirdAddress: boolean;
  thirdAddress: string;
  thirdAddressError: Nullable<ErrorType>;
  firstOptions: IChart;
  secondOptions: IChart;
  thirdOptions: IChart;
  setNewOptions: (options: IChart) => void;
  hideExampleChartsTitle?: boolean;
  showExampleChartTable?: boolean;
};

export const ExampleCharts: FC<PropsType> = ({
  isFetchingFirstAddress,
  firstAddress,
  firstAddressError,
  isFetchingSecondAddress,
  secondAddress,
  secondAddressError,
  isFetchingThirdAddress,
  thirdAddress,
  thirdAddressError,
  firstOptions,
  secondOptions,
  thirdOptions,
  setNewOptions,
  hideExampleChartsTitle,
  showExampleChartTable,
}): ReactElement => {
  const exampleFirstTableValues = getTableValues('Численность по годам', exampleFirstInitialValue);
  const exampleSecondTableValues = getTableValues('Заработная плата по месяцам', exampleSecondInitialValue);
  const exampleThirdTableValues = getTableValues('Инфляция по годам', exampleThirdInitialValue);

  return (
    <div className={classes.chartResult}>
      {!hideExampleChartsTitle && <h3 className={classes.miniTitle}>График</h3>}
      <ExampleChart
        isFetchingAddress={isFetchingFirstAddress}
        address={firstAddress}
        addressError={firstAddressError}
        options={firstOptions}
        setNewOptions={setNewOptions}
        showExampleChartTable={showExampleChartTable}
        tableValues={exampleFirstTableValues}
      />
      <ExampleChart
        isFetchingAddress={isFetchingSecondAddress}
        address={secondAddress}
        addressError={secondAddressError}
        options={secondOptions}
        setNewOptions={setNewOptions}
        showExampleChartTable={showExampleChartTable}
        tableValues={exampleSecondTableValues}
      />
      <ExampleChart
        isFetchingAddress={isFetchingThirdAddress}
        address={thirdAddress}
        addressError={thirdAddressError}
        options={thirdOptions}
        setNewOptions={setNewOptions}
        showExampleChartTable={showExampleChartTable}
        tableValues={exampleThirdTableValues}
      />
    </div>
  );
};
