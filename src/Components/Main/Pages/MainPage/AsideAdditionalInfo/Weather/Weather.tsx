import type { FC, ReactElement, ChangeEvent } from 'react';
import cn from 'classnames';
import classes from './Weather.module.scss';
import { FormName } from '../../../../../../utils/types/enums';
import type { IWeather } from '../../../../../../utils/types/api/weather';
import type { ErrorType, Nullable } from '../../../../../../utils/types/common';

type PropsType = {
  city: string;
  setCity: (city: string) => void;
  location: string;
  isFetchingWeather: boolean;
  weather: Nullable<IWeather>;
  weatherError: Nullable<ErrorType>;
};

export const Weather: FC<PropsType> = ({
  city,
  setCity,
  location,
  isFetchingWeather,
  weather,
  weatherError,
}): ReactElement => {
  const temperature = weather && `${Math.round(weather.main.temp)} °C`;
  const state =
    weather && `${weather.weather[0].description.charAt(0).toUpperCase()}${weather.weather[0].description.slice(1)}`;
  const humidity = weather && `${Math.round(weather.main.humidity)} %`;
  const speed = weather && `${Math.round(weather?.wind.speed)} м/с`;

  const onCityChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };

  return (
    <div className={classes.weather}>
      <h3 className={classes.miniTitle}>Прогноз погоды</h3>
      <p className={cn(classes.hintText, { [classes.textError]: weatherError })}>
        {weatherError?.message || 'По данным OpenWeather'}
      </p>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <label className={classes.label} htmlFor={FormName.City}>
            Город
          </label>
          <input
            className={cn(classes.input, { [classes.inputError]: weatherError?.code })}
            type="text"
            id={FormName.City}
            value={city}
            onChange={onCityChange}
          />
        </div>
        <p className={classes.description}>{location}</p>
      </div>
      <p className={classes.weatherText}>
        Температура:{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && temperature}
          {weatherError && 'Нет данных'}
        </em>
      </p>
      <p className={classes.weatherText}>
        Состояние:{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && state}
          {weatherError && 'Нет данных'}
        </em>
      </p>
      <p className={classes.weatherText}>
        Влажность:{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && humidity}
          {weatherError && 'Нет данных'}
        </em>
      </p>
      <p className={classes.weatherText}>
        Скорость ветра:{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && speed}
          {weatherError && 'Нет данных'}
        </em>
      </p>
    </div>
  );
};
