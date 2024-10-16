import { type FC, type ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { addressesSelector, mainOptionsSelector } from '../../../../redux/selectors/selectors';
import { useActions } from '../../../../hooks/useActions';
import { SavePage } from './SavePage';
import { StandardOptions } from '../../../../utils/types/enums';

export const SavePageContainer: FC = (): ReactElement => {
  const { mainAddress, urlAddress } = useTypedSelector(addressesSelector);
  const { mainOptions, width, height } = useTypedSelector(mainOptionsSelector);
  const { getAddress, setMainWidth, setMainHeight } = useActions();

  useEffect(() => {
    getAddress(mainOptions, width, height);
    return () => {
      setMainWidth(StandardOptions.Width);
      setMainHeight(StandardOptions.Height);
    };
    // eslint-disable-next-line
  }, [getAddress, setMainHeight, setMainWidth]);

  return <SavePage mainAddress={mainAddress} urlAddress={urlAddress} />;
};
