import { type FC, type ReactElement, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { isFetchingWeatherSelector } from '../../../../../../redux/selectors/loading';
import { viewSelector, weatherSelector } from '../../../../../../redux/selectors/selectors';
import { weatherErrorSelector } from '../../../../../../redux/selectors/error';
import { Weather } from './Weather';
import { ContentTxtKey, StatusCode } from '../../../../../../utils/types/enums';

export const WeatherContainer: FC = (): ReactElement => {
  const { languageMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  const isFetchingWeather = useTypedSelector(isFetchingWeatherSelector);
  const { city, location, weather } = useTypedSelector(weatherSelector);
  const weatherError = useTypedSelector(weatherErrorSelector);

  const { setCity, setLocation, setCityWithLocation, setWeatherDataRequest, getDegeocodingCity, getWeather } =
    useActions();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition): void => {
          getDegeocodingCity(position.coords.latitude, position.coords.longitude, languageMode);
        },
        (error: GeolocationPositionError): void => {
          switch (error.code) {
            case StatusCode.GeolocationNetworkError:
              setCityWithLocation(t(ContentTxtKey.CityGeolocation), t(ContentTxtKey.ErrorGeolocation));
              break;
            case StatusCode.GeolocationTimeoutExpired:
              setCityWithLocation(t(ContentTxtKey.CityGeolocation), t(ContentTxtKey.NotReceivedGeolocation));
              break;
            default:
              setCityWithLocation(t(ContentTxtKey.CityGeolocation), t(ContentTxtKey.NotAllowedGeolocation));
              break;
          }
        },
        {
          timeout: 3000,
        }
      );
    } else {
      setCityWithLocation(t(ContentTxtKey.CityGeolocation), t(ContentTxtKey.ImpossibleGeolocation));
    }
  }, [setCityWithLocation, getDegeocodingCity, t, languageMode]);

  const getDebouncedWeather = useDebouncedCallback(() => getWeather(city, languageMode), 900);

  useEffect(() => {
    setWeatherDataRequest();
    getDebouncedWeather();
  }, [setWeatherDataRequest, getDebouncedWeather, city, languageMode]);

  return (
    <Weather
      city={city}
      setCity={setCity}
      setLocation={setLocation}
      location={location}
      isFetchingWeather={isFetchingWeather}
      weather={weather}
      weatherError={weatherError}
    />
  );
};
