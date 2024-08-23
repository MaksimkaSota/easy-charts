export type AddressState = {
  address: string;
}

export enum AddressActionType {
  SET_ADDRESS = 'SET_ADDRESS',
}

export type SetAddressAction = { type: AddressActionType.SET_ADDRESS; payload: string; }

export type AddressAction = SetAddressAction;
