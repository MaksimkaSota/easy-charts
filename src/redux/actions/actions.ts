import * as addressesActionCreators from './addresses';
import * as mainOptionsActionCreators from './mainOptions';
import * as examplesOptionsActionCreators from './examplesOptions';
import * as weatherActionCreators from './weather';

export const actionCreators = {
  ...addressesActionCreators,
  ...mainOptionsActionCreators,
  ...examplesOptionsActionCreators,
  ...weatherActionCreators,
};
