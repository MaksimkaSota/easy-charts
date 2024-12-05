import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Chart.module.scss';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import Loader from '../../../assets/images/service/loader.svg';
import { Error } from '../Errors/Error/Error';
import { AltTxtKey } from '../../../utils/types/enums';

type PropsType = {
  isFetchingAddress?: boolean;
  address: string;
  addressError?: Nullable<ErrorType>;
};

export const Chart: FC<PropsType> = ({ isFetchingAddress, address, addressError }): ReactElement => {
  const { t } = useTranslation();

  if (isFetchingAddress) {
    return <Loader className={classes.loader} />;
  }

  if (addressError) {
    return <Error message={addressError.message} code={addressError.code} />;
  }

  return <img className={classes.image} src={address} alt={t(AltTxtKey.Chart)} />;
};
