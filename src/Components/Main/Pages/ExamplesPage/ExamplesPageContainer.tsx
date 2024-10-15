import { type FC, type ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector } from '../../../../redux/selectors/selectors';
import { ExamplesPage } from './ExamplesPage';
import { ExampleKey, StandardOptions } from '../../../../utils/types/enums';

export const ExamplesPageContainer: FC = (): ReactElement => {
  const { exampleFirstAddress, exampleSecondAddress, exampleThirdAddress } = useTypedSelector(addressesSelector);
  const { exampleFirstOptions, exampleSecondOptions, exampleThirdOptions } = useTypedSelector(examplesOptionsSelector);
  const { getAddress, setMainOptionsWithId } = useActions();

  useEffect(() => {
    getAddress(exampleFirstOptions, StandardOptions.Width, StandardOptions.Height, ExampleKey.First);
    getAddress(exampleSecondOptions, StandardOptions.Width, StandardOptions.Height, ExampleKey.Second);
    getAddress(exampleThirdOptions, StandardOptions.Width, StandardOptions.Height, ExampleKey.Third);
  }, [getAddress, exampleFirstOptions, exampleSecondOptions, exampleThirdOptions]);

  return (
    <ExamplesPage
      exampleFirstAddress={exampleFirstAddress}
      exampleSecondAddress={exampleSecondAddress}
      exampleThirdAddress={exampleThirdAddress}
      exampleFirstOptions={exampleFirstOptions}
      exampleSecondOptions={exampleSecondOptions}
      exampleThirdOptions={exampleThirdOptions}
      setMainOptionsWithId={setMainOptionsWithId}
    />
  );
};
