import type { ErrorType } from '../../utils/types/common';

export type AddressesState = {
  mainAddress: string;
  urlAddress: string;
  exampleFirstAddress: string;
  exampleSecondAddress: string;
  exampleThirdAddress: string;
};

export enum AddressesActionType {
  SET_ADDRESS_MAIN_REQUEST = 'SET_ADDRESS_MAIN_REQUEST',
  SET_ADDRESS_MAIN_SUCCESS = 'SET_ADDRESS_MAIN_SUCCESS',
  SET_ADDRESS_MAIN_FAILURE = 'SET_ADDRESS_MAIN_FAILURE',
  SET_ADDRESS_URL = 'SET_ADDRESS_URL',
  SET_ADDRESS_EXAMPLE_FIRST = 'SET_ADDRESS_EXAMPLE_FIRST',
  SET_ADDRESS_EXAMPLE_SECOND = 'SET_ADDRESS_EXAMPLE_SECOND',
  SET_ADDRESS_EXAMPLE_THIRD = 'SET_ADDRESS_EXAMPLE_THIRD',
}

export type SetMainAddressRequestAction = { type: AddressesActionType.SET_ADDRESS_MAIN_REQUEST };
export type SetMainAddressSuccessAction = { type: AddressesActionType.SET_ADDRESS_MAIN_SUCCESS; payload: string };
export type SetMainAddressFailureAction = { type: AddressesActionType.SET_ADDRESS_MAIN_FAILURE; payload: ErrorType };

export type SetUrlAddressAction = { type: AddressesActionType.SET_ADDRESS_URL; payload: string };

export type SetExampleFirstAddressAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST; payload: string };
export type SetExampleSecondAddressAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND; payload: string };
export type SetExampleThirdAddressAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD; payload: string };

export type AddressesAction =
  | SetMainAddressRequestAction
  | SetMainAddressSuccessAction
  | SetMainAddressFailureAction
  | SetUrlAddressAction
  | SetExampleFirstAddressAction
  | SetExampleSecondAddressAction
  | SetExampleThirdAddressAction;
