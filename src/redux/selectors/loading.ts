import type { AppState } from '../reducers/reducers';

export const isFetchingMainAddressSelector = (state: AppState) => state.loading.SET_ADDRESS_MAIN;
