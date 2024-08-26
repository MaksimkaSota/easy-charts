import { AddressesState, AddressesActionType, AddressesAction } from '../types/addresses';

const initialState: AddressesState = {
  mainAddress: '',
  exampleFirstAddress: '',
  exampleSecondAddress: '',
  exampleThirdAddress: '',
};

export const addressesReducer = (state: AddressesState = initialState, action: AddressesAction): AddressesState => {
  switch (action.type) {
    case AddressesActionType.SET_ADDRESS_MAIN:
      return {
        ...state,
        mainAddress: action.payload
      };
    case AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST:
      return {
        ...state,
        exampleFirstAddress: action.payload
      };
    case AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND:
      return {
        ...state,
        exampleSecondAddress: action.payload
      };
    case AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD:
      return {
        ...state,
        exampleThirdAddress: action.payload
      };
    default:
      return state;
  }
};
