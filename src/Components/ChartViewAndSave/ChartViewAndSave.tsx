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
      <p>Параметры графика</p>
      <div className={classes.settingsForm}>
        <div>
          <label className={classes.labelSettingsForm} htmlFor="width">
            Ширина
          </label>
          <input
            type="text"
            id="width"
            value={width}
            onChange={(event) => setWidth(+event.target.value)}
          />
        </div>
        <div>
          <label className={classes.labelSettingsForm} htmlFor="height">
            Высота
          </label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(event) => setHeight(+event.target.value)}
          />
        </div>
        <a
          download
          target="_blank"
          href={address}
          onClick={() => {
            setWidthHeight({ width, height });
          }}
        >
          Просмотреть и скачать
        </a>
      </div>
    </div>
  );
};

export default ChartViewAndSave;
