import axios, { type AxiosInstance } from 'axios';
import { requestString } from '../../endpoints';

export const http: AxiosInstance = axios.create({
  baseURL: requestString.openweather.main,
  params: {
    appid: process.env.REACT_APP_OPENWEATHER_KEY,
  },
});
