import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { RequestString } from '../utils/types/enums';

export const http: AxiosInstance = axios.create({
  baseURL: RequestString.quickchart,
  responseType: 'blob',
});
