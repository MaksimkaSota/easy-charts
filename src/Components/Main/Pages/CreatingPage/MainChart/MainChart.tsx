import type { FC, ReactElement } from 'react';
import classes from './MainChart.module.scss';
import { Chart } from '../../../../Common/Chart/Chart';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';

type PropsType = {
  isFetchingAddress?: boolean;
  address: string;
  addressError?: Nullable<ErrorType>;
};

export const MainChart: FC<PropsType> = ({ isFetchingAddress, address, addressError }): ReactElement => {
  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <Chart isFetchingAddress={isFetchingAddress} address={address} addressError={addressError} />
        </div>
      </div>
    </div>
  );
};
