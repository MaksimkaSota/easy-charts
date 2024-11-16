import { type FC, type ReactElement, useEffect } from 'react';
import { useActions } from '../../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { isFetchingCurrencySelector } from '../../../../../../redux/selectors/loading';
import { currencySelector } from '../../../../../../redux/selectors/selectors';
import { currencyErrorSelector } from '../../../../../../redux/selectors/error';
import { CurrencyFormContainer } from './CurrencyFormContainer';
import { FieldName } from '../../../../../../utils/types/enums';

export const CurrencyContainer: FC = (): ReactElement => {
  const isFetchingCurrency = useTypedSelector(isFetchingCurrencySelector);
  const { belarusCoin, americaCoin, europeCoin, russiaCoin, ukraineCoin, polandCoin } =
    useTypedSelector(currencySelector);
  const currencyError = useTypedSelector(currencyErrorSelector);

  const { setCurrencyRequest, getCurrency } = useActions();

  useEffect(() => {
    getCurrency(americaCoin, FieldName.AmericaCoin);
    // eslint-disable-next-line
  }, [getCurrency]);

  return (
    <CurrencyFormContainer
      isFetchingCurrency={isFetchingCurrency}
      belarusCoin={belarusCoin}
      americaCoin={americaCoin}
      europeCoin={europeCoin}
      russiaCoin={russiaCoin}
      ukraineCoin={ukraineCoin}
      polandCoin={polandCoin}
      currencyError={currencyError}
      setCurrencyRequest={setCurrencyRequest}
      getCurrency={getCurrency}
    />
  );
};
