import { type FC, type ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector } from '../../../../redux/selectors/selectors';
import { ExamplesPage } from './ExamplesPage';
import { ExampleKey } from '../../../../utils/types/enums';

export const ExamplesPageContainer: FC = (): ReactElement => {
  const { exampleFirstAddress, exampleSecondAddress, exampleThirdAddress } = useTypedSelector(addressesSelector);
  const { exampleFirstOptions, exampleSecondOptions, exampleThirdOptions } = useTypedSelector(examplesOptionsSelector);
  const { getAddress, setNewMainOptions } = useActions();

  useEffect(() => {
    getAddress(exampleFirstOptions, 1000, 600, ExampleKey.first);
    getAddress(exampleSecondOptions, 1000, 600, ExampleKey.second);
    getAddress(exampleThirdOptions, 1000, 600, ExampleKey.third);
    // eslint-disable-next-line
  }, [exampleFirstOptions, exampleSecondOptions, exampleThirdOptions]);

  return (
    <ExamplesPage
      exampleFirstAddress={exampleFirstAddress}
      exampleSecondAddress={exampleSecondAddress}
      exampleThirdAddress={exampleThirdAddress}
      exampleFirstOptions={exampleFirstOptions}
      exampleSecondOptions={exampleSecondOptions}
      exampleThirdOptions={exampleThirdOptions}
      setNewMainOptions={setNewMainOptions}
    />
  );
};
