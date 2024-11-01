import type { ObjectType } from '../common';

interface ICoord {
  lon: number;
  lat: number;
}

interface IWeatherIndicator {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  coord: ICoord;
  weather: IWeatherIndicator[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  rain?: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IGeocoding {
  name: string;
  local_names: ObjectType;
  lat: number;
  lon: number;
  country: string;
}
