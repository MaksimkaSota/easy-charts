import { type CurrencyState, type CurrencyAction, CurrencyActionType } from '../types/currency';

const initialState: CurrencyState = {
  belarusCoin: '',
  americaCoin: '1',
  europeCoin: '',
  russiaCoin: '',
  ukraineCoin: '',
  polandCoin: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyAction): CurrencyState => {
  switch (action.type) {
    case CurrencyActionType.SET_CURRENCY_ON_BELARUS_COIN: {
      const { coin, currencies } = action.payload;
      const belarusCoin = +coin;
      return {
        ...state,
        americaCoin: (belarusCoin / currencies.americaCoin).toFixed(4),
        europeCoin: (belarusCoin / currencies.europeCoin).toFixed(4),
        russiaCoin: ((belarusCoin / currencies.russiaCoin) * 100).toFixed(4),
        ukraineCoin: ((belarusCoin / currencies.ukraineCoin) * 100).toFixed(4),
        polandCoin: ((belarusCoin / currencies.polandCoin) * 10).toFixed(4),
      };
    }
    case CurrencyActionType.SET_CURRENCY_ON_AMERICA_COIN: {
      const { coin, currencies } = action.payload;
      const belarusCoin = +coin * currencies.americaCoin;
      return {
        ...state,
        belarusCoin: belarusCoin.toFixed(4),
        europeCoin: (belarusCoin / currencies.europeCoin).toFixed(4),
        russiaCoin: ((belarusCoin / currencies.russiaCoin) * 100).toFixed(4),
        ukraineCoin: ((belarusCoin / currencies.ukraineCoin) * 100).toFixed(4),
        polandCoin: ((belarusCoin / currencies.polandCoin) * 10).toFixed(4),
      };
    }
    case CurrencyActionType.SET_CURRENCY_ON_EUROPE_COIN: {
      const { coin, currencies } = action.payload;
      const belarusCoin = +coin * currencies.europeCoin;
      return {
        ...state,
        belarusCoin: belarusCoin.toFixed(4),
        americaCoin: (belarusCoin / currencies.americaCoin).toFixed(4),
        russiaCoin: ((belarusCoin / currencies.russiaCoin) * 100).toFixed(4),
        ukraineCoin: ((belarusCoin / currencies.ukraineCoin) * 100).toFixed(4),
        polandCoin: ((belarusCoin / currencies.polandCoin) * 10).toFixed(4),
      };
    }
    case CurrencyActionType.SET_CURRENCY_ON_RUSSIA_COIN: {
      const { coin, currencies } = action.payload;
      const belarusCoin = (+coin * currencies.russiaCoin) / 100;
      return {
        ...state,
        belarusCoin: belarusCoin.toFixed(4),
        americaCoin: (belarusCoin / currencies.americaCoin).toFixed(4),
        europeCoin: (belarusCoin / currencies.europeCoin).toFixed(4),
        ukraineCoin: ((belarusCoin / currencies.ukraineCoin) * 100).toFixed(4),
        polandCoin: ((belarusCoin / currencies.polandCoin) * 10).toFixed(4),
      };
    }
    case CurrencyActionType.SET_CURRENCY_ON_UKRAINE_COIN: {
      const { coin, currencies } = action.payload;
      const belarusCoin = (+coin * currencies.ukraineCoin) / 100;
      return {
        ...state,
        belarusCoin: belarusCoin.toFixed(4),
        americaCoin: (belarusCoin / currencies.americaCoin).toFixed(4),
        europeCoin: (belarusCoin / currencies.europeCoin).toFixed(4),
        russiaCoin: ((belarusCoin / currencies.russiaCoin) * 100).toFixed(4),
        polandCoin: ((belarusCoin / currencies.polandCoin) * 10).toFixed(4),
      };
    }
    case CurrencyActionType.SET_CURRENCY_ON_POLAND_COIN: {
      const { coin, currencies } = action.payload;
      const belarusCoin = (+coin * currencies.polandCoin) / 10;
      return {
        ...state,
        belarusCoin: belarusCoin.toFixed(4),
        americaCoin: (belarusCoin / currencies.americaCoin).toFixed(4),
        europeCoin: (belarusCoin / currencies.europeCoin).toFixed(4),
        russiaCoin: ((belarusCoin / currencies.russiaCoin) * 100).toFixed(4),
        ukraineCoin: ((belarusCoin / currencies.ukraineCoin) * 100).toFixed(4),
      };
    }
    default:
      return state;
  }
};
