import { isAxiosError } from 'axios';
import type { ThunkType, ObjectType } from '../../utils/types/common';
import type { CurrencyAction } from '../types/currency';
import { CurrencyId, FormName } from '../../utils/types/enums';
import { getCurrencyAPI } from '../../services/api/currency/currency';
import {
  setCurrencyRequest,
  setCurrencySuccess,
  setCurrencyFailure,
  setCurrencyOnBelarusCoin,
  setCurrencyOnAmericaCoin,
  setCurrencyOnEuropeCoin,
  setCurrencyOnRussiaCoin,
  setCurrencyOnUkraineCoin,
  setCurrencyOnPolandCoin,
} from '../actions/currency';

export const getCurrency = (coin: string, name: string): ThunkType<CurrencyAction> => {
  return async (dispatch) => {
    try {
      dispatch(setCurrencyRequest());
      const americaCoin: number = await getCurrencyAPI(CurrencyId.usdId);
      const europeCoin: number = await getCurrencyAPI(CurrencyId.eurId);
      const russiaCoin: number = await getCurrencyAPI(CurrencyId.rubId);
      const ukraineCoin: number = await getCurrencyAPI(CurrencyId.uahId);
      const polandCoin: number = await getCurrencyAPI(CurrencyId.plnId);
      const currencies: ObjectType<number> = { americaCoin, europeCoin, russiaCoin, ukraineCoin, polandCoin };
      dispatch(setCurrencySuccess());

      switch (name) {
        case FormName.BelarusCoin:
          dispatch(setCurrencyOnBelarusCoin(coin, currencies));
          break;
        case FormName.AmericaCoin:
          dispatch(setCurrencyOnAmericaCoin(coin, currencies));
          break;
        case FormName.EuropeCoin:
          dispatch(setCurrencyOnEuropeCoin(coin, currencies));
          break;
        case FormName.RussiaCoin:
          dispatch(setCurrencyOnRussiaCoin(coin, currencies));
          break;
        case FormName.UkraineCoin:
          dispatch(setCurrencyOnUkraineCoin(coin, currencies));
          break;
        case FormName.PolandCoin:
          dispatch(setCurrencyOnPolandCoin(coin, currencies));
          break;
        default:
          break;
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response) {
          dispatch(setCurrencyFailure('Ошибка', error.response.status));
        } else {
          dispatch(setCurrencyFailure('Ошибка сети'));
        }
      }
    }
  };
};
