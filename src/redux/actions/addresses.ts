import {
  type SetMainAddressRequestAction,
  type SetMainAddressSuccessAction,
  type SetMainAddressFailureAction,
  type SetUrlAddressAction,
  type SetExampleFirstAddressAction,
  type SetExampleSecondAddressAction,
  type SetExampleThirdAddressAction,
  AddressesActionType,
} from '../types/addresses';

export const setMainAddressRequest = (): SetMainAddressRequestAction => ({
  type: AddressesActionType.SET_ADDRESS_MAIN_REQUEST,
});
export const setMainAddressSuccess = (address: string): SetMainAddressSuccessAction => ({
  type: AddressesActionType.SET_ADDRESS_MAIN_SUCCESS,
  payload: address,
});
export const setMainAddressFailure = (message: string, code?: number): SetMainAddressFailureAction => ({
  type: AddressesActionType.SET_ADDRESS_MAIN_FAILURE,
  payload: { message, code },
});

export const setUrlAddress = (urlAddress: string): SetUrlAddressAction => ({
  type: AddressesActionType.SET_ADDRESS_URL,
  payload: urlAddress,
});

export const setExampleFirstAddress = (address: string): SetExampleFirstAddressAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST,
  payload: address,
});
export const setExampleSecondAddress = (address: string): SetExampleSecondAddressAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND,
  payload: address,
});
export const setExampleThirdAddress = (address: string): SetExampleThirdAddressAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD,
  payload: address,
});
