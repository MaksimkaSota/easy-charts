import {
  type SetMainAddressAction,
  type SetUrlAddressAction,
  type SetExampleFirstAddressAction,
  type SetExampleSecondAddressAction,
  type SetExampleThirdAddressAction,
  AddressesActionType,
} from '../types/addresses';

export const setMainAddress = (address: string): SetMainAddressAction => ({
  type: AddressesActionType.SET_ADDRESS_MAIN,
  payload: address,
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
