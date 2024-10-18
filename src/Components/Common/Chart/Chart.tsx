import type { FC, ReactElement } from 'react';
import classes from './Chart.module.scss';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import Loader from '../../../assets/images/loader.svg';
import { Error } from '../Error/Error';

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
    return <Error code={addressError.code} message={addressError.message} />;
  }

  return <img className={classes.image} src={address} alt="График" />;
};
