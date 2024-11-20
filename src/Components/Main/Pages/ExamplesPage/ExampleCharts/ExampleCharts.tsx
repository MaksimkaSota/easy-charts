import type { FC, ReactElement } from 'react';
import classes from './ExampleCharts.module.scss';
import { ExampleChart } from '../ExampleChart/ExampleChart';
import type { IChart } from '../../../../../utils/types/api/chart';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { exampleFirstTableValue } from '../../../../../utils/initialValues/exampleFirstInitialValue';
import { exampleSecondTableValue } from '../../../../../utils/initialValues/exampleSecondInitialValue';
import { exampleThirdTableValue } from '../../../../../utils/initialValues/exampleThirdInitialValue';

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
  isMainPage?: boolean;
  isInfoPage?: boolean;
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
  isMainPage,
  isInfoPage,
}): ReactElement => {
  return (
    <div className={classes.chartResult}>
      {!isMainPage && !isInfoPage && <h3 className={classes.miniTitle}>График</h3>}
      <ExampleChart
        isFetchingAddress={isFetchingFirstAddress}
        address={firstAddress}
        addressError={firstAddressError}
        options={firstOptions}
        setNewOptions={setNewOptions}
        isInfoPage={isInfoPage}
        tableValue={exampleFirstTableValue}
      />
      <ExampleChart
        isFetchingAddress={isFetchingSecondAddress}
        address={secondAddress}
        addressError={secondAddressError}
        options={secondOptions}
        setNewOptions={setNewOptions}
        isInfoPage={isInfoPage}
        tableValue={exampleSecondTableValue}
      />
      <ExampleChart
        isFetchingAddress={isFetchingThirdAddress}
        address={thirdAddress}
        addressError={thirdAddressError}
        options={thirdOptions}
        setNewOptions={setNewOptions}
        isInfoPage={isInfoPage}
        tableValue={exampleThirdTableValue}
      />
    </div>
  );
};
