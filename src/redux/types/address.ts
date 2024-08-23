export type AddressState = {
  address: string;
}

export enum AddressActionType {
  SET_ADDRESS = 'SET_ADDRESS',
  SET_ADDRESS_WIDTH_HEIGHT = 'SET_ADDRESS_WIDTH_HEIGHT',
}

export type SetAddressAction = { type: AddressActionType.SET_ADDRESS; payload: string; }
export type SetWidthHeightAction = { type: AddressActionType.SET_ADDRESS_WIDTH_HEIGHT; payload: string; }

export type AddressAction = SetAddressAction | SetWidthHeightAction;
