import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './MainChart.module.scss';
import { Chart } from '../../../../Common/Chart/Chart';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../redux/selectors/selectors';

type PropsType = {
  isFetchingAddress?: boolean;
  address: string;
  addressError?: Nullable<ErrorType>;
};

export const MainChart: FC<PropsType> = ({ isFetchingAddress, address, addressError }): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={classes.chartResult}>
      <h3 className={cn(classes.miniTitle, classes[`miniTitle-${themeMode}`])}>График</h3>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <Chart isFetchingAddress={isFetchingAddress} address={address} addressError={addressError} />
        </div>
      </div>
    </div>
  );
};
