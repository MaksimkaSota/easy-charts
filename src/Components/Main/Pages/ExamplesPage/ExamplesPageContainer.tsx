import { type FC, type ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector } from '../../../../redux/selectors/selectors';
import { ExamplesPage } from './ExamplesPage';

export const ExamplesPageContainer: FC = (): ReactElement => {
  const { exampleFirstAddress, exampleSecondAddress, exampleThirdAddress } = useTypedSelector(addressesSelector);
  const { exampleFirstOptions, exampleSecondOptions, exampleThirdOptions } = useTypedSelector(examplesOptionsSelector);
  const { getAddress, setNewMainOptions } = useActions();

  useEffect(() => {
    getAddress(exampleFirstOptions, 1000, 600, 'firstExample');
    getAddress(exampleSecondOptions, 1000, 600, 'secondExample');
    getAddress(exampleThirdOptions, 1000, 600, 'thirdExample');
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
