import type { AppState } from '../reducers/reducers';

export const addressesSelector = (state: AppState) => state.addresses;
export const mainOptionsSelector = (state: AppState) => state.mainOptions;
export const examplesOptionsSelector = (state: AppState) => state.examplesOptions;
