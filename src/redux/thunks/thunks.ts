import * as addressesThunkCreators from './addresses';
import * as weatherThunkCreators from './weather';
import * as currencyThunkCreators from './currency';

export const thunkCreators = {
  ...addressesThunkCreators,
  ...weatherThunkCreators,
  ...currencyThunkCreators,
};
