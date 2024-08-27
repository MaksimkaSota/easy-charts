import { FC, ReactElement } from 'react';
import { useTypedSelector } from '../../../../../hooks/useTypeSelector';
import { addressesSelector } from '../../../../../redux/selectors/selectors';
import classes from './MainChart.module.scss';

export const MainChart: FC = (): ReactElement => {
  const {mainAddress} = useTypedSelector(addressesSelector);

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={mainAddress} alt="Charts" />
      </div>
    </div>
  );
};
