import * as addressActionCreators from './address';
import * as optionsActionCreators from './options';
import * as examplesActionCreators from './examples';

export const actionCreators = {
  ...addressActionCreators,
  ...optionsActionCreators,
  ...examplesActionCreators,
};
