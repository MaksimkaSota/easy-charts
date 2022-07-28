import React, { useEffect } from "react";
import classes from "./CharSettings.module.scss";
import { useActions } from "../../Hooks/useActions";
import { useTypedSelector } from "../../Hooks/useTypeSelector";

const ChartSettings = () => {
  const {
    setTitleChart,
    setInitialValueByData,
    setInitialValueByLabels,
    addRow,
    addColumn,
    setLabelInData,
    removeRow,
    removeColumn,
  } = useActions();

  const { options } = useTypedSelector((state) => state.options);

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
            onChange={(event) => setTitleChart(event.target.value)}
          />
          {options.data.labels.map((field, index) => (
            <div key={index} className={classes.deleteRowContainer}>
              <div
                title="Удалить эту строку"
                className={classes.closeX}
                onClick={() => removeRow(index)}
              ></div>
              <input
                className={`${classes.inputData} ${classes.inputDataLabel}`}
                type="text"
                value={field}
                onChange={(event) =>
                  setInitialValueByLabels({
                    id: index,
                    value: event.target.value,
                  })
                }
              />
            </div>
          ))}
          <button
            className={classes.addButton}
            onClick={() => {
              addRow();
            }}
          >
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
                  ></div>
                  <input
                    className={`${classes.inputData} ${classes.inputDataLabel} ${classes.margin}`}
                    value={item.label}
                    onChange={(event) =>
                      setLabelInData({
                        id: indexDataset,
                        value: event.target.value,
                      })
                    }
                  />
                  {item.data.map((field, indexData) => (
                    <input
                      className={`${classes.inputData} ${classes.inputDataNumbers}`}
                      key={indexData}
                      type="text"
                      value={field}
                      onChange={(event) =>
                        setInitialValueByData({
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
          <button
            className={classes.addButton}
            onClick={() => {
              addColumn();
            }}
          >
            Добавить столбец
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChartSettings;
