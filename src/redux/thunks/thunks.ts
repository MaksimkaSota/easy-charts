import * as addressesThunkCreators from './addresses';
import * as weatherThunkCreators from './weather';

export const thunkCreators = {
  ...addressesThunkCreators,
  ...weatherThunkCreators,
};
