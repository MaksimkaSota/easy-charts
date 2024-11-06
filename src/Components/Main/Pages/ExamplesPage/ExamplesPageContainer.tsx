import { type FC, type ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector } from '../../../../redux/selectors/selectors';
import {
  isFetchingExampleFirstAddressSelector,
  isFetchingExampleSecondAddressSelector,
  isFetchingExampleThirdAddressSelector,
} from '../../../../redux/selectors/loading';
import {
  exampleFirstAddressErrorSelector,
  exampleSecondAddressErrorSelector,
  exampleThirdAddressErrorSelector,
} from '../../../../redux/selectors/error';
import { ExamplesPage } from './ExamplesPage';
import { StandardOption } from '../../../../utils/types/enums';

type PropsType = {
  isMainPage?: boolean;
};

export const ExamplesPageContainer: FC<PropsType> = ({ isMainPage }): ReactElement => {
  const isFetchingExampleFirstAddress = useTypedSelector(isFetchingExampleFirstAddressSelector);
  const isFetchingExampleSecondAddress = useTypedSelector(isFetchingExampleSecondAddressSelector);
  const isFetchingExampleThirdAddress = useTypedSelector(isFetchingExampleThirdAddressSelector);
  const { exampleFirstAddress, exampleSecondAddress, exampleThirdAddress } = useTypedSelector(addressesSelector);
  const exampleFirstAddressError = useTypedSelector(exampleFirstAddressErrorSelector);
  const exampleSecondAddressError = useTypedSelector(exampleSecondAddressErrorSelector);
  const exampleThirdAddressError = useTypedSelector(exampleThirdAddressErrorSelector);
  const { exampleFirstOptions, exampleSecondOptions, exampleThirdOptions } = useTypedSelector(examplesOptionsSelector);

  const { getExampleFirstAddress, getExampleSecondAddress, getExampleThirdAddress, setMainOptionsWithId } =
    useActions();

  useEffect(() => {
    getExampleFirstAddress(exampleFirstOptions, StandardOption.Width, StandardOption.Height);
    getExampleSecondAddress(exampleSecondOptions, StandardOption.Width, StandardOption.Height);
    getExampleThirdAddress(exampleThirdOptions, StandardOption.Width, StandardOption.Height);
  }, [
    getExampleFirstAddress,
    getExampleSecondAddress,
    getExampleThirdAddress,
    exampleFirstOptions,
    exampleSecondOptions,
    exampleThirdOptions,
  ]);

  return (
    <ExamplesPage
      isFetchingExampleFirstAddress={isFetchingExampleFirstAddress}
      exampleFirstAddress={exampleFirstAddress}
      exampleFirstAddressError={exampleFirstAddressError}
      isFetchingExampleSecondAddress={isFetchingExampleSecondAddress}
      exampleSecondAddress={exampleSecondAddress}
      exampleSecondAddressError={exampleSecondAddressError}
      isFetchingExampleThirdAddress={isFetchingExampleThirdAddress}
      exampleThirdAddress={exampleThirdAddress}
      exampleThirdAddressError={exampleThirdAddressError}
      exampleFirstOptions={exampleFirstOptions}
      exampleSecondOptions={exampleSecondOptions}
      exampleThirdOptions={exampleThirdOptions}
      setMainOptionsWithId={setMainOptionsWithId}
      isMainPage={isMainPage}
    />
  );
};
