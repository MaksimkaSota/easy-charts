import type { AppState } from '../reducers/reducers';

export const isFetchingMainAddressSelector = (state: AppState) => state.loading.SET_ADDRESS_MAIN;
export const isFetchingExampleFirstAddressSelector = (state: AppState) => state.loading.SET_ADDRESS_EXAMPLE_FIRST;
export const isFetchingExampleSecondAddressSelector = (state: AppState) => state.loading.SET_ADDRESS_EXAMPLE_SECOND;
export const isFetchingExampleThirdAddressSelector = (state: AppState) => state.loading.SET_ADDRESS_EXAMPLE_THIRD;
