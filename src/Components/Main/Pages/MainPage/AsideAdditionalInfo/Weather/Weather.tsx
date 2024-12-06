import type { FC, ReactElement, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Weather.module.scss';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../../redux/selectors/selectors';
import { FieldName, ContentTxtKey } from '../../../../../../utils/types/enums';
import type { IWeather } from '../../../../../../utils/types/api/weather';
import type { ErrorType, Nullable } from '../../../../../../utils/types/common';

type PropsType = {
  city: string;
  setCity: (city: string) => void;
  setLocation: (location: string) => void;
  location: string;
  isFetchingWeather: boolean;
  weather: Nullable<IWeather>;
  weatherError: Nullable<ErrorType>;
};

export const Weather: FC<PropsType> = ({
  city,
  setCity,
  setLocation,
  location,
  isFetchingWeather,
  weather,
  weatherError,
}): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  const temperature = weather && `${Math.round(weather.main.temp)} °C`;
  const state =
    weather && `${weather.weather[0].description.charAt(0).toUpperCase()}${weather.weather[0].description.slice(1)}`;
  const humidity = weather && `${Math.round(weather.main.humidity)} %`;
  const speed = weather && `${Math.round(weather?.wind.speed)} ${t(ContentTxtKey.WeatherSpeed)}`;

  const onCityChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
    setLocation(t(ContentTxtKey.LocationGeolocation));
  };

  return (
    <div className={classes.weather}>
      <h3 className={cn(classes.miniTitle, classes[`miniTitle-${themeMode}`])}>{t(ContentTxtKey.WeatherMiniTitle)}</h3>
      <p className={cn(classes.hintText, { [classes.textError]: weatherError })}>
        {weatherError?.message || t(ContentTxtKey.WeatherMiniDescription)}
      </p>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <label className={classes.label} htmlFor={FieldName.City}>
            {t(ContentTxtKey.WeatherCity)}
          </label>
          <input
            className={cn(classes.input, { [classes.inputError]: weatherError?.code })}
            type="text"
            id={FieldName.City}
            value={city}
            onChange={onCityChange}
          />
        </div>
        <p className={classes.description}>{location}</p>
      </div>
      <p className={classes.weatherText}>
        {t(ContentTxtKey.WeatherTemp)}{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && temperature}
          {weatherError && 'Нет данных'}
        </em>
      </p>
      <p className={classes.weatherText}>
        {t(ContentTxtKey.WeatherState)}{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && state}
          {weatherError && 'Нет данных'}
        </em>
      </p>
      <p className={classes.weatherText}>
        {t(ContentTxtKey.WeatherHumidity)}{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && humidity}
          {weatherError && 'Нет данных'}
        </em>
      </p>
      <p className={classes.weatherText}>
        {t(ContentTxtKey.WeatherWind)}{' '}
        <em>
          {isFetchingWeather && 'Загрузка...'}
          {!isFetchingWeather && !weatherError && speed}
          {weatherError && 'Нет данных'}
        </em>
      </p>
    </div>
  );
};
