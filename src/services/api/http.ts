import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { requestString } from '../endpoints';

export const http: AxiosInstance = axios.create({
  baseURL: requestString.quickchart,
  responseType: 'blob',
});
