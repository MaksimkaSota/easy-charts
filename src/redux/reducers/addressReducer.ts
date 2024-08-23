import { AddressAction, AddressActionType, AddressState } from '../types/address';

const initialState: AddressState = {
  address: '',
};

export const addressReducer = (state: AddressState = initialState, action: AddressAction): AddressState => {
  switch (action.type) {
    case AddressActionType.SET_ADDRESS:
      return {address: action.payload};
    case AddressActionType.SET_ADDRESS_WIDTH_HEIGHT:
      return {address: action.payload};
    default:
      return state;
  }
};
