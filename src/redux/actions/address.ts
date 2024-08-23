import { AddressActionType, SetAddressAction } from '../types/address';

export const setAddress = (address: string): SetAddressAction => ({
  type: AddressActionType.SET_ADDRESS,
  payload: address
});
