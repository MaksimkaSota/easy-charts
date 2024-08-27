import { FC, ReactElement } from 'react';
import { useTypedSelector } from '../../../../../hooks/useTypeSelector';
import { useActions } from '../../../../../hooks/useActions';
import { mainOptionsSelector } from '../../../../../redux/selectors/selectors';
import classes from './CharSettings.module.scss';

export const ChartSettings: FC = (): ReactElement => {
  const {mainOptions} = useTypedSelector(mainOptionsSelector);
  const {
    setMainTitle,
    setMainLabels,
    setMainData,
    setMainLabelInData,
    addMainRow,
    addMainColumn,
    removeMainRow,
    removeMainColumn,
  } = useActions();

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
            value={mainOptions.options.title.text}
            className={`${classes.inputData} ${classes.inputDataLabel} ${classes.margin}`}
            onChange={(event) => setMainTitle(event.target.value)}
          />
          {mainOptions.data.labels.map((field, index) => (
            <div key={index} className={classes.deleteRowContainer}>
              <div title="Удалить эту строку" className={classes.closeX} onClick={() => removeMainRow(index)} />
              <input
                className={`${classes.inputData} ${classes.inputDataLabel}`}
                type="text"
                value={field}
                onChange={(event) => setMainLabels(index, event.target.value)}
              />
            </div>
          ))}
          <button className={classes.addButton} onClick={() => addMainRow()}>
            Добавить строку
          </button>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.flexContainer}>
            {mainOptions.data.datasets.map((item, indexDataset) => {
              return (
                <div className={classes.formContainerInner} key={indexDataset}>
                  <p className={classes.axis}>Y{indexDataset + 1}</p>
                  <div
                    title="Удалить этот столбец"
                    className={classes.closeY}
                    onClick={() => removeMainColumn(indexDataset)}
                  />
                  <input
                    className={`${classes.inputData} ${classes.inputDataLabel} ${classes.margin}`}
                    value={item.label}
                    onChange={(event) => setMainLabelInData(indexDataset, event.target.value)}
                  />
                  {item.data.map((field, indexData) => (
                    <input
                      className={`${classes.inputData} ${classes.inputDataNumbers}`}
                      key={indexData}
                      type="text"
                      value={field}
                      onChange={(event) =>
                        setMainData({
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
          <button className={classes.addButton} onClick={() => addMainColumn()}>
            Добавить столбец
          </button>
        </div>
      </form>
    </div>
  );
};
