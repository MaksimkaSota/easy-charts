import { http } from './http';
import type { ICurrency } from '../../../utils/types/api/currency';

export const getCurrencyAPI = async (currencyId: number): Promise<number> => {
  const response = await http.get(`${currencyId}`);
  const data: ICurrency = response.data;

  return data.Cur_OfficialRate;
};
