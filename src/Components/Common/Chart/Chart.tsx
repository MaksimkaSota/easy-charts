import type { FC, ReactElement } from 'react';
import classes from './Chart.module.scss';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import Loader from '../../../assets/images/service/loader.svg';
import { Error } from '../Errors/Error/Error';

type PropsType = {
  isFetchingAddress?: boolean;
  address: string;
  addressError?: Nullable<ErrorType>;
};

export const Chart: FC<PropsType> = ({ isFetchingAddress, address, addressError }): ReactElement => {
  if (isFetchingAddress) {
    return <Loader className={classes.loader} />;
  }

  if (addressError) {
    return <Error message={addressError.message} code={addressError.code} />;
  }

  return <img className={classes.image} src={address} alt="График" />;
};
