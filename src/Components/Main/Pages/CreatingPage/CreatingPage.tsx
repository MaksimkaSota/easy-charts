import { type FC, type ReactElement, useEffect } from 'react';
import classes from './CreatingPage.module.scss';
import type { IChart } from '../../../../utils/types/api';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { MainChart } from './MainChart/MainChart';
import { ChartAdditionalSettings } from './ChartAdditionalSettings/ChartAdditionalSettings';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import { BasicSettingsForm } from './BasicSettingsForm/BasicSettingsForm';

type PropsType = {
  mainOptions: IChart;
  width: number;
  height: number;
  mainAddress: string;
  getAddress: (options: IChart, width: number, height: number, key?: string) => void;
  setMainTitle: (type: string) => void;
  setMainLabels: (id: number, value: string) => void;
  setMainData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setMainLabelInDatasets: (id: number, value: string) => void;
  addMainRow: () => void;
  addMainColumn: () => void;
  removeMainRow: (index: number) => void;
  removeMainColumn: (index: number) => void;
  setMainWidth: (width: number) => void;
  setMainHeight: (height: number) => void;
};

export const CreatingPage: FC<PropsType> = ({
  mainAddress,
  mainOptions,
  width,
  height,
  getAddress,
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
}): ReactElement => {
  useEffect(() => {
    getAddress(mainOptions, width, height);
    // eslint-disable-next-line
  }, [mainOptions, width, height]);

  return (
    <div className={classes.create}>
      <PageDescription
        title="Создать график онлайн"
        textContent="На этой странице расположен конструктор для построения графиков онлайн.
        Создать их очень просто: выберите необходимый вам вид графика
        (столбчатый, линейный, круговой…), заполните таблицу данных, и график
        готов! При необходимости, настройте график, установите необходимую
        ширину, высоту и сохраните его."
      />
      <div className={classes.createContent}>
        <ChartSelectionMenu />
        <MainChart address={mainAddress} />
        <div className={classes.settingsContainer}>
          <h3 className={classes.settingsTitle}>Настройки графика</h3>
          <div className={classes.settingsFormContainer}>
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
          <ChartAdditionalSettings
            address={mainAddress}
            width={width}
            height={height}
            setWidth={setMainWidth}
            setHeight={setMainHeight}
          />
        </div>
      </div>
    </div>
  );
};
