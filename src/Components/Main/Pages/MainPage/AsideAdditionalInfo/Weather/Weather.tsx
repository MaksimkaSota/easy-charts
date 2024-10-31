import { type ReactElement, memo } from 'react';
import classes from './Weather.module.scss';
import { FormName } from '../../../../../../utils/types/enums';

type PropsType = {};

export const Weather = memo<PropsType>((): ReactElement => {
  return (
    <div className={classes.weather}>
      <h3 className={classes.miniTitle}>Прогноз погоды</h3>
      <p className={classes.hintText}>По данным OpenWeather</p>
      <div className={classes.formContainer}>
        <label className={classes.label} htmlFor={FormName.City}>
          Город
        </label>
        <input className={classes.city} type="text" id={FormName.City} />
      </div>
      <p className={classes.weatherText}>Температура:</p>
      <p className={classes.weatherText}>Скорость ветра:</p>
      <p className={classes.weatherText}>Влажность:</p>
    </div>
  );
});
