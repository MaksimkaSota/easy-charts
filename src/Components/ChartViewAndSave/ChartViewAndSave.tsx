import React, { useState } from "react";
import classes from "./ChartViewAndSave.module.scss";
import { useActions } from "../../Hooks/useActions";
import { useTypedSelector } from "../../Hooks/useTypeSelector";

const ChartViewAndSave = () => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(400);

  const { setWidthHeight } = useActions();

  const { address } = useTypedSelector((state) => state.address);

  return (
    <div className={classes.chartViewAndSave}>
      <p className={classes.miniTitle}>Параметры графика</p>
      <div className={classes.params}>
        <label className={classes.labelSettingsForm} htmlFor="width">
          Ширина:
        </label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={(event) => setWidth(+event.target.value)}
        />
      </div>
      <div className={classes.params}>
        <label className={classes.labelSettingsForm} htmlFor="height">
          Высота:
        </label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(event) => setHeight(+event.target.value)}
        />
      </div>
      <a
        className={classes.link}
        download
        target="_blank"
        rel="noreferrer"
        href={address}
        onClick={() => {
          setWidthHeight({ width, height });
        }}
      >
        Сохранить график
      </a>
    </div>
  );
};

export default ChartViewAndSave;
