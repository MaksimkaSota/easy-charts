import { type FC, type ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { addressesSelector, mainOptionsSelector } from '../../../../redux/selectors/selectors';
import { useActions } from '../../../../hooks/useActions';
import { SavePage } from './SavePage';
import { isFetchingMainAddressSelector } from '../../../../redux/selectors/loading';
import { mainAddressErrorSelector } from '../../../../redux/selectors/error';

export const SavePageContainer: FC = (): ReactElement => {
  const isFetchingMainAddress = useTypedSelector(isFetchingMainAddressSelector);
  const { mainAddress, urlAddress } = useTypedSelector(addressesSelector);
  const mainAddressError = useTypedSelector(mainAddressErrorSelector);
  const { mainOptions, width, height } = useTypedSelector(mainOptionsSelector);

  const { getAddress } = useActions();

  useEffect(() => {
    getAddress(mainOptions, width, height);
    // eslint-disable-next-line
  }, [getAddress]);

  return (
    <SavePage
      isFetchingMainAddress={isFetchingMainAddress}
      mainAddress={mainAddress}
      mainAddressError={mainAddressError}
      urlAddress={urlAddress}
    />
  );
};
