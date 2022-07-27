import * as AddressActionCreators from "./address";
import * as OptionsActionCreators from "./chartOptions";
import * as ExamplesActionCreators from "./examples";

export default {
  ...AddressActionCreators,
  ...OptionsActionCreators,
  ...ExamplesActionCreators,
};
