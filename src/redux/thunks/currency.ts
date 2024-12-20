import { isAxiosError } from 'axios';
import i18next from '../../services/localization/i18n';
import type { ObjectType, ThunkType } from '../../utils/types/common';
import type { CurrencyAction } from '../types/currency';
import { CurrencyId, ErrorTxtKey, FieldName, LocalStorageKey } from '../../utils/types/enums';
import { getCurrencyAPI } from '../../services/api/currency/currency';
import {
  setCurrencyFailure,
  setCurrencyOnAmericaCoin,
  setCurrencyOnBelarusCoin,
  setCurrencyOnEuropeCoin,
  setCurrencyOnPolandCoin,
  setCurrencyOnRussiaCoin,
  setCurrencyOnUkraineCoin,
  setCurrencyRequest,
  setCurrencySuccess,
} from '../actions/currency';
import { setLocalItem } from '../../services/browserDataStorage/localStorage';

export const getCurrency = (coin: string, name: string): ThunkType<CurrencyAction> => {
  return async (dispatch) => {
    try {
      if (name === FieldName.AmericaCoin) {
        setLocalItem(LocalStorageKey.AmericaCoin, coin);
      }

      dispatch(setCurrencyRequest());

      const [americaCoin, europeCoin, russiaCoin, ukraineCoin, polandCoin]: number[] = await Promise.all([
        await getCurrencyAPI(CurrencyId.UsdId),
        await getCurrencyAPI(CurrencyId.EurId),
        await getCurrencyAPI(CurrencyId.RubId),
        await getCurrencyAPI(CurrencyId.UahId),
        await getCurrencyAPI(CurrencyId.PlnId),
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
          dispatch(setCurrencyFailure(i18next.t(ErrorTxtKey.Error), error.response.status));
        } else {
          dispatch(setCurrencyFailure(i18next.t(ErrorTxtKey.Network)));
        }
      }
    }
  };
};
