import { isAxiosError } from 'axios';
import type { ThunkType, ObjectType } from '../../utils/types/common';
import type { CurrencyAction } from '../types/currency';
import { CurrencyId, FieldName } from '../../utils/types/enums';
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

      const [americaCoin, europeCoin, russiaCoin, ukraineCoin, polandCoin]: number[] = await Promise.all([
        await getCurrencyAPI(CurrencyId.usdId),
        await getCurrencyAPI(CurrencyId.eurId),
        await getCurrencyAPI(CurrencyId.rubId),
        await getCurrencyAPI(CurrencyId.uahId),
        await getCurrencyAPI(CurrencyId.plnId),
      ]);
      const currenciesObject: ObjectType<number> = { americaCoin, europeCoin, russiaCoin, ukraineCoin, polandCoin };

      dispatch(setCurrencySuccess());

      switch (name) {
        case FieldName.BelarusCoin:
          dispatch(setCurrencyOnBelarusCoin(coin, currenciesObject));
          break;
        case FieldName.AmericaCoin:
          dispatch(setCurrencyOnAmericaCoin(coin, currenciesObject));
          break;
        case FieldName.EuropeCoin:
          dispatch(setCurrencyOnEuropeCoin(coin, currenciesObject));
          break;
        case FieldName.RussiaCoin:
          dispatch(setCurrencyOnRussiaCoin(coin, currenciesObject));
          break;
        case FieldName.UkraineCoin:
          dispatch(setCurrencyOnUkraineCoin(coin, currenciesObject));
          break;
        case FieldName.PolandCoin:
          dispatch(setCurrencyOnPolandCoin(coin, currenciesObject));
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
