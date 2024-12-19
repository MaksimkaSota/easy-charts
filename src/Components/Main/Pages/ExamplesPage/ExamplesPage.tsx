import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './ExamplesPage.module.scss';
import { ProgressBar } from '../../../Common/ProgressBar/ProgressBar';
import { UpButton } from '../../../Common/Buttons/UpButton/UpButton';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { ExampleCharts } from './ExampleCharts/ExampleCharts';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import type { IChart } from '../../../../utils/types/api/chart';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import { ContentTxtKey } from '../../../../utils/types/enums';

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
  isMainExamples?: boolean;
  isInfoExamples?: boolean;
  hidePageDescription?: boolean;
  hidePageDescriptionText?: boolean;
  hideChartSelectionMenu?: boolean;
  hideChartSelectionMenuTitle?: boolean;
  hideExampleChartsTitle?: boolean;
  showExampleChartTable?: boolean;
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
  isMainExamples,
  isInfoExamples,
  hidePageDescription,
  hidePageDescriptionText,
  hideChartSelectionMenu,
  hideChartSelectionMenuTitle,
  hideExampleChartsTitle,
  showExampleChartTable,
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(classes.examples, {
        [classes.mainPageExamples]: isMainExamples,
        [classes.infoPageExamples]: isInfoExamples,
      })}
    >
      <ProgressBar />
      <UpButton />
      {!hidePageDescription && (
        <PageDescription
          title={t(ContentTxtKey.ExamplesTitle)}
          textContent={t(ContentTxtKey.ExamplesDescription)}
          hidePageDescriptionText={hidePageDescriptionText}
        />
      )}
      <div className={classes.examplesMain}>
        {!hideChartSelectionMenu && (
          <ChartSelectionMenu
            type={exampleFirstOptions.type}
            className={classes.chartSelectionMenu}
            hideChartSelectionMenuTitle={hideChartSelectionMenuTitle}
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
          hideExampleChartsTitle={hideExampleChartsTitle}
          showExampleChartTable={showExampleChartTable}
        />
      </div>
    </div>
  );
};
