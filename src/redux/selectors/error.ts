import type { AppState } from '../reducers/reducers';

export const mainAddressErrorSelector = (state: AppState) => state.error.SET_ADDRESS_MAIN;
