import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './ExampleCharts.module.scss';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../redux/selectors/selectors';
import { ExampleChart } from '../ExampleChart/ExampleChart';
import type { IChart } from '../../../../../utils/types/api/chart';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { getExampleFirstInitialValue } from '../../../../../utils/initialValues/exampleFirstInitialValue';
import { getExampleSecondInitialValue } from '../../../../../utils/initialValues/exampleSecondInitialValue';
import { getExampleThirdInitialValue } from '../../../../../utils/initialValues/exampleThirdInitialValue';
import { getTableValues } from '../../../../../utils/helpers/servicesHelpers';
import { ContentTxtKey } from '../../../../../utils/types/enums';

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
  const { themeMode, languageMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  const exampleFirstTableValues = getTableValues(
    t(ContentTxtKey.PopulationTable),
    getExampleFirstInitialValue(languageMode)
  );
  const exampleSecondTableValues = getTableValues(
    t(ContentTxtKey.SalaryTable),
    getExampleSecondInitialValue(languageMode)
  );
  const exampleThirdTableValues = getTableValues(
    t(ContentTxtKey.InflationTable),
    getExampleThirdInitialValue(languageMode)
  );

  return (
    <div className={classes.chartResult}>
      {!hideExampleChartsTitle && (
        <h3 className={cn(classes.miniTitle, classes[`miniTitle-${themeMode}`])}>{t(ContentTxtKey.ChartMiniTitle)}</h3>
      )}
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
