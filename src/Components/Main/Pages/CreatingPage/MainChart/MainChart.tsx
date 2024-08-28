import type { FC, ReactElement } from 'react';
import classes from './MainChart.module.scss';

type PropsType = {
  address: string;
};

export const MainChart: FC<PropsType> = ({ address }): ReactElement => {
  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={address} alt="Charts" />
      </div>
    </div>
  );
};
