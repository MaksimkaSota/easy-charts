import { memo } from 'react';
import type { ChangeEvent, ReactElement } from 'react';
import classes from './ChartAdditionalSettings.module.scss';

type PropsType = {
  address: string;
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
};

// eslint-disable-next-line react/display-name
export const ChartAdditionalSettings = memo<PropsType>(
  ({ address, width, height, setWidth, setHeight }): ReactElement => {
    const onWidthChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setWidth(+event.target.value);
    };
    const onHeightChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setHeight(+event.target.value);
    };

    return (
      <div className={classes.chartViewAndSave}>
        <p className={classes.miniTitle}>Параметры графика</p>
        <div className={classes.params}>
          <label className={classes.labelSettingsForm} htmlFor="width">
            Ширина:
          </label>
          <input type="text" id="width" value={width} onChange={onWidthChange} />
        </div>
        <div className={classes.params}>
          <label className={classes.labelSettingsForm} htmlFor="height">
            Высота:
          </label>
          <input type="text" id="height" value={height} onChange={onHeightChange} />
        </div>
        <a className={classes.link} href={address} download>
          Сохранить график
        </a>
      </div>
    );
  }
);
