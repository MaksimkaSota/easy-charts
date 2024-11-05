import type { ErrorType, ObjectType } from '../../utils/types/common';

export type CurrencyState = {
  belarusCoin: string;
  americaCoin: string;
  europeCoin: string;
  russiaCoin: string;
  ukraineCoin: string;
  polandCoin: string;
};

export enum CurrencyActionType {
  SET_CURRENCY_REQUEST = 'SET_CURRENCY_REQUEST',
  SET_CURRENCY_SUCCESS = 'SET_CURRENCY_SUCCESS',
  SET_CURRENCY_FAILURE = 'SET_CURRENCY_FAILURE',
  SET_CURRENCY_ON_BELARUS_COIN = 'SET_CURRENCY_ON_BELARUS_COIN',
  SET_CURRENCY_ON_AMERICA_COIN = 'SET_CURRENCY_ON_AMERICA_COIN',
  SET_CURRENCY_ON_EUROPE_COIN = 'SET_CURRENCY_ON_EUROPE_COIN',
  SET_CURRENCY_ON_RUSSIA_COIN = 'SET_CURRENCY_ON_RUSSIA_COIN',
  SET_CURRENCY_ON_UKRAINE_COIN = 'SET_CURRENCY_ON_UKRAINE_COIN',
  SET_CURRENCY_ON_POLAND_COIN = 'SET_CURRENCY_ON_POLAND_COIN',
}

export type SetCurrencyRequestAction = { type: CurrencyActionType.SET_CURRENCY_REQUEST };
export type SetCurrencySuccessAction = { type: CurrencyActionType.SET_CURRENCY_SUCCESS };
export type SetCurrencyFailureAction = { type: CurrencyActionType.SET_CURRENCY_FAILURE; payload: ErrorType };

export type OnCoinPayload = {
  coin: string;
  currencies: ObjectType<number>;
};
export type SetCurrencyOnBelarusCoinAction = {
  type: CurrencyActionType.SET_CURRENCY_ON_BELARUS_COIN;
  payload: OnCoinPayload;
};
export type SetCurrencyOnAmericaCoinAction = {
  type: CurrencyActionType.SET_CURRENCY_ON_AMERICA_COIN;
  payload: OnCoinPayload;
};
export type SetCurrencyOnEuropeCoinAction = {
  type: CurrencyActionType.SET_CURRENCY_ON_EUROPE_COIN;
  payload: OnCoinPayload;
};
export type SetCurrencyOnRussiaCoinAction = {
  type: CurrencyActionType.SET_CURRENCY_ON_RUSSIA_COIN;
  payload: OnCoinPayload;
};
export type SetCurrencyOnUkraineCoinAction = {
  type: CurrencyActionType.SET_CURRENCY_ON_UKRAINE_COIN;
  payload: OnCoinPayload;
};
export type SetCurrencyOnPolandCoinAction = {
  type: CurrencyActionType.SET_CURRENCY_ON_POLAND_COIN;
  payload: OnCoinPayload;
};

export type CurrencyAction =
  | SetCurrencyRequestAction
  | SetCurrencySuccessAction
  | SetCurrencyFailureAction
  | SetCurrencyOnBelarusCoinAction
  | SetCurrencyOnAmericaCoinAction
  | SetCurrencyOnEuropeCoinAction
  | SetCurrencyOnRussiaCoinAction
  | SetCurrencyOnUkraineCoinAction
  | SetCurrencyOnPolandCoinAction;
