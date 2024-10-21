import { type AddressesState, type AddressesAction, AddressesActionType } from '../types/addresses';

const initialState: AddressesState = {
  mainAddress: '',
  urlAddress: '',
  exampleFirstAddress: '',
  exampleSecondAddress: '',
  exampleThirdAddress: '',
};

export const addressesReducer = (state: AddressesState = initialState, action: AddressesAction): AddressesState => {
  switch (action.type) {
    case AddressesActionType.SET_ADDRESS_MAIN_SUCCESS:
      return {
        ...state,
        mainAddress: action.payload,
      };
    case AddressesActionType.SET_ADDRESS_URL:
      return {
        ...state,
        urlAddress: action.payload,
      };
    case AddressesActionType.SET_ADDRESS_EXAMPLE_FIRST_SUCCESS:
      return {
        ...state,
        exampleFirstAddress: action.payload,
      };
    case AddressesActionType.SET_ADDRESS_EXAMPLE_SECOND_SUCCESS:
      return {
        ...state,
        exampleSecondAddress: action.payload,
      };
    case AddressesActionType.SET_ADDRESS_EXAMPLE_THIRD_SUCCESS:
      return {
        ...state,
        exampleThirdAddress: action.payload,
      };
    default:
      return state;
  }
};
