import { memo, ReactElement } from 'react';
import classes from './CharBasicSettings.module.scss';
import { IChart } from '../../../../../utils/types/api';

type PropsType = {
  options: IChart;
  setTitle: (type: string) => void;
  setLabels: (id: number, value: string) => void;
  setData: ({idData, value, idDataset}: { idData: number; value: string; idDataset: number; }) => void;
  setLabelInData: (id: number, value: string) => void;
  addRow: () => void;
  addColumn: () => void;
  removeRow: (index: number) => void;
  removeColumn: (index: number) => void;
};

export const ChartBasicSettings = memo<PropsType>(({
                                                     options,
                                                     setTitle,
                                                     setLabels,
                                                     setData,
                                                     setLabelInData,
                                                     addRow,
                                                     addColumn,
                                                     removeRow,
                                                     removeColumn
                                                   }): ReactElement => {
  return (
    <div className={classes.chartSettings}>
      <p className={classes.miniTitle}>Таблица данных</p>
      <form
        className={classes.dataForm}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={classes.formContainer}>
          <p className={classes.axis}>X</p>
          <input
            type="text"
            value={options.options.title.text}
            className={`${classes.inputData} ${classes.inputDataLabel} ${classes.margin}`}
            onChange={(event) => setTitle(event.target.value)}
          />
          {options.data.labels.map((field, index) => (
            <div key={index} className={classes.deleteRowContainer}>
              <div title="Удалить эту строку" className={classes.closeX} onClick={() => removeRow(index)} />
              <input
                className={`${classes.inputData} ${classes.inputDataLabel}`}
                type="text"
                value={field}
                onChange={(event) => setLabels(index, event.target.value)}
              />
            </div>
          ))}
          <button className={classes.addButton} onClick={() => addRow()}>
            Добавить строку
          </button>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.flexContainer}>
            {options.data.datasets.map((item, indexDataset) => {
              return (
                <div className={classes.formContainerInner} key={indexDataset}>
                  <p className={classes.axis}>Y{indexDataset + 1}</p>
                  <div
                    title="Удалить этот столбец"
                    className={classes.closeY}
                    onClick={() => removeColumn(indexDataset)}
                  />
                  <input
                    className={`${classes.inputData} ${classes.inputDataLabel} ${classes.margin}`}
                    value={item.label}
                    onChange={(event) => setLabelInData(indexDataset, event.target.value)}
                  />
                  {item.data.map((field, indexData) => (
                    <input
                      className={`${classes.inputData} ${classes.inputDataNumbers}`}
                      key={indexData}
                      type="text"
                      value={field}
                      onChange={(event) =>
                        setData({
                          idData: indexData,
                          value: event.target.value,
                          idDataset: indexDataset,
                        })
                      }
                    />
                  ))}
                </div>
              );
            })}
          </div>
          <button className={classes.addButton} onClick={() => addColumn()}>
            Добавить столбец
          </button>
        </div>
      </form>
    </div>
  );
});
