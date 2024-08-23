import * as AddressActionCreators from './address';
import * as OptionsActionCreators from './options';
import * as ExamplesActionCreators from './examples';

export default {
  ...AddressActionCreators,
  ...OptionsActionCreators,
  ...ExamplesActionCreators,
};
