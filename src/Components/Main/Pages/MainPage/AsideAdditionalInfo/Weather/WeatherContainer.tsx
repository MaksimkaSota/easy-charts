import { type FC, type ReactElement, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useActions } from '../../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { isFetchingWeatherSelector } from '../../../../../../redux/selectors/loading';
import { weatherSelector } from '../../../../../../redux/selectors/selectors';
import { weatherErrorSelector } from '../../../../../../redux/selectors/error';
import { Weather } from './Weather';
import { StatusCode } from '../../../../../../utils/types/enums';

export const WeatherContainer: FC = (): ReactElement => {
  const isFetchingWeather = useTypedSelector(isFetchingWeatherSelector);
  const { city, location, weather } = useTypedSelector(weatherSelector);
  const weatherError = useTypedSelector(weatherErrorSelector);

  const { setCity, setLocation, setCityWithLocation, setWeatherDataRequest, getDegeocodingCity, getWeather } =
    useActions();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition): void => {
          getDegeocodingCity(position.coords.latitude, position.coords.longitude);
        },
        (error: GeolocationPositionError): void => {
          switch (error.code) {
            case StatusCode.Geolocation_network_error:
              setCityWithLocation('Минск', 'Ошибка получения текущего местоположения');
              break;
            case StatusCode.Geolocation_timeout_expired:
              setCityWithLocation('Минск', 'Не получено текущее местоположение (долгая попылка)');
              break;
            default:
              setCityWithLocation('Минск', 'Не разрешено получение текущего местоположения');
              break;
          }
        },
        {
          timeout: 3000,
        }
      );
    } else {
      setCityWithLocation('Минск', 'Невозможно получить текущее местоположение');
    }

    return () => {
      setCityWithLocation('', 'Местоположение');
    };
  }, [setCityWithLocation, getDegeocodingCity]);

  const getDebouncedWeather = useDebouncedCallback(() => getWeather(city), 900);

  useEffect(() => {
    setWeatherDataRequest();
    setLocation('Местоположение');
    if (city) {
      getDebouncedWeather();
    }
  }, [setWeatherDataRequest, setLocation, getDebouncedWeather, city]);

  return (
    <Weather
      city={city}
      setCity={setCity}
      location={location}
      isFetchingWeather={isFetchingWeather}
      weather={weather}
      weatherError={weatherError}
    />
  );
};
