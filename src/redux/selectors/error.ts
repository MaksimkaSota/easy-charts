import type { AppState } from '../reducers/reducers';

export const mainAddressErrorSelector = (state: AppState) => state.error.SET_ADDRESS_MAIN;
export const exampleFirstAddressErrorSelector = (state: AppState) => state.error.SET_ADDRESS_EXAMPLE_FIRST;
export const exampleSecondAddressErrorSelector = (state: AppState) => state.error.SET_ADDRESS_EXAMPLE_SECOND;
export const exampleThirdAddressErrorSelector = (state: AppState) => state.error.SET_ADDRESS_EXAMPLE_THIRD;
