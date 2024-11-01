import type { ErrorType, Nullable } from '../../utils/types/common';

export type ErrorState = {
  SET_ADDRESS_MAIN: Nullable<ErrorType>;
  SET_ADDRESS_EXAMPLE_FIRST: Nullable<ErrorType>;
  SET_ADDRESS_EXAMPLE_SECOND: Nullable<ErrorType>;
  SET_ADDRESS_EXAMPLE_THIRD: Nullable<ErrorType>;
  SET_WEATHER_DATA: Nullable<ErrorType>;
};
