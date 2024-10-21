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
  SET_ADDRESS_EXAMPLE_FIRST_REQUEST = 'SET_ADDRESS_EXAMPLE_FIRST_REQUEST',
  SET_ADDRESS_EXAMPLE_FIRST_SUCCESS = 'SET_ADDRESS_EXAMPLE_FIRST_SUCCESS',
  SET_ADDRESS_EXAMPLE_FIRST_FAILURE = 'SET_ADDRESS_EXAMPLE_FIRST_FAILURE',
  SET_ADDRESS_EXAMPLE_SECOND_REQUEST = 'SET_ADDRESS_EXAMPLE_SECOND_REQUEST',
  SET_ADDRESS_EXAMPLE_SECOND_SUCCESS = 'SET_ADDRESS_EXAMPLE_SECOND_SUCCESS',
  SET_ADDRESS_EXAMPLE_SECOND_FAILURE = 'SET_ADDRESS_EXAMPLE_SECOND_FAILURE',
  SET_ADDRESS_EXAMPLE_THIRD_REQUEST = 'SET_ADDRESS_EXAMPLE_THIRD_REQUEST',
  SET_ADDRESS_EXAMPLE_THIRD_SUCCESS = 'SET_ADDRESS_EXAMPLE_THIRD_SUCCESS',
  SET_ADDRESS_EXAMPLE_THIRD_FAILURE = 'SET_ADDRESS_EXAMPLE_THIRD_FAILURE',
}

export type SetMainAddressRequestAction = { type: AddressesActionType.SET_ADDRESS_MAIN_REQUEST };
export type SetMainAddressSuccessAction = { type: AddressesActionType.SET_ADDRESS_MAIN_SUCCESS; payload: string };
export type SetMainAddressFailureAction = { type: AddressesActionType.SET_ADDRESS_MAIN_FAILURE; payload: ErrorType };

export type SetUrlAddressAction = { type: AddressesActionType.SET_ADDRESS_URL; payload: string };

export type SetExampleFirstAddressRequestAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST_REQUEST };
export type SetExampleFirstAddressSuccessAction = {
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST_SUCCESS;
  payload: string;
};
export type SetExampleFirstAddressFailureAction = {
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST_FAILURE;
  payload: ErrorType;
};

export type SetExampleSecondAddressRequestAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND_REQUEST };
export type SetExampleSecondAddressSuccessAction = {
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND_SUCCESS;
  payload: string;
};
export type SetExampleSecondAddressFailureAction = {
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND_FAILURE;
  payload: ErrorType;
};

export type SetExampleThirdAddressRequestAction = { type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD_REQUEST };
export type SetExampleThirdAddressSuccessAction = {
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD_SUCCESS;
  payload: string;
};
export type SetExampleThirdAddressFailureAction = {
  type: AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD_FAILURE;
  payload: ErrorType;
};

export type AddressesAction =
  | SetMainAddressRequestAction
  | SetMainAddressSuccessAction
  | SetMainAddressFailureAction
  | SetUrlAddressAction
  | SetExampleFirstAddressRequestAction
  | SetExampleFirstAddressSuccessAction
  | SetExampleFirstAddressFailureAction
  | SetExampleSecondAddressRequestAction
  | SetExampleSecondAddressSuccessAction
  | SetExampleSecondAddressFailureAction
  | SetExampleThirdAddressRequestAction
  | SetExampleThirdAddressSuccessAction
  | SetExampleThirdAddressFailureAction;
