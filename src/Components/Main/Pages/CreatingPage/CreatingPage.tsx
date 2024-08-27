import { FC, ReactElement, useEffect } from 'react';
import classes from './CreatingPage.module.scss';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { MainChart } from './MainChart/MainChart';
import { ChartBasicSettings } from './ChartBasicSettings/ChartBasicSettings';
import { ChartAdditionalSettings } from './ChartAdditionalSettings/ChartAdditionalSettings';
import { IChart } from '../../../../utils/types/api';

type PropsType = {
  mainOptions: IChart;
  width: number;
  height: number;
  mainAddress: string;
  getAddress: (options: IChart, width: number, height: number, key?: string) => void;
  setMainTitle: (type: string) => void;
  setMainLabels: (id: number, value: string) => void;
  setMainData: ({idData, value, idDataset}: { idData: number; value: string; idDataset: number; }) => void;
  setMainLabelInData: (id: number, value: string) => void;
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
                                              setMainLabelInData,
                                              addMainRow,
                                              addMainColumn,
                                              removeMainRow,
                                              removeMainColumn,
                                              setMainWidth,
                                              setMainHeight
                                            }): ReactElement => {
  useEffect(() => {
    getAddress(mainOptions, width, height);
  }, [mainOptions, width, height]);

  return (
    <main className={classes.create}>
      <h2 className={classes.title}>Создать график онлайн</h2>
      <p className={classes.textContent}>
        На этой странице расположен конструктор для построения графиков онлайн.
        Создать их очень просто: выберите необходимый вам вид графика
        (столбчатый, линейный, круговой…), заполните таблицу данных, и график
        готов! При необходимости, настройте график, установите необходимую
        ширину, высоту и сохраните его.
      </p>
      <div className={classes.createContent}>
        <ChartSelectionMenu />
        <MainChart address={mainAddress} />
        <div className={classes.optionsChartContainer}>
          <h3 className={classes.miniTitle}>Настройки графика</h3>
          <div className={classes.optionsChartInner}>
            <ChartBasicSettings
              options={mainOptions}
              setTitle={setMainTitle}
              setLabels={setMainLabels}
              setData={setMainData}
              setLabelInData={setMainLabelInData}
              addRow={addMainRow}
              addColumn={addMainColumn}
              removeRow={removeMainRow}
              removeColumn={removeMainColumn}
            />
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
    </main>
  );
};
