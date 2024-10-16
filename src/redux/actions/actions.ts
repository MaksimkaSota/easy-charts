import * as addressesActionCreators from './addresses';
import * as mainOptionsActionCreators from './mainOptions';
import * as examplesOptionsActionCreators from './examplesOptions';

export const actionCreators = {
  ...addressesActionCreators,
  ...mainOptionsActionCreators,
  ...examplesOptionsActionCreators,
};
