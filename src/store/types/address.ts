export interface AddressState {
  address: string;
}

export enum AddressActionType {
  GET_ADDRESS = "GET_ADDRESS",
  SET_WIDTH_HEIGHT = "SET_WIDTH_HEIGHT",
}

interface GetAddressAction {
  type: AddressActionType.GET_ADDRESS;
  payload: string;
}

interface SetWidthHeightAction {
  type: AddressActionType.SET_WIDTH_HEIGHT;
  payload: string;
}

export type AddressAction = GetAddressAction | SetWidthHeightAction;
