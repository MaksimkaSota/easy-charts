import {
  AddressesActionType,
  type SetExampleFirstAddressFailureAction,
  type SetExampleFirstAddressRequestAction,
  type SetExampleFirstAddressSuccessAction,
  type SetExampleSecondAddressFailureAction,
  type SetExampleSecondAddressRequestAction,
  type SetExampleSecondAddressSuccessAction,
  type SetExampleThirdAddressFailureAction,
  type SetExampleThirdAddressRequestAction,
  type SetExampleThirdAddressSuccessAction,
  type SetMainAddressFailureAction,
  type SetMainAddressRequestAction,
  type SetMainAddressSuccessAction,
  type SetUrlAddressAction,
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

export const setExampleFirstAddressRequest = (): SetExampleFirstAddressRequestAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST_REQUEST,
});
export const setExampleFirstAddressSuccess = (address: string): SetExampleFirstAddressSuccessAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST_SUCCESS,
  payload: address,
});
export const setExampleFirstAddressFailure = (message: string, code?: number): SetExampleFirstAddressFailureAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST_FAILURE,
  payload: { message, code },
});

export const setExampleSecondAddressRequest = (): SetExampleSecondAddressRequestAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND_REQUEST,
});
export const setExampleSecondAddressSuccess = (address: string): SetExampleSecondAddressSuccessAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND_SUCCESS,
  payload: address,
});
export const setExampleSecondAddressFailure = (
  message: string,
  code?: number
): SetExampleSecondAddressFailureAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND_FAILURE,
  payload: { message, code },
});

export const setExampleThirdAddressRequest = (): SetExampleThirdAddressRequestAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD_REQUEST,
});
export const setExampleThirdAddressSuccess = (address: string): SetExampleThirdAddressSuccessAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD_SUCCESS,
  payload: address,
});
export const setExampleThirdAddressFailure = (message: string, code?: number): SetExampleThirdAddressFailureAction => ({
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD_FAILURE,
  payload: { message, code },
});
