export type AddressesState = {
  mainAddress: string;
  exampleFirstAddress: string;
  exampleSecondAddress: string;
  exampleThirdAddress: string;
}

export enum AddressesActionType {
  SET_ADDRESS_MAIN = 'SET_ADDRESS_MAIN',
  SET_ADDRESS_EXAMPLE_FIRST = 'SET_ADDRESS_EXAMPLE_FIRST',
  SET_ADDRESS_EXAMPLE_SECOND = 'SET_ADDRESS_EXAMPLE_SECOND',
  SET_ADDRESS_EXAMPLE_THIRD = 'SET_ADDRESS_EXAMPLE_THIRD',
}

export type SetMainAddressAction = { type: AddressesActionType.SET_ADDRESS_MAIN; payload: string; }
export type SetExampleFirstAddressAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST; payload: string; }
export type SetExampleSecondAddressAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND; payload: string; }
export type SetExampleThirdAddressAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD; payload: string; }

export type AddressesAction =
  | SetMainAddressAction
  | SetExampleFirstAddressAction
  | SetExampleSecondAddressAction
  | SetExampleThirdAddressAction;
