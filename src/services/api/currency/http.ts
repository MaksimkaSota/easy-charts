import axios, { type AxiosInstance } from 'axios';
import { requestString } from '../endpoints';

export const http: AxiosInstance = axios.create({
  baseURL: requestString.nbrb,
  params: {
    periodicity: 0,
  },
});
