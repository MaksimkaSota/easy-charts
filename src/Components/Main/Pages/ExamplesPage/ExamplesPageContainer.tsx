import { FC, ReactElement } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector } from '../../../../redux/selectors/selectors';
import { ExamplesPage } from './ExamplesPage';

export const ExamplesPageContainer: FC = (): ReactElement => {
  const {exampleFirstAddress, exampleSecondAddress, exampleThirdAddress} = useTypedSelector(addressesSelector);
  const examplesOptions = useTypedSelector(examplesOptionsSelector);
  const {exampleFirstOptions, exampleSecondOptions, exampleThirdOptions} = useTypedSelector(examplesOptionsSelector);
  const {getAddress, setNewMainOptions} = useActions();

  return (
    <ExamplesPage
      exampleFirstAddress={exampleFirstAddress}
      exampleSecondAddress={exampleSecondAddress}
      exampleThirdAddress={exampleThirdAddress}
      examplesOptions={examplesOptions}
      exampleFirstOptions={exampleFirstOptions}
      exampleSecondOptions={exampleSecondOptions}
      exampleThirdOptions={exampleThirdOptions}
      getAddress={getAddress}
      setNewMainOptions={setNewMainOptions}
    />
  );
};
