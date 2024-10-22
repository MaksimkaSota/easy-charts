import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './CreatingPage.module.scss';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { MainChart } from './MainChart/MainChart';
import { AdditionalSettingsForm } from './AdditionalSettingsForm/AdditionalSettingsForm';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import { BasicSettingsForm } from './BasicSettingsForm/BasicSettingsForm';
import type { IChart } from '../../../../utils/types/api';
import type { ErrorType, Nullable } from '../../../../utils/types/common';

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
  setMainOptionsWithId: (mainOptions: IChart) => void;
  setExamplesType: (type: string) => void;
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
  setMainOptionsWithId,
  setExamplesType,
}): ReactElement => {
  return (
    <div className={classes.create}>
      <PageDescription
        title="Создать график онлайн"
        textContent="На этой странице расположен конструктор для построения графиков онлайн. Создать их очень просто:
        выберите необходимый вид графика (колонны, полосы, линии, радар, пирог, пончик), заполните таблицу данных,
        и график готов! При необходимости, установите необходимую ширину, высоту и сохраните график на компьютер."
      />
      <div className={classes.createContent}>
        <ChartSelectionMenu type={mainOptions.type} className={classes.chartSelectionMenu} />
        <MainChart isFetchingAddress={isFetchingMainAddress} address={mainAddress} addressError={mainAddressError} />
        <div className={classes.settingsContainer}>
          <h3 className={classes.settingsTitle}>Настройки графика</h3>
          <div className={classes.wrapper}>
            <div className={cn(classes.settingsFormContainer, classes.basicFormContainer)}>
              <p className={classes.settingsFormTitle}>Таблица данных</p>
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
              <p className={classes.settingsFormTitle}>Параметры графика</p>
              <AdditionalSettingsForm
                width={width}
                height={height}
                setWidth={setMainWidth}
                setHeight={setMainHeight}
                setMainOptionsWithId={setMainOptionsWithId}
                setExamplesType={setExamplesType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
