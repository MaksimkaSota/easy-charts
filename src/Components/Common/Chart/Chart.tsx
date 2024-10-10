import type { FC, ReactElement } from 'react';
import classes from './Chart.module.scss';

type PropsType = {
  address: string;
};

export const Chart: FC<PropsType> = ({ address }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={address} alt="Chart example" />
      </div>
    </div>
  );
};
