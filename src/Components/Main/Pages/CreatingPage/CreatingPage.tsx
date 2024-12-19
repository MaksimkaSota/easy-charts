import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './CreatingPage.module.scss';
import { ProgressBar } from '../../../Common/ProgressBar/ProgressBar';
import { UpButton } from '../../../Common/Buttons/UpButton/UpButton';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { MainChart } from './MainChart/MainChart';
import { AdditionalSettingsForm } from './AdditionalSettingsForm/AdditionalSettingsForm';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import { BasicSettingsForm } from './BasicSettingsForm/BasicSettingsForm';
import type { IChart } from '../../../../utils/types/api/chart';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import { ContentTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  mainOptions: IChart;
  width: number | string;
  height: number | string;
  isFetchingMainAddress: boolean;
  mainAddress: string;
  mainAddressError: Nullable<ErrorType>;
  setMainTitle: (type: string) => void;
  setMainLabels: (id: number, value: string) => void;
  setMainData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setMainLabelInDatasets: (id: number, value: string) => void;
  addMainRow: () => void;
  addMainColumn: () => void;
  removeMainRow: (index: number) => void;
  removeMainColumn: (index: number) => void;
  setMainWidth: (width: number | string) => void;
  setMainHeight: (height: number | string) => void;
  resetMainOptions: (language: string) => void;
  setExamplesType: (type: string) => void;
  themeMode: string;
};

export const CreatingPage: FC<PropsType> = ({
  isFetchingMainAddress,
  mainAddress,
  mainAddressError,
  mainOptions,
  width,
  height,
  setMainTitle,
  setMainLabels,
  setMainData,
  setMainLabelInDatasets,
  addMainRow,
  addMainColumn,
  removeMainRow,
  removeMainColumn,
  setMainWidth,
  setMainHeight,
  resetMainOptions,
  setExamplesType,
  themeMode,
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.create}>
      <ProgressBar />
      <UpButton />
      <PageDescription title={t(ContentTxtKey.CreatingTitle)} textContent={t(ContentTxtKey.CreatingDescription)} />
      <div className={classes.createContent}>
        <ChartSelectionMenu type={mainOptions.type} className={classes.chartSelectionMenu} />
        <MainChart isFetchingAddress={isFetchingMainAddress} address={mainAddress} addressError={mainAddressError} />
        <div className={classes.settingsContainer}>
          <h3 className={cn(classes.settingsTitle, classes[`settingsTitle-${themeMode}`])}>
            {t(ContentTxtKey.SettingsMiniTitle)}
          </h3>
          <div className={classes.wrapper}>
            <div className={cn(classes.settingsFormContainer, classes.basicFormContainer)}>
              <p className={classes.settingsFormTitle}>{t(ContentTxtKey.BasicTitleSettings)}</p>
              <BasicSettingsForm
                options={mainOptions}
                setTitle={setMainTitle}
                setLabels={setMainLabels}
                setData={setMainData}
                setLabelInDatasets={setMainLabelInDatasets}
                addRow={addMainRow}
                addColumn={addMainColumn}
                removeRow={removeMainRow}
                removeColumn={removeMainColumn}
              />
            </div>
            <div className={cn(classes.settingsFormContainer, classes.additionalFormContainer)}>
              <p className={classes.settingsFormTitle}>{t(ContentTxtKey.AdditionalTitleSettings)}</p>
              <AdditionalSettingsForm
                options={mainOptions}
                width={width}
                height={height}
                setWidth={setMainWidth}
                setHeight={setMainHeight}
                resetMainOptions={resetMainOptions}
                setExamplesType={setExamplesType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
