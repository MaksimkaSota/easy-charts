import {
  AddressAction,
  AddressActionType,
  AddressState,
} from "../types/address";

const initialState: AddressState = {
  address: "",
};

export const addressReducer = (
  state = initialState,
  action: AddressAction
): AddressState => {
  switch (action.type) {
    case AddressActionType.GET_ADDRESS:
      return { address: action.payload };
    case AddressActionType.SET_WIDTH_HEIGHT:
      return { address: action.payload };
    default:
      return state;
  }
};
