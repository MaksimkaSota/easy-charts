import * as addressesActionCreators from './addresses';
import * as mainOptionsActionCreators from './mainOptions';
import * as examplesOptionsActionCreators from './examplesOptions';
import * as weatherActionCreators from './weather';
import * as currencyActionCreators from './currency';
import * as viewActionCreators from './view';

export const actionCreators = {
  ...addressesActionCreators,
  ...mainOptionsActionCreators,
  ...examplesOptionsActionCreators,
  ...weatherActionCreators,
  ...currencyActionCreators,
  ...viewActionCreators,
};
