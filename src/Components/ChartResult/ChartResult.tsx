import { useTypedSelector } from '../../hooks/useTypeSelector';
import classes from './ChartResult.module.scss';

const ChartResult = () => {
  const {mainAddress} = useTypedSelector((state) => state.addresses);

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={mainAddress} alt="Charts" />
      </div>
    </div>
  );
};

export default ChartResult;
