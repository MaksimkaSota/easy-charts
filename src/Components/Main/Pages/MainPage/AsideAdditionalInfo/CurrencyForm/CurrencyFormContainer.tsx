import type { ReactElement, FC } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { CurrencyForm } from './CurrencyForm';
import type { ErrorType, Nullable } from '../../../../../../utils/types/common';
import { ContentTxtKey } from '../../../../../../utils/types/enums';

type PropsType = {
  isFetchingCurrency: boolean;
  belarusCoin: string;
  americaCoin: string;
  europeCoin: string;
  russiaCoin: string;
  ukraineCoin: string;
  polandCoin: string;
  currencyError: Nullable<ErrorType>;
  setCurrencyRequest: () => void;
  getCurrency: (coin: string, name: string) => void;
};

export const CurrencyFormContainer: FC<PropsType> = ({
  isFetchingCurrency,
  belarusCoin,
  americaCoin,
  europeCoin,
  russiaCoin,
  ukraineCoin,
  polandCoin,
  currencyError,
  setCurrencyRequest,
  getCurrency,
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        BYN: t(ContentTxtKey.LoadingService),
        USD: americaCoin,
        EUR: t(ContentTxtKey.LoadingService),
        RUB: t(ContentTxtKey.LoadingService),
        UAH: t(ContentTxtKey.LoadingService),
        PLN: t(ContentTxtKey.LoadingService),
      }}
      onSubmit={() => {}}
    >
      {({ setFieldValue }): ReactElement => (
        <CurrencyForm
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
          setFieldValue={setFieldValue}
        />
      )}
    </Formik>
  );
};
