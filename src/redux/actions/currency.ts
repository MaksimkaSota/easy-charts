import {
  CurrencyActionType,
  type SetCurrencyFailureAction,
  type SetCurrencyOnAmericaCoinAction,
  type SetCurrencyOnBelarusCoinAction,
  type SetCurrencyOnEuropeCoinAction,
  type SetCurrencyOnPolandCoinAction,
  type SetCurrencyOnRussiaCoinAction,
  type SetCurrencyOnUkraineCoinAction,
  type SetCurrencyRequestAction,
  type SetCurrencySuccessAction,
} from '../types/currency';
import type { ObjectType } from '../../utils/types/common';

export const setCurrencyRequest = (): SetCurrencyRequestAction => ({
  type: CurrencyActionType.SET_CURRENCY_REQUEST,
});
export const setCurrencySuccess = (): SetCurrencySuccessAction => ({
  type: CurrencyActionType.SET_CURRENCY_SUCCESS,
});
export const setCurrencyFailure = (message: string, code?: number): SetCurrencyFailureAction => ({
  type: CurrencyActionType.SET_CURRENCY_FAILURE,
  payload: { message, code },
});

export const setCurrencyOnBelarusCoin = (
  coin: string,
  currencies: ObjectType<number>
): SetCurrencyOnBelarusCoinAction => ({
  type: CurrencyActionType.SET_CURRENCY_ON_BELARUS_COIN,
  payload: { coin, currencies },
});
export const setCurrencyOnAmericaCoin = (
  coin: string,
  currencies: ObjectType<number>
): SetCurrencyOnAmericaCoinAction => ({
  type: CurrencyActionType.SET_CURRENCY_ON_AMERICA_COIN,
  payload: { coin, currencies },
});
export const setCurrencyOnEuropeCoin = (
  coin: string,
  currencies: ObjectType<number>
): SetCurrencyOnEuropeCoinAction => ({
  type: CurrencyActionType.SET_CURRENCY_ON_EUROPE_COIN,
  payload: { coin, currencies },
});
export const setCurrencyOnRussiaCoin = (
  coin: string,
  currencies: ObjectType<number>
): SetCurrencyOnRussiaCoinAction => ({
  type: CurrencyActionType.SET_CURRENCY_ON_RUSSIA_COIN,
  payload: { coin, currencies },
});
export const setCurrencyOnUkraineCoin = (
  coin: string,
  currencies: ObjectType<number>
): SetCurrencyOnUkraineCoinAction => ({
  type: CurrencyActionType.SET_CURRENCY_ON_UKRAINE_COIN,
  payload: { coin, currencies },
});
export const setCurrencyOnPolandCoin = (
  coin: string,
  currencies: ObjectType<number>
): SetCurrencyOnPolandCoinAction => ({
  type: CurrencyActionType.SET_CURRENCY_ON_POLAND_COIN,
  payload: { coin, currencies },
});
