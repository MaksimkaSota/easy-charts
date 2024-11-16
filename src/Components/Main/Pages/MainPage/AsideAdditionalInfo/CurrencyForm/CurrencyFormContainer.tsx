import type { ReactElement, FC } from 'react';
import { Formik } from 'formik';
import { CurrencyForm } from './CurrencyForm';
import type { ErrorType, Nullable } from '../../../../../../utils/types/common';

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
  return (
    <Formik
      initialValues={{
        BYN: 'Загрузка...',
        USD: americaCoin,
        EUR: 'Загрузка...',
        RUB: 'Загрузка...',
        UAH: 'Загрузка...',
        PLN: 'Загрузка...',
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
