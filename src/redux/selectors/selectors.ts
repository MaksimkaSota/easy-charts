import type { AppState } from '../reducers/reducers';

export const addressesSelector = (state: AppState) => state.addresses;
export const mainOptionsSelector = (state: AppState) => state.mainOptions;
export const examplesOptionsSelector = (state: AppState) => state.examplesOptions;
export const weatherSelector = (state: AppState) => state.weather;
export const currencySelector = (state: AppState) => state.currency;
