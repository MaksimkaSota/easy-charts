import axios from 'axios';
import type { AxiosInstance } from 'axios';

const baseURL: string = 'https://quickchart.io/chart';

export const http: AxiosInstance = axios.create({
  baseURL: baseURL,
  responseType: 'blob',
});
