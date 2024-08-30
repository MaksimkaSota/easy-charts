import { memo } from 'react';
import type { ReactElement } from 'react';
import classes from './CharBasicSettings.module.scss';
import type { IChart, IDataset } from '../../../../../utils/types/api';

type PropsType = {
  options: IChart;
  setTitle: (type: string) => void;
  setLabels: (id: number, value: string) => void;
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setLabelInDatasets: (id: number, value: string) => void;
  addRow: () => void;
  addColumn: () => void;
  removeRow: (index: number) => void;
  removeColumn: (index: number) => void;
};

export const ChartBasicSettings = memo<PropsType>(
  ({
    options,
    setTitle,
    setLabels,
    setData,
    setLabelInDatasets,
    addRow,
    addColumn,
    removeRow,
    removeColumn,
  }): ReactElement => {
    return (
      <div className={classes.chartSettings}>
        <p className={classes.miniTitle}>Таблица данных</p>
        <form className={classes.dataForm} onSubmit={(event) => event.preventDefault()}>
          <div className={classes.formContainer}>
            <p className={classes.axis}>X</p>
            <input
              type="text"
              value={options.options.title.text}
              className={`${classes.inputData} ${classes.inputDataLabel} ${classes.margin}`}
              onChange={(event) => setTitle(event.target.value)}
            />
            {options.data.labels.map(
              (label: string, labelIndex: number): ReactElement => (
                <div key={labelIndex} className={classes.deleteRowContainer}>
                  {/* eslint-disable-next-line */}
                  <div title="Удалить эту строку" className={classes.closeX} onClick={() => removeRow(labelIndex)} />
                  <input
                    className={`${classes.inputData} ${classes.inputDataLabel}`}
                    type="text"
                    value={label}
                    onChange={(event) => setLabels(labelIndex, event.target.value)}
                  />
                </div>
              )
            )}
            <button className={classes.addButton} onClick={() => addRow()}>
              Добавить строку
            </button>
          </div>
          <div className={classes.formContainer}>
            <div className={classes.flexContainer}>
              {options.data.datasets.map(
                (dataset: IDataset, datasetIndex: number): ReactElement => (
                  <div className={classes.formContainerInner} key={datasetIndex}>
                    <p className={classes.axis}>Y{datasetIndex + 1}</p>
                    {/* eslint-disable-next-line */}
                    <div
                      title="Удалить этот столбец"
                      className={classes.closeY}
                      onClick={() => removeColumn(datasetIndex)}
                    />
                    <input
                      className={`${classes.inputData} ${classes.inputDataLabel} ${classes.margin}`}
                      value={dataset.label}
                      onChange={(event) => setLabelInDatasets(datasetIndex, event.target.value)}
                    />
                    {dataset.data.map(
                      (dataItem: number, dataIndex: number): ReactElement => (
                        <input
                          className={`${classes.inputData} ${classes.inputDataNumbers}`}
                          key={dataIndex}
                          type="text"
                          value={dataItem}
                          onChange={(event) =>
                            setData({
                              datasetId: datasetIndex,
                              dataId: dataIndex,
                              value: event.target.value,
                            })
                          }
                        />
                      )
                    )}
                  </div>
                )
              )}
            </div>
            <button className={classes.addButton} onClick={() => addColumn()}>
              Добавить столбец
            </button>
          </div>
        </form>
      </div>
    );
  }
);
